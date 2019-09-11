import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import Todo from './Todo';
import TodoForm from "./TodoForm";
import './Todo.css';

const TodoList = () => {
    const { state, toggleCompleted, filterCompleted, addTodo, handleDoubleClick, handleChange, handleSubmit } = useContext(TodoContext);

    return (
        <div className="TodoList">
            <h1>TodoList Comp</h1>
            {state.todos.map(todo => {
                        return (
                            <div>
                            <Todo 
                            todo={todo}
                            key={todo.id}
                            toggleCompleted={toggleCompleted}
                            />
                            </div>
                        );
                    })}
                <TodoForm 
                filterCompleted={filterCompleted}
                addTodo={addTodo}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleDoubleClick={handleDoubleClick}
                state={state}
                />
        </div>
    );
  }
  
  export default TodoList;
  