import React from "react";

const Vegetables = () => {
  const produceList = [
    "Apples",
    "Oranges",
    "Bananas",
    "Broccoli",
    "Carrots",
    "Lettuce",
    "Tomatoes",
  ];

  return (
    <ul>
      {produceList.map((item, index) => (
        <li key={`produce-item-${index}`}>{item}</li>
      ))}
    </ul>
  );
};

export default Vegetables;
