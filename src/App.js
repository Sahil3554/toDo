// import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [toDo, setToDos] = useState([]);
  const deleteItem = (id) => {
    setToDos((cvalue) => {
      return cvalue.filter((arr, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <div className="test">
        <h1 className="title">ToDo List</h1>
        <Form data={data} setData={setData} setToDos={setToDos} />
        <ToDoList toDo={toDo} deleteItem={deleteItem} setData={setData} />
      </div>
    </div>
  );
}

export default App;
