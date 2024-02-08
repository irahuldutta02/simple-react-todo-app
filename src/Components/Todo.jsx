import { useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addToDo, deleteToDo, editToDo } from "../actions/actions";

function Todo() {
  const todoItems = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { addToDo, deleteToDo, editToDo },
    dispatch
  );

  const [inputText, setInputText] = useState("");

  function deleteTodo(id) {
    actions.deleteToDo(id);
  }

  function editTodo(id, newTodoData) {
    actions.editToDo(id, newTodoData);
  }

  function addNewToDo(inputText) {
    if (inputText === "") return;
    let newTodo = { data: inputText, id: crypto.randomUUID() };
    actions.addToDo(newTodo);
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
