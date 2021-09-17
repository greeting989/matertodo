import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Submit from "./../Button/Button";
import { Card } from "react-bootstrap";
import "./textbox.css";
import ListBox from "../ListBox/ListBox";

function TextBox({
  inputData,
  setInputData,
  items,
  addHandler,
  DeleteHandler,
  setEnterHandler,
}) {
  const para = {
    fontSize: "25px",
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col xs={5} className="formdiv">
            <Form>
              <Form.Control
                type="text"
                placeholder="Start Typing..."
                className="text-center mt-5 frmtext"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                onKeyPress={setEnterHandler}
              />
            </Form>
            <Submit
              className="text-center mt-5"
              title={"Add"}
              addHandler={addHandler}
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
                return (
                  <Row>
                    <Col></Col>
                    <Col xs={5}>
                      <div className="listbox">
                        <ListBox item={item} />
                        <i
                          className="bi bi-trash2-fill"
                          onClick={() => DeleteHandler(item.id)}
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
