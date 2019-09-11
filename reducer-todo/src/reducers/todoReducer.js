// export two things - int state, reducer fn

export const initialState = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]
}
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state, // always return a spreading state in reducers.
          todos: [...state.todos, {
            item: action.payload, 
            id: Date.now(), 
            completed: false
          }]
        };
      case "TOGGLE_COMPLETED":
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (action.payload === todo.id) {
              return {...todo, completed: !todo.completed}
            } else {
              return todo;
            }
          })
        };
      case "FILTER_COMPLETED":
        return {
          ...state,
          todos: state.todos.filter(todo => {
            return !todo.completed;
            if (!todo.completed) {
              return true;
            } else {
              return false;
            }
          })
        }
      default:
        return state;
    }
  };
  