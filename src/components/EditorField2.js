//las

import React, { useState, useCallback } from 'react';
import { ReactFlow, 
          addEdge, 
          applyEdgeChanges, 
          applyNodeChanges, 
          Background, 
          Controls, 
          BackgroundVariant, 
          MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ActionNode from './UML-Notations/Activity-Diagram/ActionNode';
import DiamondNode from './UML-Notations/Activity-Diagram/DiamondNode';
import StartNode from './UML-Notations/Activity-Diagram/StartNode';
import EndNode from './UML-Notations/Activity-Diagram/EndNode';

const umlNotations = {
  ActionNode, 
  DiamondNode,
  StartNode,
  EndNode,

};

const Element = [
  {
    id: '1',
    type: 'ActionNode',
    data: { label: 'Action 1' },
    position: { x: 100, y: 50 },
    width: 300,
    height: 100,
  },
  {
    id: '2',
    type: 'DiamondNode',
    data: { label: 'DiamondNode' },
    position: { x: 300, y: 200 },
    width: 100,
    height: 30,
  },{
    id: '3',
    type: 'StartNode',
    position: { x:100, y: 200},
    width: 50,
    height: 50,
  },
  {
    id: '4',
    type: 'EndNode',
    position: { x:300, y: 500},
    width: 35,
    height: 35,
  }
];

const Edges = [];

const Nodes = [];

const EditorField2 = () => {

  return (
    <div style={{ height: '100%', borderRadius: "8px", border: "1px solid", color: "#7d7878" }}>
      
        <ReactFlow
          defaultNodes={Element}
          defaultEdges={Edges}
          minZoom={0.2}
          maxZoom={4}
          fitView
          nodeTypes={umlNotations}
          style={{ backgroundColor: "#F7F9FB" }}
        >
          <Background color="#dbd6d6" variant={BackgroundVariant.Lines} gap={20} />
          <MiniMap />
          <Controls />
        </ReactFlow>
      
    </div>
  );
};

export default EditorField2;
