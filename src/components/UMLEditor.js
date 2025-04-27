import React, { useState } from "react";
import { Container, Row, Col, Modal, Button as BootstrapButton } from "react-bootstrap";
import DiagramElements from "./DiagramElements";
import EditorField2 from "./EditorField2";
import MenuBar from "./MenuBar";
import { nanoid } from 'nanoid';
import { applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';

const UMLEditor = ({ diagramType }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [showPseudocodeModal, setShowPseudocodeModal] = useState(false);
  const [pseudocode, setPseudocode] = useState("");

  if (!diagramType) {
    return <h2 className="text-center mt-5">Please select a UML Diagram first.</h2>;
  }

  const handleAddElement = (element) => {
    const supportedNodes = ["Start Node", "End Node", "Action", "Decision"];
    if (!supportedNodes.includes(element.type)) return;

    const id = nanoid();
    const nodeTypeMap = {
      "Start Node": "StartNode",
      "End Node": "EndNode",
      "Action": "ActionNode",
      "Decision": "DiamondNode",
    };

    const dimensions = {
      "Start Node": { width: 50, height: 50 },
      "End Node": { width: 35, height: 35 },
      "Action": { width: 200, height: 70 },
      "Decision": { width: 100, height: 100 },
    };

    const newNode = {
      id,
      type: nodeTypeMap[element.type],
      position: { x: Math.random() * 500, y: Math.random() * 500 },
      data: { label: element.type === "Action" ? "Action" : element.type },
      ...dimensions[element.type],
    };

    setNodes((nds) => [...nds, newNode]);
  };

  const handleSelectElement = (id) => {
    if (!selectedElement) {
      setSelectedElement(id);
    } else {
      setEdges((eds) => addEdge({ id: nanoid(), source: selectedElement, target: id }, eds));
      setSelectedElement(null);
    }
  };

  const generatePseudocode = () => {
    const actionElements = nodes.filter((el) => el.type === "ActionNode");
    const pseudocodeText = actionElements.map((el) => `- ${el.data.label}`).join("\n");
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
          <EditorField2 
            nodes={nodes} 
            edges={edges}
            onNodesChange={(changes) => setNodes((nds) => applyNodeChanges(changes, nds))}
            onEdgesChange={(changes) => setEdges((eds) => applyEdgeChanges(changes, eds))}
            onConnect={(connection) => setEdges((eds) => addEdge(connection, eds))}
          />
        </Col>
      </Row>

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