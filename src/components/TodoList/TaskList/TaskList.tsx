import { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { ITodo } from "../../../interfaces/ITodo";
import './styles.css';
import TodoForm from "../TodoForm/TodoForm";
import fetchTodos from "../../../services/api";
import CardFilter from "../CardFilter/CardFilter";
import filterTodos  from "../../../utils/FilterTodo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function TaskList() { 
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [filter, setFilter] = useState<string>("all");
    const [allTasksDone, setAllTasksDone] = useState(false);


    useEffect(() => {
        const getTodos = async () => {
            try{
                const getTodoApi = await fetchTodos();
                setTodos(getTodoApi);
            }catch (error) {
                console.log("Erro ao buscar os todos: ", error);
            }
        }

        getTodos();
    },[]);

    const addTodo = (title: string) => {
        const newTodo: ITodo = {id: Date.now().toString(), title: title, isDone: false}
        setTodos([...todos, {id: Date.now().toString(), title, isDone: false}]);
    }

    const editTodo = (id: string, newTitle: string) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, title: newTitle} : todo
        ));
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    
    const allDone = () => {
        const updateStatus =  todos.map(todo => ({...todo, isDone: !allTasksDone}));
        setTodos(updateStatus);
        setAllTasksDone(!allTasksDone);
    }

    const handleFilter = (filter: string) => {
        setFilter(filter);
    }

    const handleClearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.isDone));
    };

    const remainingItems = todos.filter((todo) => !todo.isDone).length;

    const filteredTodos = filterTodos(todos, filter);

    return (
        <>
        <Header title={"todos"}/>
            <TodoForm addTodo={addTodo} allDone={allDone}/>
            <ul className="">
                <div className="container">
                    {filteredTodos.map((task, index) => (
                            <TodoItem
                            key={task.id}
                            item={task} 
                            editTodo={editTodo}
                            deleteTodo={deleteTodo}
                            isChecked={task.isDone}
                            setIsChecked={(checked: boolean) => {
                                setTodos(todos.map(todo => 
                                    todo.id === task.id ? { ...todo, isDone: checked } : todo
                                ));
                            }}
                            />
                    ))}

                    {todos.length > 0 && <CardFilter
                    remainingItems={remainingItems}
                    handleFilter={handleFilter}
                    handleClearCompleted={handleClearCompleted}
                    filter={filter}
                    statusChecked={todos.some(todo => todo.isDone)}
                    />}
                </div>
            </ul>

            <Footer />
        </>
    );
}