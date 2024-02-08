import { useState } from "react";

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [todoData, setTodoData] = useState(props.todo.data);
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
                props.edit(todoData);
              }
            }}
          />
        ) : (
          <span className="todo-data-text">{props.todo.data}</span>
        )}
      </div>

      <div className="btnSDiv">
        {!isEditing && (
          <button
            onClick={() => {
              props.delete();
            }}
          >
            Done
          </button>
        )}

        <button
          onClick={() => {
            setIsEditing(!isEditing);
            isEditing && props.edit(todoData);
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
