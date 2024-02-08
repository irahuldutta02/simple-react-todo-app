import { ADD_TODO } from "../constants/constants";

export const addToDo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteToDo = (toDoId) => {
  return {
    type: "DELETE_TODO",
    payload: toDoId,
  };
};

export const editToDo = (todo) => {
  return {
    type: "EDIT_TODO",
    payload: todo,
  };
};
