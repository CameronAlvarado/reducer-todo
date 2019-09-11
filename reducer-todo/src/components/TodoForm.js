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
                className="input"
            />
            <div className="button-box">
                <button type="submit" className="button"> Add new todo
                </button>
                <button onClick={props.filterCompleted} className="button"> Clear completed</button>
            </div>
        </form>
    )
}

export default TodoForm