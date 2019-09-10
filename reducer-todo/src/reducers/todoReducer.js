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
          ...state, // always return a speading state in reducers.
          todos: [...state.todos, {
            item: action.payload, 
            id: Date.now(), 
            completed: false
          }]
        };
      case "UPDATE_TITLE":
        return {
          ...state,
          title: action.payload,
          editing: !state.editing
        };
      default:
        return state;
    }
  };
  