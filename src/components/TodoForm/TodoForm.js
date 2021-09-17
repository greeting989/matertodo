import React, { useState } from "react";
import { Container } from "react-bootstrap";
import InputBox from "./../TextBox/TextBox";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Header from "./../Header/Header";

function TodoForm() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addHandler = () => {
    if (!inputData) {
      alert("Add item");
    } else if(items.findIndex((item)=>item===inputData)===-1){
      const mynewData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, mynewData]);
      setInputData("");
    }
  };

  const DeleteHandler = (id) => {
    let updatedList = items.filter((curElement) => {
      return curElement.id !== id;
    });
    setItems(updatedList);
  };
  const setEnterHandler = (e) => {
    if (e.key === "Enter") {
      const myNewData = {
        id: new Date().getTime().toString(),
        name: inputData,
      
      };
      setItems([...items, myNewData]);
      setInputData("");
    }
  };
  return (
    <div>
      <Header />
      <InputBox
        inputData={inputData}
        setInputData={setInputData}
        items={items}
        addHandler={addHandler}
        DeleteHandler={DeleteHandler}
        setEnterHandler={setEnterHandler}
      />
    </div>
  );
}

export default TodoForm;
