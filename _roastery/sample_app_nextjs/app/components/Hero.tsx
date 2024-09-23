import React from "react";

interface HeroProps {
  buttonText?: string;
}

const Hero: React.FC<HeroProps> = ({ buttonText = "Click me!" }) => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <section
      style={{ textAlign: "center", padding: "20px", background: "#f0f0f0" }}
    >
      <h1>Welcome to Coframe</h1>
      <p>Building the future of user interfaces.</p>
      <button
        onClick={handleButtonClick}
        style={{ fontSize: "16px", padding: "10px 20px", cursor: "pointer" }}
      >
        {buttonText}
      </button>
    </section>
  );
};

export default Hero;
