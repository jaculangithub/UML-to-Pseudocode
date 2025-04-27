import { memo } from "react";
import { Handle, Position, NodeResizer } from "@xyflow/react";
import { useState } from "react";

const StartNode = ({ data, selected, id, width = 40, height = 40 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={20}
        minHeight={20}
        keepAspectRatio={true}
      />

      {/* UML Start Node - solid black circle */}
      <div
        style={{
          width: '100%',
          height: '100%',
          background: "black",
          borderRadius: '50%',
          border: selected ? "2px solid #ff0071" : "none",
          boxShadow: selected ? "0 0 8px rgba(255, 0, 113, 0.3)" : "none",
        }}
      />

      {/* Maintain all handles from DiamondNode but adjust positions */}
      {(selected || isHovered) && (
        <>
          <Handle 
            type="target" 
            position={Position.Top}
            style={{ backgroundColor: "black" }}
          />
          <Handle 
            type="source" 
            position={Position.Bottom}
            style={{ backgroundColor: "black" }}
          />
          <Handle 
            type="target" 
            position={Position.Left}
            style={{ backgroundColor: "black" }}
          />
          <Handle 
            type="source" 
            position={Position.Right}
            style={{ backgroundColor: "black" }}
          />
        </>
      )}
    </div>
  );
};

export default memo(StartNode);