import React from "react";

const headerButtons = ["Home", "Products", "About", "Contact"];

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f8f8f8",
      }}
    >
      {headerButtons.map((buttonLabel) => (
        <button
          key={buttonLabel}
          style={{
            fontSize: "1.5em",
            margin: "10px",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {buttonLabel}
        </button>
      ))}
    </div>
  );
};

export default Header;
