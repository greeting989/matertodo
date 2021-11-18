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
  items,
  addHandler,
  DeleteHandler,
  setEnterHandler,
  completeHandler,
  EditHandler,
  editTodo,
}) {
  const para = {
    fontSize: "25px",
  };
  //console.log(items);
  // console.log(items.isEditing);
  return (
    <div>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col xs={5} className="formdiv">
            <Form.Control
              type="text"
              placeholder="Start Typing..."
              className="text-center mt-5 frmtext"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              onKeyPress={setEnterHandler}
            />

            <Submit
              className="text-center mt-5"
              title={"Add"}
              addHandler={(e) => addHandler(e)}
            />
          </Col>
          <Col></Col>
        </Row>
        <br />
        <p style={para}>Tasks </p>
        <br />
        <Row>
          <Col>
            {items &&
              items.map((item, index) => {
                console.log(item);
                return (
                  <Row key={item.id}>
                    <Col></Col>
                    <Col xs={5}>
                      <div className="listbox">
                        {item.isEditing ? (
                          <input
                            type="text"
                            value={item.name}
                            onChange={() => editTodo(item.id, item.name)}
                          />
                        ) : (
                          <ListBox
                            item={item}
                            index={index}
                            completeHandler={completeHandler}
                          />
                        )}

                        <i
                          className="bi bi-trash2-fill"
                          onClick={() => DeleteHandler(item.id)}
                        ></i>
                        <i
                          className="bi bi-pen-fill"
                          onClick={() => EditHandler(index)}
                        ></i>
                      </div>
                    </Col>
                    <Col></Col>
                  </Row>
                );
              })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TextBox;
