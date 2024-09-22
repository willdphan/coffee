import React from "react";

const Blue = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Coframe's Blue Component</h1>
      <p>This is where user interface magic happens!</p>
      <section
        style={{
          margin: "20px 0",
          backgroundColor: "#f0f8ff",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <h2>Hero Section</h2>
        <button
          style={{
            backgroundColor: "#0000ff",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Click me
        </button>
      </section>
    </div>
  );
};

export default Blue;
