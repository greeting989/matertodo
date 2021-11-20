import React, { useState } from "react";
import InputBox from "./../TextBox/TextBox";
import Header from "./../Header/Header";
import img from "./img2.svg";
import "./todoform.css";

function TodoForm() {
  const [enterInput, setEnterInput] = useState(""); //for form
  const [inputData, setInputData] = useState(""); //for edit input
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(false);
  const [obj, setObj] = useState({});
  //add Handler
  //console.log(obj, "akjsdhsakd");
  const addHandler = () => {
    if (!enterInput) {
      alert("Add item");
    } else if (!obj.hasOwnProperty(enterInput)) {
      // !check in obj
      const mynewData = {
        id: new Date().getTime().toString(),
        name: enterInput,
        isCompleted: false,
        isEditing: false,
      };
      // obj[enterInput] = true;
      setObj({ ...obj, [enterInput]: true });
      setItems([...items, mynewData]);
      //entry in obj
      setEnterInput("");
    }
  };
  //delete handler
  const DeleteHandler = (id) => {
    let updatedList = items.filter((curElement) => {
      return curElement.id !== id;
    });
    let data = { ...obj };
    delete data[items[items.findIndex((it) => it.id === id)].name];
    setObj(data);
    setItems(updatedList);
  };
  //enterhandler
  const setEnterHandler = (e) => {
    if (!enterInput) {
      return;
    } else if (e.key === "Enter") {
      if (items.findIndex((item) => item.name === enterInput) === -1) {
        const myNewData = {
          id: new Date().getTime().toString(),
          name: enterInput,
          isCompleted: false,
          isEditing: false,
        };
        setItems([...items, myNewData]);
        setEnterInput("");
      }
    }
  };
  //complete handler
  const completeHandler = (index) => {
    let compToDo = [...items];
    compToDo[index].isCompleted = !compToDo[index].isCompleted;
    setItems(compToDo);
  };
  const EditHandler = (index) => {
    // console.log("Clicked");
    let editToDo = [...items];
    editToDo[index].isEditing = !editToDo[index].isEditing;
    editToDo[index].oldName = editToDo[index].name;
    setItems(editToDo);
    // console.log(editToDo);
  };
  // editto
  const editTodo = (index, name) => {
    let data = [...items];
    data[index].isEditing = false;
    setItems(data);
  };

  const handleEditChange = (id, name) => {
    setEdit(id);
    setInputData(name);
  };
  // const editTodo = (id, text) => {
  //   let editTodos = items.map((todo) => {
  //     if (todo.id === id) {
  //       todo.name = text;
  //     }
  //     return todo;
  //   });
  //   setItems(editTodos);
  //   setEdit(false);
  // };
  //for
  const test = (val, index) => {
    let data = [...items];
    data[index].name = val;
    setItems(data);

    //setInputData(val);
  };
  const cancelTodo = (index) => {
    let data = [...items];
    data[index].name = data[index].oldName;
    data[index].oldName = "";
    data[index].isEditing = false;
    setItems(data);
  };
  return (
    <div>
      <Header />
      <div className="todo_div">
        <InputBox
          inputData={inputData}
          setInputData={test}
          enterInput={enterInput}
          setEnterInput={setEnterInput}
          items={items}
          addHandler={addHandler}
          DeleteHandler={DeleteHandler}
          setEnterHandler={setEnterHandler}
          completeHandler={completeHandler}
          handleEditChange={handleEditChange}
          EditHandler={EditHandler}
          edit={edit}
          editTodo={editTodo}
          cancelTodo={cancelTodo}
        />
        <img src={img} alt="working" className="working" />
      </div>
    </div>
  );
}

export default TodoForm;
