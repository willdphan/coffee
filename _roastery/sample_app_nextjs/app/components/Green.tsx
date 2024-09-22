import React from "react";

const Green = () => {
  return (
    <section
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <h1>Welcome to Coframe!</h1>
      <p>Building the future of user interfaces.</p>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          fontSize: "16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </section>
  );
};

export default Green;
