import React from 'react';

export default function GridBackground() {
  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none opacity-20"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        transform: 'translateZ(0)',
      }}
    />
  );
}
