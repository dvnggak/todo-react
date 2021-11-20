import './toDoCreate.css';
import { useState } from "react"

const ToDoCreate = (props) => {
    const [getInputToDo, setInputToDo] = useState('')

    const HandleSubmit = (event) => {
        event.preventDefault()
        const newToDo = {
            id: Math.floor(Math.random() * 100) +1,
            title: getInputToDo,
        };
        props.onCreateToDo(newToDo);

        setInputToDo('')

        // console.log(newToDo);
    };

    const handleInputToDo = (event) => {
        setInputToDo(event.target.value);
        console.log(getInputToDo)
    };

    return (
        <form className= "todo-form" onSubmit={HandleSubmit}>
            <input type="text" value={getInputToDo} onChange={handleInputToDo} />
            <button type="submit">Add</button>
        </form>
    );
};

export default ToDoCreate;
