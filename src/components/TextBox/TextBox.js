import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Submit from "./../Button/Button";
import { Card } from "react-bootstrap";
import "./textbox.css";
import ListBox from "../ListBox/ListBox";
import TodoForm from "../TodoForm/TodoForm";

function TextBox({
  inputData,
  setInputData,
  enterInput,
  setEnterInput,
  items,
  addHandler,
  DeleteHandler,
  setEnterHandler,
  completeHandler,
  handleEditChange,
  edit,
  editTodo,
  EditHandler,
  cancelTodo,
}) {
  const para = {
    fontSize: "25px",
  };
  //console.log(items);
  // console.log(items.isEditing);
  return (
    <div className="form_div">
      <Container>
        <h4 style={{ color: "#FFF3E4" }}>What are your Plan ?.....</h4>
        <input
          type="text"
          className="inputdiv"
          placeholder="Start Typing..."
          className="text-center mt-5 frmtext"
          value={enterInput}
          onChange={(e) => setEnterInput(e.target.value)}
          onKeyPress={setEnterHandler}
        />

        <Submit
          className="text-center mt-5"
          title={"Add"}
          addHandler={(e) => addHandler(e)}
        />

        {items &&
          items.map((item, index) => {
            // console.log(item);
            return (
              <Row key={item.id}>
                <div className="listbox">
                  {item.isEditing ? (
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => setInputData(e.target.value, index)}
                    />
                  ) : (
                    <ListBox
                      item={item}
                      index={index}
                      completeHandler={completeHandler}
                    />
                  )}
                  {item.isEditing ? (
                    <>
                      <button onClick={() => editTodo(index)}>Edit todo</button>
                      <button onClick={() => cancelTodo(index)}>
                        Cancel todo
                      </button>
                    </>
                  ) : (
                    <div>
                      <i
                        className="bi bi-trash2-fill"
                        onClick={() => DeleteHandler(item.id)}
                        style={{ color: "#FFF3E4" }}
                      ></i>

                      <i
                        className="bi bi-pen-fill "
                        onClick={() => EditHandler(index)}
                        style={{ color: "#FFF3E4" }}
                      ></i>
                    </div>
                  )}
                </div>
              </Row>
            );
          })}
      </Container>
    </div>
  );
}

export default TextBox;
