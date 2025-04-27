import { memo, useState } from "react";
import { Handle, Position, NodeResizer } from "@xyflow/react";

const ActionNode = ({ data, selected, id, width, height }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', }}
    >
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={100}
        minHeight={40}
      />

      {/* Main Node Container */}
      <div
        style={{
          width: width,
          height: height,
          background: "white",
          borderRadius: "10px",
          border: selected ? "2px solid #ff0071" : "2px solid #334155",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: selected ? "0 0 8px rgba(255, 0, 113, 0.3)" : "none",
          
        }}
      >
        {data.label}
      </div>

      {/* Handles - visible when selected OR hovered */}
      {(selected || isHovered) && (
        <>
          <Handle 
            type="target" 
            position={Position.Left} 
            style={{ opacity: isHovered && !selected ? 0.7 : 1 }}
          />
          <Handle 
            type="source" 
            position={Position.Right} 
            style={{ opacity: isHovered && !selected ? 0.7 : 1 }}
          />
        </>
      )}
    </div>
  );
};

export default memo(ActionNode);