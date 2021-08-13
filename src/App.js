import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import React, { useState } from "react";

function App() {
  let local = JSON.parse(localStorage.getItem("todos"));
  console.log(local);
  const [data, setData] = useState("");
  const [toDo, setToDos] = useState(local);
  const deleteItem = (id) => {
    setToDos((cvalue) => {
      return cvalue.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  const store = () => {
    if (localStorage.getItem("todos") === null) {
      console.log("created");
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(toDo));
    }
  };
  store();
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
