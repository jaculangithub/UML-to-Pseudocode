//last

import React from "react";
import { Card, Button } from "react-bootstrap";
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
import lifelineImg from "../uml-elements/Lifeline.png";
import messageImg from "../uml-elements/Message.png";
import activationBarImg from "../uml-elements/Activation Bar.png";
import replyMessageImg from "../uml-elements/Reply Message.png";
import selfMessageImg from "../uml-elements/Self Message.png";
import guardImg from "../uml-elements/Guard.png";
import compositeStateImg from "../uml-elements/Composite State.png";
import lostMessageImg from "../uml-elements/Lost Message.png"
import foundMessageImg from "../uml-elements/Found Message.png"
import commentImg from "../uml-elements/Comment.png"



const ELEMENTS = {
  Class: [
    { name: "Class Box", img: classImg },
    { name: "Association", img: associationImg },
    { name: "Inheritance", img: generalizationImg },
    { name: "Aggregation", img: aggregationImg },
    { name: "Composition", img: compositionImg },
    { name: "Direct Association", img: directedAssociationImg },
    { name: "Dependency", img: dependencyImg },
    { name: "Realization", img: realizationImg }
  ],
  Activity: [
    { name: "Start Node", img: initialNodeImg, id: 1 },
    { name: "End Node", img: endNodeImg, id: 2 },
    { name: "Action", img: actionImg, id: 3 },
    { name: "Decision", img: decisionNodeImg, id: 4},
    { name: "Control Flow", img: dependencyImg},
    { name: "Fork Node", img: forkNodeImg },
    { name: "Join Node", img: joinNodeImg },
    { name: "Swimlane", img:  swimLaneImg },
    { name: "Time Event", img: timeEventImg }
  ],
  Sequence: [
    { name: "Actor", img: actorImg },
    { name: "Object", img: actionImg},
    { name: "Lifeline", img: lifelineImg },
    { name: "Message", img: messageImg },
    { name: "Activation Bar", img: activationBarImg },
    { name: "Reply Message", img: replyMessageImg},
    { name: "Self Message", img: selfMessageImg },
    { name: "Guard", img: guardImg },
    { name: "Comment", img: commentImg}, 
    { name: "Found Message", img: foundMessageImg},
    { name: "Lost Message", img: lostMessageImg },
  
  ],
  State: [
    { name: "State", img: actionImg },
    { name: "Initial State", img: initialNodeImg },
    { name: "Final State", img: endNodeImg },
    { name: "Transition", img: directedAssociationImg },
    { name: "Composite State", img: compositeStateImg },
    { name: "Fork", img: forkNodeImg},
    { name: "Join", img: joinNodeImg},
    { name: "Decision", img: decisionNodeImg},
    { name: "Self Transition", img: selfMessageImg}
  ],
};

const DiagramElements = ({ diagramType, onAddElement }) => {
  const supportedElements = ["Start Node", "End Node", "Action", "Decision"];

  const handleElementClick = (element) => {
    if (supportedElements.includes(element.name)) {
      onAddElement({ type: element.name });
    }
  };

  return (
    <Card className="p-3" style={{ backgroundColor: "#bdbcbc" }}>
      <h5>{diagramType} Diagram Notations</h5>
      <div className="d-flex flex-wrap gap-2">
        {ELEMENTS[diagramType]?.map(({ name, img }) => (
          <Button
            key={name}
            variant="light"
            className="p-2 d-flex flex-column align-items-center"
            style={{ border: "1px solid #ccc", borderRadius: "8px", width: "120px" }}
            onClick={() => handleElementClick({ name })}
          >
            <img src={img} alt={name} style={{ width: "50px", height: "50px" }} />
            <small>{name}</small>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default DiagramElements;
//end