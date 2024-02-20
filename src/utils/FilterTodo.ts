import { ITodo } from "../interfaces/ITodo";

export default function filterTodos(todos: ITodo[], filter: string): ITodo[] {
    switch (filter) {
        case 'active':
            return todos.filter(todo => !todo.isDone);
        case 'completed':
            return todos.filter(todo => todo.isDone);
        default:
            return todos;
    }
}