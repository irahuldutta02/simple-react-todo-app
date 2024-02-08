import { useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [todoItems, setTodoItems] = useState([
    { data: "Buy Milk", id: crypto.randomUUID() },
    { data: "Buy Bread", id: crypto.randomUUID() },
    { data: "Buy Butter", id: crypto.randomUUID() },
  ]);
  const [inputText, setInputText] = useState("");

  function deleteTodo(id) {
    let remainingTodos = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(remainingTodos);
  }

  function editTodo(id, newTodo) {
    let updatedTodos = todoItems.map((todo) => {
      if (todo.id === id) todo.data = newTodo;
      return todo;
    });
    setTodoItems(updatedTodos);
  }

  function addNewToDo(inputText) {
    if (inputText === "") return;
    let newTodo = { data: inputText, id: crypto.randomUUID() };
    setTodoItems([newTodo, ...todoItems]);
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
            edit={(newTodo) => editTodo(todo.id, newTodo)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
