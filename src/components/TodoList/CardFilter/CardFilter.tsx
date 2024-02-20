import "./styles.css";

interface CardFilter {
    remainingItems: number;
    handleFilter: (filter: string) => void;
    handleClearCompleted: () => void;
    filter: string;
    statusChecked: boolean;
}

export default function CardFilter({remainingItems, handleFilter, handleClearCompleted, filter, statusChecked}: CardFilter) {

    return (
        <>
            <div className={filter === "active" ? "border-top card-filter": "card-filter"}>
                <div className="count">
                    <p>{remainingItems} {remainingItems === 1 ? "item" : "items"} left</p>
                </div>

                <div className="button-filter">
                    <button 
                    className={filter === "all" ? "clicado" : ""} 
                    onClick={() => {handleFilter("all")}}>All</button>

                    <button
                    className={filter === "active" ? "clicado" : ""} 
                    onClick={() => handleFilter("active")}
                    >Active</button>

                    <button
                    className={filter === "completed" ? "clicado" : ""} 
                    onClick={() => handleFilter("completed")}
                    >Completed</button>
                </div>

                <div className={statusChecked ? "isVisible" : "isNoVisible"}>
                    <button 
                    className="button-hover"
                    onClick={handleClearCompleted}>Clean Completend</button>
                </div>
            </div>
        </>
    );
}