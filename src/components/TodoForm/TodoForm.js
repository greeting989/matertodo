import React from "react";
import { Container } from "react-bootstrap";
import InputBox from "./../TextBox/TextBox";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Header from "./../Header/Header";

function TodoForm() {
  return (
    <div>
      <Header />
      <InputBox />
    </div>
  );
}

export default TodoForm;
