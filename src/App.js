import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UMLEditor from "./components/UMLEditor";
import DiagramSelection from "./components/DiagramTypeSelection"; // Import the DiagramSelection component
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [diagramType, setDiagramType] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Home Screen */}
        <Route path="/" element={<Home />} />

        {/* Diagram Selection Screen */}
        <Route
          path="/select-diagram"
          element={
            <DiagramSelection
              onSelectDiagram={(type) => {
                setDiagramType(type); // Set the selected diagram type
              }}
            />
          }
        />

        {/* Editor Screen */}
        <Route
          path="/editor"
          element={<UMLEditor diagramType={diagramType} />}
        />
      </Routes>
    </Router>
  );
};

export default App;