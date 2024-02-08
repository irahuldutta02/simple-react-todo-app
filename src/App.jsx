import {} from "react";
import "./App.css";
import Todo from "./Components/Todo";

function App() {
  const todos = [
    { data: "todo1", id: 312 },
    { data: "todo2", id: 313 },
    { data: "todo3", id: 213 },
  ];
  return (
    <>
      <main>
        <Todo todoList={todos} />
      </main>
    </>
  );
}

export default App;
