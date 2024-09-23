import { FC } from "react";

interface Testimonial {
  id: number;
  author: string;
  text: string;
}

const testimonials: Testimonial[] = [
  { id: 1, author: "Jane Doe", text: "This is the best coffee I've ever had." },
  {
    id: 2,
    author: "John Smith",
    text: "Incredible quality and taste. My mornings are better because of this coffee.",
  },
  {
    id: 3,
    author: "Alice Johnson",
    text: "I love the variety of flavors offered. There's something for everyone.",
  },
  {
    id: 4,
    author: "Dave Wilson",
    text: "Quick delivery, amazing coffee. I’m a lifetime customer.",
  },
  {
    id: 5,
    author: "Sarah Brown",
    text: "Customer service is outstanding and the coffee is even better.",
  },
];

const Test: FC = () => {
  return (
    <div>
      <h2>Testimonials</h2>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <blockquote>
              "{testimonial.text}"<footer>- {testimonial.author}</footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
