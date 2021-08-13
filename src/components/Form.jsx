import React from "react";
import "./form.css";
const Form = ({ data, setData, setToDos }) => {
  const btnFun = () => {
    if (data) {
      setToDos((cvalue) => {
        return [...cvalue, data];
      });
      setData("");
    }
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Add a Item"
        value={data}
        onChange={(e) => setData(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            btnFun(e);
          }
        }}
      />
      <button type="submit" onClick={btnFun}>
        +
      </button>
    </div>
  );
};

export default Form;
