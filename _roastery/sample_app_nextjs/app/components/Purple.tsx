import React from 'react';

interface PurpleProps {
  children?: React.ReactNode;
}

const Purple: React.FC<PurpleProps> = ({ children }) => {
  return (
    <div style={{ 
      backgroundColor: '#800080', 
      padding: '20px', 
      borderRadius: '4px', 
      textAlign: 'center' 
    }}>
      <h1 style={{ color: 'white' }}>Purple Component</h1>
      {children && <p>{children}</p>}
      <button style={{
        backgroundColor: 'white',
        color: '#800080',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
      }}>
        Click Me
      </button>
    </div>
  );
};

export default Purple;
