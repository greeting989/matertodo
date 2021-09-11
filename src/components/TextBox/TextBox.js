import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Submit from "./../Button/Button";

import "./textbox.css";

function TextBox() {
  
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
              />
            </Form>
            <Submit className="text-center mt-5" title={"Add"}/>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default TextBox;
