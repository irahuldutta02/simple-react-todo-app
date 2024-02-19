import { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
import { todoSlice } from "../slices/TodoSlice";

function Todo() {
  const todoItems = useSelector((state) => state.todos.value);

  const { addTodo } = todoSlice.actions;

  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  function handleAddTodo(inputText) {
    if (inputText === "") return;
    let newTodo = { data: inputText, id: crypto.randomUUID() };
    dispatch(addTodo(newTodo));
    setInputText("");
  }

  return (
    <div className="main">
      <div className="title">
        <h1>ToDo App</h1>
      </div>
      <div className="add-todo">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddTodo(inputText);
          }}
        />
        <button onClick={() => handleAddTodo(inputText)}>Add ToDo</button>
      </div>
      <ul className="todo-list">
        {todoItems.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
