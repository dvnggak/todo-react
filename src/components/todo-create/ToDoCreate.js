import './toDoCreate.css';

const ToDoCreate = (props) => {
    const HandleSubmit = (event) => {
        event.preventDefault()
        const newToDo = {
            id: Math.floor(Math.random() * 100) +1,
            title: "Learn react",
        };
        props.onCreateToDo(newToDo);

        console.log(newToDo);
    };

    return (
        <form className= "todo-form" onSubmit={HandleSubmit}>
            <input type="text" />
            <button type="submit">Add</button>
        </form>
    );
};

export default ToDoCreate;
