import React,{ UseState } from "react";

import "./todo.css";
import Todolist from "../todo-list/toDoList";
import ToDoCreate from "../todo-create/ToDoCreate";

const todo = () => {
    const [GetTodos, setTodos] = UseState(
        {
            id : 1,
            title : "Eat",
        },
        {
            id : 2,
            title :"Sleep",
        },
        {
            id : 3,
            title :"Code",
        },
    );

    const eventCreateToDo = (todo) => {
        setTodos(GetTodos.concat(todo))
        console.log(GetTodos)
    };

    return (
        <div>
            <h3>
                To-Do List
            </h3>
            <ToDoCreate onCreateToDo = {eventCreateToDo} />
            <Todolist dataTodos = {GetTodos} />
        </div>
    )
};

export default todo;