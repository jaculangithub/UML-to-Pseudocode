import React, { useState } from "react";
import { Container, Row, Col, Modal, Button as BootstrapButton } from "react-bootstrap";
import DiagramElements from "./DiagramElements";
import EditorField from "./EditorField";
import MenuBar from "./MenuBar";

const UMLEditor = ({ diagramType }) => {
  const [elements, setElements] = useState([]);
  const [connectors, setConnectors] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [showPseudocodeModal, setShowPseudocodeModal] = useState(false);
  const [pseudocode, setPseudocode] = useState("");

  if (!diagramType) {
    return <h2 className="text-center mt-5">Please select a UML Diagram first.</h2>;
  }

  const handleAddElement = (element) => {
    let width, height;

    switch (element.type) {
      case "Class Box":
        width = 120;
        height = 80;
        break;
      case "Attribute":
        width = 120;
        height = 40;
        break;
      case "Method":
        width = 120;
        height = 40;
        break;
      case "Start Node":
      case "End Node":
        width = 40;
        height = 40;
        break;
      case "Action":
        width = 120;
        height = 60;
        break;
      case "Decision":
        width = 60;
        height = 60;
        break;
      case "Fork Node":
      case "Join Node":
        width = 60;
        height = 10;
        break;
      case "Actor":
        width = 60;
        height = 100;
        break;
      case "Lifeline":
        width = 2;
        height = 100;
        break;
      case "Message":
        width = 100;
        height = 2;
        break;
      case "Activation Bar":
        width = 10;
        height = 60;
        break;
      case "State":
        width = 120;
        height = 80;
        break;
      case "Initial State":
      case "Final State":
        width = 40;
        height = 40;
        break;
      case "Transition":
      case "Association":
      case "Inheritance":
      case "Aggregation":
      case "Composition":
        width = 100;
        height = 2;
        break;
      default:
        width = 100;
        height = 50;
    }

    setElements([
      ...elements,
      { ...element, id: Date.now(), x: 50, y: 50, width, height, text: "" , className: "", attributes: "", methods: "", isEditing: false },
    ]);
  };

  const handleSelectElement = (id) => {
    if (!selectedElement) {
      setSelectedElement(id);
    } else {
      setConnectors([...connectors, { from: selectedElement, to: id }]);
      setSelectedElement(null);
    }
  };

  const generatePseudocode = () => {
    const actionElements = elements.filter((el) => el.type === "Action");
    const pseudocodeText = actionElements.map((el) => `- ${el.text}`).join("\n");
    setPseudocode(pseudocodeText);
    setShowPseudocodeModal(true);
  };

  const handleCloseModal = () => {
    setShowPseudocodeModal(false);
  };

  return (
    <Container fluid>
      <MenuBar onGeneratePseudocode={generatePseudocode} />
      <Row className="mt-3">
        <Col xs={3}>
          <DiagramElements diagramType={diagramType} onAddElement={handleAddElement} />
        </Col>
        <Col xs={9}>
          <EditorField
            elements={elements}
            setElements={setElements}
            connectors={connectors}
            onSelectElement={handleSelectElement}
          />
        </Col>
      </Row>

      {/* Pseudocode Modal */}
      <Modal show={showPseudocodeModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Generated Pseudocode:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            Begin <br /> <br />
            {pseudocode.concat("()")}
            <br /><br />
            End
          </pre>
        </Modal.Body>
        <Modal.Footer>
          <BootstrapButton variant="secondary" onClick={handleCloseModal}>
            Close
          </BootstrapButton>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UMLEditor;