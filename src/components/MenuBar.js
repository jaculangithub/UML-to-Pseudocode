import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

const MenuBar = ({ onGeneratePseudocode }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>UML Editor</Navbar.Brand>
        <Nav className="me-auto">
          <Button href = "/">Home</Button>
          <Nav.Link href="#">File</Nav.Link>
          <Nav.Link href="#">Help</Nav.Link>
          <Button variant="primary" onClick={onGeneratePseudocode}>
            Generate Pseudocode
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MenuBar;