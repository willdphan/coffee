import React from "react";

const Orange = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Our Website</h1>
      <p>Discover the amazing world of custom brewed coffees!</p>
      <button
        style={{
          backgroundColor: "orange",
          color: "white",
          fontSize: "1rem",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Order Now
      </button>
    </div>
  );
};

export default Orange;
