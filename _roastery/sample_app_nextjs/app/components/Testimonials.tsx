import React from "react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Amazing quality and fantastic flavor notes!",
    author: "Alex Johnson",
    position: "Coffee Enthusiast",
  },
  {
    id: 2,
    quote: "A must-have for any coffee lover.",
    author: "Samantha Stuart",
    position: "Barista",
  },
  {
    id: 3,
    quote: "Truly a game-changer in the coffee world.",
    author: "Ryan Peterson",
    position: "Roaster",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section style={{ backgroundColor: "#f0f0f0", padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>Testimonials</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.id}
            style={{
              borderLeft: "4px solid #8a6d3b",
              paddingLeft: "1rem",
              margin: "0",
              fontSize: "1rem",
            }}
          >
            <p style={{ fontStyle: "italic" }}>"{testimonial.quote}"</p>
            <footer style={{ textAlign: "right", marginTop: "0.5rem" }}>
              —{" "}
              <cite>
                {testimonial.author}, {testimonial.position}
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
