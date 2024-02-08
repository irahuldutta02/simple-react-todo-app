import { createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";

const reduxDevtoolEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  combineReducers({ todos: todoReducer }),
  {},
  reduxDevtoolEnhancer
);

export default store;
