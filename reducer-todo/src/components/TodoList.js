import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import Todo from './Todo';
import './Todo.css';

const TodoList = () => {
    const { state, toggleCompleted } = useContext(TodoContext);

    return (
        <div className="TodoList">
            <h1>TodoList Comp</h1>
            {console.log(state)}
            {state.todos.map(todo => {
                        return (
                            <div>
                                {console.log(todo.id)}
                            <Todo 
                            todo={todo}
                            key={todo.id}
                            toggleCompleted={toggleCompleted}
                            />
                            </div>
                        );
                    })}
        </div>
    );
  }
  
  export default TodoList;
  