import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Row, Col, Card, Navbar, Nav } from "react-bootstrap";

const DiagramSelection = ({ onSelectDiagram }) => {
  const navigate = useNavigate();
  const diagramTypes = ["Class", "Activity", "Sequence", "State"];
  const [selectedDiagram, setSelectedDiagram] = useState(null);

  const handleSelect = (type) => {
    setSelectedDiagram(type);
    onSelectDiagram(type);
    navigate("/editor");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f8f9fa" }}>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">UML-to-Pseudocode</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Features</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="text-center" style={{ padding: "60px 0" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "40px" }}>
          Select a Diagram Type
        </h2>
        <Row className="g-4 justify-content-center">
          {diagramTypes.map((type) => (
            <Col key={type} xs={12} md={6} lg={4}>
              <Card
                style={{
                  border: "none",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                  height: "100%",
                  background: "white",
                }}
                onClick={() => handleSelect(type)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                <Card.Body className="text-center d-flex flex-column justify-content-between">
                  <div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>{type} Diagram</h3>
                    <p style={{ fontSize: "1rem", color: "#666" }}>
                      Create and edit {type.toLowerCase()} diagrams with ease.
                    </p>
                  </div>
                  <Button
                    variant="dark"
                    style={{ width: "100%", marginTop: "20px" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(type);
                    }}
                  >
                    Get Started
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Back to Home Button */}
        <div className="text-center mt-4">
          <Button variant="secondary" onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </Container>
    </div>
  );
};

export default DiagramSelection;
