import React from 'react';
// import { EVENTS } from 'saxes';

const TodoForm = (props) => {

    // const handleChange = (event) => {
    //     // console.log("Change handler activated!");
    //     this.setState({ [event.target.name]: event.target.value });
    //   };

    // const handleSubmit = (event) => {
    //         event.preventDefault();
    //         props.addTodo(this.state.newtodo);
    //         this.setState({ newtodo: ""})
    //     }

    return (
        <form onSubmit={props.handleSubmit}>
            <input 
                onChange={props.handleChange}
                type="text"
                name="newtodo"
                placeholder="Add new todo"
                value={props.state}
            />
            <button 
                type="submit"> Add new todo
            </button>
            <button onDoubleClick={props.filterCompleted}> Double click to clear completed</button>
        </form>
    )
}

export default TodoForm