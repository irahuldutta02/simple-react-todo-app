import "./App.css";
import Todo from "./Components/Todo";

function App() {
  const todos = [
    { data: "todo1", id: 312 },
    { data: "todo2", id: 313 },
    { data: "todo3", id: 213 },
  ];
  return (
    <div className="App">
      <main>
        <Todo todoList={todos} />
      </main>
    </div>
  );
}

export default App;
