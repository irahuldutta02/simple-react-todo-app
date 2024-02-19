import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [
      { data: "Buy Milk", id: crypto.randomUUID() },
      { data: "Buy Bread", id: crypto.randomUUID() },
      { data: "Buy Butter", id: crypto.randomUUID() },
    ],
  },
  reducers: {
    addTodo: (todos, action) => {
      todos.value.push(action.payload);
    },
    deleteTodo: (todos, action) => {
      todos.value = todos.value.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (todos, action) => {
      todos.value = todos.value.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.data = action.payload.data;
        }
        return todo;
      });
    },
  },
});
