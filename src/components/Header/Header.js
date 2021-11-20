import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./header.css";
function Header() {
  const style = {
    color: "#A2D2FF",
    fontSize: "2.5rem",
  };
  return (
    <Navbar className="navbar">
      <Navbar.Brand className="navbar-txt text-center" style={style}>
        🖋️Task Manager
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
