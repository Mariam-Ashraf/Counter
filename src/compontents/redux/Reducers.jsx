import { counterReducer } from "../redux/CounterRedux";
import { todoReducer } from "../redux/TodoRedux";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counterReducer,
  todoReducer,
});

export default reducers;
