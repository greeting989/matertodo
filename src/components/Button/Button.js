import React from "react";
import Button from "react-bootstrap/Button";
import "./button.css";
function Submit(props) {
  const { title = "Add", addHandler } = props;
  return (
    <div>
      <button size="sm" className="button-81" onClick={props.addHandler}>
        🖋{title}
      </button>
    </div>
  );
}

export default Submit;
