import Delete from "../../icons/Delete";
import "./styles.css";

interface onClick {
    deleteClick: () => void;
}

export default function DeleteButton({deleteClick} : onClick) {
    return (
        <div onClick={deleteClick}>
            <Delete className="icon"/>
        </div>
    );
}