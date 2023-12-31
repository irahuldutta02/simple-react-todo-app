import { useState } from "react";

function TodoItem(props) {
  const [isEditting, setIsEditting] = useState(false);
  const [todoData, setTodoData] = useState(props.todo.data);
  return (
    <li className="todo-item">
      <div className="todo-data">
        {isEditting ? (
          <input
            type="text"
            value={todoData}
            onChange={(e) => setTodoData(e.target.value)}
          />
        ) : (
          <span className="todo-data-text">{props.todo.id} : {props.todo.data}</span>
        )}
      </div>

      <div className="btnSDiv">
        <button
          onClick={() => {
            props.delete();
          }}
        >
          Done
        </button>

        <button
          onClick={() => {
            setIsEditting(!isEditting);
            isEditting && props.edit(todoData);
          }}
        >
          {isEditting ? "Save" : "Edit"}
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
