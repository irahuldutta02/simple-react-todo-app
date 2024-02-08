import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../constants/constants";

export const addToDo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const editToDo = (id, todoData) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      data: todoData
    },
  };
};
