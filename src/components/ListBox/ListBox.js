import React from "react";
import "./listbox.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
function ListBox(props) {
  const { item, completeHandler, index } = props;
  const changeInputHandler = (e) => {
    let c1 = e.target.value;
    return c1;
  };
  // console.log(item.isCompleted);
  return (
    <span
      className={item.isCompleted ? "todo-text todo-completed" : "todo-text"}
    >
      <i class="bi bi-check2-circle" onClick={() => completeHandler(index)}></i>
      <p>{item.name}</p>
    </span>
  );
}

export default ListBox;
