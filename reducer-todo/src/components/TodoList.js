import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import Todo from './Todo';
import TodoForm from "./TodoForm";
import './Todo.css';

const TodoList = () => {
    const { state, toggleCompleted, filterCompleted, addTodo } = useContext(TodoContext);

    return (
        <div className="TodoList">
            <h1>TodoList 2.0</h1>
                <TodoForm 
                filterCompleted={filterCompleted}
                addTodo={addTodo}
                state={state}
                />

{state.todos.map(todo => {
                        return (
                            <Todo 
                            todo={todo}
                            key={todo.id}
                            toggleCompleted={toggleCompleted}
                            />
                        );
                    })}
        </div>
    );
}
  
export default TodoList;