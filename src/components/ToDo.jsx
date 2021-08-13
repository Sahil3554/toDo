import React from "react";
import "./ToDo.css";
// import DeleteIcon from "@material-ui/icons/Delete";
const ToDo = ({ id, text, deleteItem, setData }) => {
  return (
    <div className="todo">
      <h4>{text}</h4>
      {/* <DeleteIcon onClick={deleteItem} /> */}
      <div className="btn-section">
        <button
          onClick={() => {
            setData(text);
            deleteItem(id);
          }}
        >
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <button onClick={() => deleteItem(id)}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default ToDo;
