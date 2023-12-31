import { useState } from "react";
import TodoItem from "./TodoItem";

function Todo(props) {
  const [todoItems, setTodoItems] = useState([
    { data: "Buy Milk", id: 1 },
    { data: "Buy Bread", id: 2 },
    { data: "Buy Butter", id: 3 },
  ]);
  const [inputText, setInputText] = useState("");

  function deleteTodo(id) {
    let remainingTodos = todoItems.filter((todo) => todo.id != id);
    setTodoItems(remainingTodos);
  }

  function editTodo(id, newTodo) {
    let updatedTodos = todoItems.map((todo) => {
      if (todo.id === id) todo.data = newTodo;
      return todo;
    });
    setTodoItems(updatedTodos);
  }

  function generateId(todoItems) {
    if (todoItems.length === 0) return 1;
    return (todoItems[todoItems.length - 1].id + 1);
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
        />
        <button
          onClick={() =>
            setTodoItems([
              ...todoItems,
              { data: inputText, id: generateId(todoItems) },
            ])
          }
        >
          Add ToDo
        </button>
      </div>
      <ul className="todo-list">
        {todoItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id} // id: 1
            delete={() => deleteTodo(todo.id)}
            edit={(newTodo) => editTodo(todo.id, newTodo)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
