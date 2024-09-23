import React from "react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "This is the best coffee I have ever tasted. Absolutely in love with their flavors!",
    author: "Jane Doe",
  },
  {
    id: 2,
    text: "Their customer service is outstanding! And the coffee is just a cherry on top.",
    author: "John Smith",
  },
  // ... you can add more testimonials here
];

const Test: React.FC = () => {
  return (
    <section style={{ padding: "20px", backgroundColor: "#f7f7f7" }}>
      <h2 style={{ textAlign: "center" }}>Testimonials</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            style={{
              maxWidth: "600px",
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <p style={{ fontStyle: "italic" }}>"{testimonial.text}"</p>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>
              - {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Test;
