import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>TodoList</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
