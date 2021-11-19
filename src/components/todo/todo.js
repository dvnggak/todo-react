import "./todo.css";
import Todolist from "../todo-list/toDoList";

const todo = () => {
    const todos = [
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
    ];

    return (
        <div>
            <h3>
                To-Do List
            </h3>
            <Todolist dataTodos = {todos} />
        </div>
    )
};

export default todo;