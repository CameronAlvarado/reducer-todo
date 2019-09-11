import React, { useReducer } from "react";
import TodoList from './components/TodoList.js';
import './App.css';

import { initialState, todoReducer } from "./reducers/todoReducer";
import { TodoContext } from './contexts/TodoContext.js';

function App() {
  // const [newTitleText, setNewTitleText] = useState();
  const [state, dispatch] = useReducer(todoReducer, initialState);
  // console.log(state);
  
  //------------------------------------------

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
    
  // const addTodo = task => {
  //   this.setState({
  //     todos: [...this.state.todos, {
  //       task: task,
  //       id: Date.now(),
  //       completed: false
  //     }]
  //   })
  // };
  const filterCompleted = () => {
    dispatch({ type: "FILTER_COMPLETED"})
  }

  const toggleCompleted = id => {
    console.log(id);
    dispatch({ type: "TOGGLE_COMPLETED", payload: id})
  };

  const addTodo = task => {
    console.log(task);
    dispatch({ type: "ADD_TODO", payload: task})
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
