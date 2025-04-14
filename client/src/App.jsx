import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Title from "./components/Title";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Title />
      <Form />
      <Table></Table>
    </>
  );
}

export default App;
