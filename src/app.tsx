import React, { useState } from "react";
import "./global.css";
import CreateTask from "./components/TodoList/TodoForm/TodoForm";
import Task from "./components/TodoList/TodoItem/TodoItem";
import {ITodo} from "./interfaces/ITodo";
import TaskList from "./components/TodoList/TaskList/TaskList";


export default function App() {

  return (
    <section>
      <TaskList />
    </section>
  );
}
