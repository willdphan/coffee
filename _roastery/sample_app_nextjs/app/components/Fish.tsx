import React from "react";

type FishInfo = {
  name: string;
  scientificName: string;
  description: string;
  diet: string;
  habitat: string;
};

const fishList: FishInfo[] = [
  {
    name: "Clown Fish",
    scientificName: "Amphiprioninae",
    description: "Brightly colored fish known for living in sea anemones.",
    diet: "Mostly small zooplankton and algae.",
    habitat: "Warm waters of the Indian and Pacific Oceans.",
  },
  {
    name: "Great White Shark",
    scientificName: "Carcharodon carcharias",
    description:
      "A large predatory fish known for its size and hunting prowess.",
    diet: "Marine mammals, fish, and seabirds.",
    habitat: "Coastal surface waters in all major oceans.",
  },
  {
    name: "Blue Tang",
    scientificName: "Paracanthurus hepatus",
    description: "Recognizable by its vibrant blue color and yellow tail.",
    diet: "Plankton, algae.",
    habitat: "Coral reefs in the Indo-Pacific region.",
  },
  // Extend the fishList with more entries as necessary
];

const Fish: React.FC = () => {
  return (
    <div>
      <h1>Descriptive Fish List</h1>
      <ul>
        {fishList.map((fish, index) => (
          <li key={index}>
            <h2>{fish.name}</h2>
            <p>
              <strong>Scientific Name:</strong> {fish.scientificName}
            </p>
            <p>
              <strong>Description:</strong> {fish.description}
            </p>
            <p>
              <strong>Diet:</strong> {fish.diet}
            </p>
            <p>
              <strong>Habitat:</strong> {fish.habitat}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fish;
