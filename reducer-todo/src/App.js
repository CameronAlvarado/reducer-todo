import React, { useState, useReducer } from "react";
import TodoList from './components/TodoList.js';
import './App.css';

import { initialState, todoReducer } from "./reducers/todoReducer";
import { TodoContext } from './contexts/TodoContext.js';

function App() {
  // const [newTitleText, setNewTitleText] = useState();
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  const filterCompleted = () => {
    dispatch({
      todos: state.filter(todo => {
        return !todo.completed;
        // if (!todo.completed) {
        //   return true;
        // } else {
        //   return true;
        // }
      })
    });
  }

  const toggleCompleted = id => {
    dispatch({ 
      todos: state.map(todo => {
        if (id === todo.id) {
          return {...todo, completed: !todo.completed}
        } else {
          return todo;
        }
      })
    });
  }
    
  const addTodo = task => {
    this.setState({
      todos: [...this.state.todos, {
        task: task,
        id: Date.now(),
        completed: false
      }]
    })
  }

  return (
    <TodoContext.Provider value={{ state, filterCompleted, toggleCompleted, addTodo }}>
      <div className="App">
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
