import React, { useReducer } from "react";
import TodoList from './components/TodoList.js';
import './App.css';

import { initialState, todoReducer } from "./reducers/todoReducer";
import { TodoContext } from './contexts/TodoContext.js';

function App() {
  
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);
  
  
  // const addTodo = task => {
  //   this.setState({
  //     todos: [...this.state.todos, {
  //       task: task,
  //       id: Date.now(),
  //       completed: false
  //     }]
  //   })
  // };

  // const toggleCompleted = id => {
  //   this.setState({ 
  //     todos: state.todos.map(todo => {
  //       if (id === todo.id) {
  //         return {...todo, completed: !todo.completed}
  //       } else {
  //         return todo;
  //       }
  //     })
  //   });
  // };
    
  // const filterCompleted = () => {
  //   this.setState({
  //     todos: state.filter(todo => {
  //       return !todo.completed;
  //       // if (!todo.completed) {
  //       //   return true;
  //       // } else {
  //       //   return true;
  //       // }
  //     })
  //   });
  // };


  const filterCompleted = () => {
    dispatch({ type: "FILTER_COMPLETED"})
  }

  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id})
  };

  const addTodo = task => {
    return(task ? dispatch({ type: "ADD_TODO", payload: task}) : null);
  };


//------------------------------------------

  return (
    <TodoContext.Provider value={{ state, addTodo, toggleCompleted, filterCompleted }}>
      <div className="App">
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;