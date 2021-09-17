import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import './header.css';
function Header() {
  const style={
    color:"#7F7C82",
    fontSize:"3em",
    
  }
  return (
    
      <Navbar className="navbar">
        <Container fluid>
          <Navbar.Brand className="navbar-txt text-center" style={style}>📝React ToDo</Navbar.Brand>
        </Container>
      </Navbar>
   
  );
}

export default Header;
