import React from "react";
import ToDo from "./ToDo";
const ToDoList = ({ toDo, deleteItem, setData }) => {
  return (
    <div className="todo-list">
      {toDo.map((cValue, index) => {
        return (
          <ToDo
            key={index}
            id={index}
            text={cValue}
            deleteItem={deleteItem}
            setData={setData}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
