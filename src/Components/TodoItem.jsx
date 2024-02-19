import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoSlice } from "../slices/TodoSlice";

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [todoData, setTodoData] = useState(todo.data);

  const { deleteTodo, editTodo } = todoSlice.actions;

  const dispatch = useDispatch();

  function handleDeleteTodo(id) {
    dispatch(deleteTodo(id));
  }

  function handleEditTodo(id, newTodoData) {
    dispatch(editTodo({ id: id, data: newTodoData }));
  }

  return (
    <li className="todo-item">
      <div className="todo-data">
        {isEditing ? (
          <input
            type="text"
            value={todoData}
            onChange={(e) => setTodoData(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsEditing(false);
                handleEditTodo(todo.id, todoData);
              }
            }}
          />
        ) : (
          <span className="todo-data-text">{todo.data}</span>
        )}
      </div>

      <div className="btnSDiv">
        {!isEditing && (
          <button
            onClick={() => {
              handleDeleteTodo(todo.id);
            }}
          >
            Done
          </button>
        )}

        <button
          onClick={() => {
            setIsEditing(!isEditing);
            isEditing && handleEditTodo(todo.id, todoData);
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
