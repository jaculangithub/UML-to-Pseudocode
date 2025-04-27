import React from 'react';

// Start Node (Circle)
export function StartNode({ data }) {
  return (
    <div style={{
      width: 40, height: 40,
      borderRadius: '50%',
      background: '#4CAF50',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff',
    }}>
      {data.label}
    </div>
  );
}

// End Node (Double Circle)
export function EndNode({ data }) {
  return (
    <div style={{
      width: 44, height: 44,
      borderRadius: '50%',
      background: '#f44336',
      border: '4px solid white',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff',
    }}>
      {data.label}
    </div>
  );
}

// Action Node (Rectangle)
export function ActionNode({ data }) {
  return (
    <div style={{
      padding: 10,
      borderRadius: 4,
      background: '#2196F3',
      color: '#fff',
      minWidth: 80,
      textAlign: 'center'
    }}>
      {data.label}
    </div>
  );
}

// Decision/Merge Node (Diamond)
export function DecisionNode({ data }) {
  return (
    <div style={{
      width: 80, height: 80,
      background: '#FF9800',
      transform: 'rotate(45deg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff',
    }}>
      <div style={{ transform: 'rotate(-45deg)' }}>
        {data.label}
      </div>
    </div>
  );
}

// Fork/Join Node (Horizontal Bar)
export function ForkNode({ data }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#9C27B0',
      color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      {data.label}
    </div>
  );
}

// Swimlane (Vertical/Horizontal Container)
export function Swimlane({ data }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      border: '2px solid #607D8B',
      backgroundColor: 'rgba(96, 125, 139, 0.1)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        padding: 8,
        background: '#607D8B',
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
      }}>
        {data.label}
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
}

// Time Event (Circle with Clock Icon)
export function TimeEventNode({ data }) {
  return (
    <div style={{
      width: 60, height: 60,
      borderRadius: '50%',
      background: '#795548',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      flexDirection: 'column'
    }}>
      <div>⏱️</div>
      <div style={{ fontSize: 12 }}>{data.label}</div>
    </div>
  );
}