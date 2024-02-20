import { KeyboardEvent, useState } from "react";
import IconDown from "../../icons/Down";
import "./styles.css";

interface newTodo {
    addTodo: (title: string) => void;
    allDone: () => void;
}

export default function TodoForm({addTodo, allDone}: newTodo) {
    const [value, setValue] = useState('');

    const handleAddTask = (event: KeyboardEvent) => {
        if(event.code === 'Enter' && value !== '') {
            addTodo(value);
            setValue('');
        }else if(event.code === 'Escape') {
            setValue('');
        }
    }


    return (
        <>
            <div className="inputtask">
                <div className="div-icon" onClick={allDone}>
                    <IconDown className="IconDown"/>
                </div>
                <div>
                    <input 
                    className="input-form"
                    type="text" 
                    placeholder="What needs to be done?"
                    onKeyUp={handleAddTask}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    autoFocus
                    />
                </div>
            </div>
        </>
    );
}