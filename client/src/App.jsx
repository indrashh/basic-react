import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function Task(props) {
  const { id, task, status } = props.todo;
  const statusText = status ? "true" : "false";
  return (
    <>
      <p>no: {id}</p>
      <h1>Task: {task}</h1>
      <h3>Status: {statusText}</h3>
    </>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  function getTodos() {
    axios({
      method: "GET",
      url: "http://localhost:3000/todos",
    })
      .then((result) => {
        setTodos(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {todos.map((todo) => {
        return <Task todo={todo} />;
      })}
      <button onClick={getTodos}>Klik</button>
    </>
  );
}

export default App;
