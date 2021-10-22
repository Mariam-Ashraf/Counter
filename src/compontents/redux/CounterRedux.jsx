// import { createStore } from "redux";

//Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const incrementNum = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};

export const decrementNum = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};

//State
const initialState = {
  counter: 0,
};

//Reducer
export const counterReducer = (state = initialState, action) => {
  if (state.counter === 0 && action.type === DECREMENT) {
    return state;
  }

  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + action.payload };
    case DECREMENT:
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

//Store
//export const counterStore = createStore(counterReducer);
