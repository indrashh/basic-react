import { useState } from "react";
import axios from "axios";

function Form() {
  const [task, setTask] = useState("");
  const submitHandler = () => {
    axios({
      method: "POST",
      url: "http://localhost:3000/todos",
      data: {
        task,
        status: false,
      },
    })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="inputForm">
        <input
          type="text"
          placeholder="Masukkan Task"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="buttonForm">
        <button onClick={() => submitHandler()}>Add Task</button>
      </div>
    </>
  );
}

export default Form;
