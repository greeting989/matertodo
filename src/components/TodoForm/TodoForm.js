import React, { useState } from "react";
import InputBox from "./../TextBox/TextBox";
import Header from "./../Header/Header";

function TodoForm() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addHandler = () => {
    if (!inputData) {
      alert("Add item");
    } else if (items.findIndex((item) => item.name === inputData) === -1) {
      const mynewData = {
        id: new Date().getTime().toString(),
        name: inputData,
        isCompleted: false,
        isEditing: false,
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
    if (!inputData) {
      return;
    } else if (e.key === "Enter") {
      if (items.findIndex((item) => item.name === inputData) === -1) {
        const myNewData = {
          id: new Date().getTime().toString(),
          name: inputData,
          isCompleted: false,
          isEditing: false,
        };
        setItems([...items, myNewData]);
        setInputData("");
      }
    }
  };
  const completeHandler = (index) => {
    let compToDo = [...items];
    compToDo[index].isCompleted = !compToDo[index].isCompleted;
    setItems(compToDo);
  };
  const EditHandler = (index) => {
    let editToDo = [...items];
    editToDo[index].isEditing = !editToDo[index].isEditing;
    setItems(editToDo);
  };
  const editTodo = (id, name) => {
    let editTodos = items.map((item) => {
      if (item.id === id) {
        item.name = name;
      }
      return item;
    });
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
        completeHandler={completeHandler}
        EditHandler={EditHandler}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoForm;
