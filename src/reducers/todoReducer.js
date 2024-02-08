import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../constants/constants";

const initialToDos = [
  { data: "Buy Milk", id: crypto.randomUUID() },
  { data: "Buy Bread", id: crypto.randomUUID() },
  { data: "Buy Butter", id: crypto.randomUUID() },
];

export function todoReducer(todos = [...initialToDos], action) {
  if (action.type == ADD_TODO) {
    return [action.payload, ...todos];
  }
  if (action.type == DELETE_TODO) {
    return todos.filter((todo) => todo.id !== action.payload);
  }
  if (action.type == EDIT_TODO) {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        todo.data = action.payload.data;
        return todo;
      }
      return todo;
    });
  }
  return todos;
}
