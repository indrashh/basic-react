import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Profile() {
  const [user, setUser] = useState({
    name: "Indra",
    age: 21,
    job: "student",
  });

  const increament = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  const newJob = () => {
    setUser({ ...user, job: "Programmer" });
  };

  return (
    <>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <p>job: {user.job}</p>
      <button onClick={increament}>Get older</button>
      <button onClick={newJob}>New job</button>
    </>
  );
}

function App() {
  return <Profile />;
}

export default App;
