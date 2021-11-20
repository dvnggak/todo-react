import "./todo.css";
import Todolist from "../todo-list/toDoList";
import ToDoCreate from "../todo-create/ToDoCreate";

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

    const eventCreateToDo = (todo) => {
        todos.push(todo)
        console.log(todos)
    };

    return (
        <div>
            <h3>
                To-Do List
            </h3>
            <ToDoCreate onCreateToDo = {eventCreateToDo} />
            <Todolist dataTodos = {todos} />
        </div>
    )
};

export default todo;