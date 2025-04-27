import { memo } from "react";
import { Handle, Position, NodeResizer } from "@xyflow/react";
import { useState } from "react";

const DiamondNode = ({ data, selected, id, width = 80, height = 80 }) => {
  // Calculate the bounding box size (should be width * √2)
  const boundingSize = width * Math.sqrt(2);
  // Diamond size matches the original width/height
  const diamondSize = width;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
        position: 'relative',
        width: `${boundingSize}px`,
        height: `${boundingSize}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        }}>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={10}  // Minimum size for the diamond (not bounding box)
        minHeight={10}
        keepAspectRatio={true}
      />

      {/* Diamond shape */}
      <div
        style={{
          width: `${diamondSize}px`,
          height: `${diamondSize}px`,
          background: "white",
          border: selected ? "2px solid #ff0071" : "2px solid #334155",
          transform: "rotate(45deg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: selected ? "0 0 8px rgba(255, 0, 113, 0.3)" : "none",
        }}
      >
        <div style={{
          transform: "rotate(-45deg)",
          width: "70%",
          textAlign: "center",
          fontSize: "12px",
        }}>
          {data.label}
        </div>
      </div>

      {/* Handles - positioned at the visual edges of the diamond */}
      { ( selected || isHovered ) && (
        <>
            <Handle 
                type="target" 
                position={Position.Top}
            />
            <Handle 
                type="source" 
                position={Position.Bottom} 
            
            />
            <Handle 
                type="target" 
                position={Position.Left} 
            />
            <Handle 
                type="source" 
                position={Position.Right} 
            />
        </>

      )}
      
    </div>
  );
};

export default memo(DiamondNode);