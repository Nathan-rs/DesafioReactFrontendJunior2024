import { KeyboardEvent, useState } from "react";
import { ITodo } from "../../../interfaces/ITodo";
import DeleteButton from "../DeleteButton/DeleteButton";
import "./styles.css";
import Check from "../../icons/Check";

interface Item {
    item: ITodo;
    editTodo: (id: string, newTitle: string) => void;
    deleteTodo: (id: string) => void;
    isChecked: boolean;
    setIsChecked: (check: boolean) => void;
}

export default function TodoItem({item, editTodo, deleteTodo, isChecked, setIsChecked}: Item) {
    
    const [newTitle, setNewTitle] = useState(item.title);
    const [editing, setEditing] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleDoubleClick = () => {
        setEditing(true);
        console.log(editing);
    }

    const handleSave = () => {
        editTodo(item.id, newTitle);
        setEditing(false);
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if(event.code === 'Enter') {
            handleSave();
        }else if(event.code === 'Escape') {
            setNewTitle(item.title);
            setEditing(false);
        }
    }


    return (
        <>
            <li 
            className={item.isDone ? 'completed': ''}
            onMouseEnter={() => setIsHovered(true)}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <div className="view-task">    
                <div 
                    className={`checkbox ${isChecked ? 'checked' : ''}`} 
                    onClick={() => setIsChecked(!isChecked)}
                >
                    
                    {isChecked && <Check class="checkbox-icon" />}
                </div>

                    {editing ? (
                        <input type="text"
                        className="edit"
                        value={newTitle}
                        checked={isChecked}
                        onChange={(e) => setNewTitle(e.target.value)}
                        onBlur={handleSave}
                        onKeyUp={handleKeyDown}
                        autoFocus
                        />
                    ) : (
                        <label className={`cardname ${isChecked ? 'checked' : ''}`} onDoubleClick={handleDoubleClick}>{newTitle}</label>
                    )}
                    {isHovered && (
                        <DeleteButton deleteClick={() => deleteTodo(item.id)} />
                    )}
                </div>
            </li>
        </>
    );
}