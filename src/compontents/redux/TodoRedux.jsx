// import { createStore } from "redux";

//Actions
const ADD_TO_LIST = "ADD_TO_LIST";
const DELETE_FROM_LIST = "DELETE_FROM_LIST";

export const addToList = (payload) => {
  return {
    type: ADD_TO_LIST,
    payload,
  };
};

export const deleteFromList = (payload) => {
  return {
    type: DELETE_FROM_LIST,
    payload,
  };
};

//State
const initialState = {
  todoList: [],
};

//Reducer
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return { ...state, todoList: [...state.todoList, action.payload] };
    case DELETE_FROM_LIST:
      return {
        ...state,
        todoList: [
          ...state.todoList.filter((todoItem, i) => i !== action.payload),
        ],
      };
    default:
      return state;
  }
};

//Store
//export const todoStore = createStore(todoReducer);
