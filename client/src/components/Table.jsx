import { useEffect, useState } from "react";
import axios from "axios";

function Table() {
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

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <>
                <tr>
                  <td>{todo.id}</td>
                  <td>{todo.task}</td>
                  <td>{JSON.stringify(todo.status)}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
