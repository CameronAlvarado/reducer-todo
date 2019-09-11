import React, { useState } from 'react';
import './Todo.css';

const TodoForm = (props) => {
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        // console.log("Change handler activated!");
        setInput(event.target.value);
      };

    const handleSubmit = (event) => {
            event.preventDefault();
            props.addTodo(input);
            setInput("")
        }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                onChange={handleChange}
                type="text"
                name="newtodo"
                placeholder="Add new todo"
                value={input}
            />
            <button type="submit"> Add new todo
            </button>
            <button onClick={props.filterCompleted}> Clear completed</button>
        </form>
    )
}

export default TodoForm