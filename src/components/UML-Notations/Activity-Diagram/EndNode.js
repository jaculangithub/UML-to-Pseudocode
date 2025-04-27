import { memo } from "react";
import { Handle, Position, NodeResizer } from "@xyflow/react";
import { useState } from "react";

const EndNode = ({ data, selected, id, width = 40, height = 40 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ringSize = width * 0.2; // Size of the outer ring

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: `${width + ringSize * 2}px`,
        height: `${height + ringSize * 2}px`,
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

      {/* UML End Node - concentric circles */}
      <div style={{
        position: 'relative',
        width: `${width + ringSize * 2}px`,
        height: `${height + ringSize * 2}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Outer ring */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: `3px solid black`,
          boxSizing: 'border-box'
        }} />
        
        {/* Inner solid circle */}
        <div style={{
          width: `${width}px`,
          height: `${height}px`,
          background: "black",
          borderRadius: '50%',
          border: selected ? "2px solid #ff0071" : "none",
          boxShadow: selected ? "0 0 8px rgba(255, 0, 113, 0.3)" : "none",
        }} />
      </div>

      {/* Handles - same as DiamondNode */}
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

export default memo(EndNode);