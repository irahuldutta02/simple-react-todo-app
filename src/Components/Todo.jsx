import { useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo, editToDo } from "../actions/actions";

function Todo() {
  const todoItems = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");

  function deleteTodo(id) {
    dispatch(deleteToDo(id));
  }

  function editTodo(id, newTodoData) {
    dispatch(editToDo(id, newTodoData));
  }

  function addNewToDo(inputText) {
    if (inputText === "") return;
    let newTodo = { data: inputText, id: crypto.randomUUID() };
    dispatch(addToDo(newTodo));
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
            if (e.key === "Enter") addNewToDo(inputText);
          }}
        />
        <button onClick={() => addNewToDo(inputText)}>Add ToDo</button>
      </div>
      <ul className="todo-list">
        {todoItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            delete={() => deleteTodo(todo.id)}
            edit={(newTodoData) => editTodo(todo.id, newTodoData)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
