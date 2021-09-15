import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Submit from "./../Button/Button";
import { Card } from "react-bootstrap";
import "./textbox.css";
import ListBox from "../ListBox/ListBox";

function TextBox() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const stylecard ={
    width: "50%",
    margin: "auto",
    marginTop: "1rem",
    backgroundColor: "grey",
    color: "white"
  }
  const addHandler = () => {
    if (!inputData) {
      alert("Add item");
    } else {
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
  return (
    <div className="formdiv">
      <Container fluid>
        <Row>
          <Col></Col>
          <Col xs={5}>
            <Form>
              <Form.Control
                type="text"
                placeholder="Add item"
                className="text-center mt-5"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
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
        <Row>
          <Col>
            {items&&items.map((item, index) => {
              return (
                <>
                  <Card
                   style={stylecard}
                  >
                    <ListBox item={item} index={index} />
                    <i
                      class="bi bi-trash2-fill"
                      onClick={() => DeleteHandler(item.id)}
                    ></i>
                  </Card>
                </>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TextBox;
