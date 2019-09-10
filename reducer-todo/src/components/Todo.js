import React from 'react';

const Todo = (props) => {

return (
    <div 
    onClick={() => props.toggleCompleted(this.props.todo.id)}
    className={props.todo.completed ? "completed" : ""}>
        {console.log(props.todo)}
        <p>{props.todo.item}</p>
    </div>
    )
}

export default Todo