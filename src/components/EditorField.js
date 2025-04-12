import React from "react";
import actionImg from "../uml-elements/Action.png";
import actorImg from "../uml-elements/Actor.png";
import aggregationImg from "../uml-elements/Aggregation.png";
import associationImg from "../uml-elements/Association.png";
import classImg from "../uml-elements/Class.png";
import compositionImg from "../uml-elements/Composition.png";
import decisionNodeImg from "../uml-elements/Decision-Node.png";
import dependencyImg from "../uml-elements/Dependency.png";
import directedAssociationImg from "../uml-elements/Directed-Association.png";
import endNodeImg from "../uml-elements/End-Node.png";
import forkNodeImg from "../uml-elements/Fork-Node.png";
import generalizationImg from "../uml-elements/Generalization.png";
import initialNodeImg from "../uml-elements/Initial-Node.png";
import joinNodeImg from "../uml-elements/Join-Node.png";
import realizationImg from "../uml-elements/Realization.png";
import swimLaneImg from "../uml-elements/SwimLane.png";
import timeEventImg from "../uml-elements/Time-Event.png";
import usageImg from "../uml-elements/Usage.png";

const ELEMENTS = {
  Class: [
    { name: "Class Box", img: classImg },
    { name: "Association", img: associationImg },
    { name: "Inheritance", img: generalizationImg },
    { name: "Aggregation", img: aggregationImg },
    { name: "Composition", img: compositionImg },
  ],
  Activity: [
    { name: "Start Node", img: initialNodeImg },
    { name: "End Node", img: endNodeImg },
    { name: "Action", img: actionImg },
    { name: "Decision", img: decisionNodeImg },
    { name: "Connector", img: dependencyImg },
    { name: "Fork Node", img: forkNodeImg },
    { name: "Join Node", img: joinNodeImg },
  ],
  Sequence: [
    { name: "Actor", img: actorImg },
    { name: "Lifeline", img: directedAssociationImg },
    { name: "Message", img: realizationImg },
    { name: "Activation Bar", img: usageImg },
  ],
  State: [
    { name: "State", img: swimLaneImg },
    { name: "Initial State", img: initialNodeImg },
    { name: "Final State", img: endNodeImg },
    { name: "Transition", img: timeEventImg },
  ],
};

const EditorField = ({ elements, setElements, connectors, onSelectElement }) => {
  const handleDrag = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const handleDrop = (e) => {
    const id = e.dataTransfer.getData("id");
    const rect = e.currentTarget.getBoundingClientRect();
    const newX = e.clientX - rect.left - 50;
    const newY = e.clientY - rect.top - 25;
    setElements((prev) =>
      prev.map((el) => (el.id === parseInt(id) ? { ...el, x: newX, y: newY } : el))
    );
  };

  const getElementImage = (type) => {
    const element = Object.values(ELEMENTS)
      .flat()
      .find((el) => el.name === type);
    return element ? element.img : null;
  };

  const handleTextChange = (e, id) => {
    const newText = e.target.value;
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, text: newText } : el))
    );
  };

  const handleBlur = (id) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, isEditing: false } : el))
    );
  };

  const renderElement = (el) => {
    const imgSrc = getElementImage(el.type);
    if (!imgSrc) return null;

    return (
      <div
        key={el.id}
        style={{
          position: "absolute",
          left: el.x,
          top: el.y,
          cursor: "grab",
        }}
        onClick={() => onSelectElement(el.id)}
      >
        <img
          src={imgSrc}
          alt={el.type}
          style={{ width: el.width, height: el.height }}
          draggable={false}
        />
        {el.type === "Action" && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "80%",
            }}
          >
            {el.isEditing ? (
              <input
                type="text"
                value={el.text || ""}
                onChange={(e) => handleTextChange(e, el.id)}
                onBlur={() => handleBlur(el.id)}
                autoFocus
                style={{
                  width: "100%",
                  textAlign: "center",
                  border: "none",
                  background: "transparent",
                  outline: "none",
                }}
              />
            ) : (
              <div
                onClick={() =>
                  setElements((prev) =>
                    prev.map((element) =>
                      element.id === el.id ? { ...element, isEditing: true } : element
                    )
                  )
                }
                style={{ cursor: "text" }}
              >
                {el.text || "Activity"}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderConnector = (connector) => {
    // Skip rendering if connector points to itself
    if (connector.from === connector.to) return null;

    const fromElement = elements.find((el) => el.id === connector.from);
    const toElement = elements.find((el) => el.id === connector.to);

    if (!fromElement || !toElement) return null;

    const fromX = fromElement.x + fromElement.width / 2;
    const fromY = fromElement.y + fromElement.height / 2;

    let toX, toY;

    const dx = toElement.x - fromElement.x;
    const dy = toElement.y - fromElement.y;

    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) {
        toX = toElement.x;
        toY = toElement.y + toElement.height / 2;
      } else {
        toX = toElement.x + toElement.width;
        toY = toElement.y + toElement.height / 2;
      }
    } else {
      if (dy > 0) {
        toX = toElement.x + toElement.width / 2;
        toY = toElement.y;
      } else {
        toX = toElement.x + toElement.width / 2;
        toY = toElement.y + toElement.height;
      }
    }

    return (
      <line
        x1={fromX}
        y1={fromY}
        x2={toX}
        y2={toY}
        stroke="black"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
    );
  };

  return (
    <div
      className="editor-field border p-3"
      style={{ height: "500px", position: "relative", backgroundColor: "#bdbcbc" }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <svg style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}>
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
          </marker>
        </defs>
        {connectors.map((connector, index) => (
          <g key={index}>{renderConnector(connector)}</g>
        ))}
      </svg>
      {elements.map((el) => (
        <div
          key={el.id}
          draggable
          onDragStart={(e) => handleDrag(e, el.id)}
        >
          {renderElement(el)}
        </div>
      ))}
    </div>
  );
};

export default EditorField;