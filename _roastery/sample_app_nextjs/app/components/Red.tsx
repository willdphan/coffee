import React from 'react';

const Red = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Coframe!</h1>
      <p>Create the future of user interfaces with us.</p>
      <button 
        onClick={() => alert('Feature coming soon!')}
        style={{ 
          fontSize: '16px',
          padding: '10px 20px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Red;
