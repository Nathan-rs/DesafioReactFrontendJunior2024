import "./styles.css";

interface Title {
    title: string;
}

export default function Header({title}: Title) {
    return (
        <h1 className="title">{title}</h1>
    );
}