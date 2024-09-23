import React from "react";

type ChickenDetail = {
  id: number;
  title: string;
  description: string;
};

const chickenDetails: ChickenDetail[] = [
  { id: 1, title: "Species", description: "Gallus gallus domesticus" },
  { id: 2, title: "Lifespan", description: "5–10 years" },
  { id: 3, title: "Diet", description: "Omnivore (grains, seeds, insects)" },
  { id: 4, title: "Habitat", description: "Farms, backyards, pastures" },
  { id: 5, title: "Egg Production", description: "Around 300 eggs per year" },
];

const Chicken: React.FC = () => {
  return (
    <ul>
      {chickenDetails.map((detail) => (
        <li key={detail.id}>
          <strong>{detail.title}:</strong> {detail.description}
        </li>
      ))}
    </ul>
  );
};

export default Chicken;
