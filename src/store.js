import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/TodoSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
  devTools: true,
});
