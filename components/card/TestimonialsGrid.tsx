// components/TestimonialsGrid.tsx
import React from 'react';
import TestimonialCard from './TestimonialCard';




const testimonials = [
  {
    quote: "Highly intuitive and polished. It's everything we needed and more!",
    rating: 5.0,
    name: "Alex Jonas",
    role: "JS Marketing",
    imageUrl: "https://framerusercontent.com/images/ETgoVdeITLLIYCHTFNeVuZDMyQY.png",
  },
  {
    quote: "This is truly Incredible and have saved us countless hours!",
    rating: 5.0,
    name: "John Robert",
    role: "SM Strategy",
    imageUrl: "https://framerusercontent.com/images/QmmaDSjXyuZNNDsZdt23lDVXI.png",
  },
  {
    quote: "Pure brilliance! This has streamlined our workflow massively.",
    rating: 4.8,
    name: "Maggie Hue",
    role: "BS Growth Ceo",
    imageUrl: "https://framerusercontent.com/images/0zuVQ2JmvxEtdnpdOq5FtRJxmNY.png",
  },
  {
    quote: "A top-notch solution! It's been transformative for our entire team.",
    rating: 5.0,
    name: "Tappo Kao",
    role: "PO Marketing",
    imageUrl: "https://framerusercontent.com/images/Z9Z59ZjzMfqaMdHGgXmijuQ8hAw.jpg",
  },
  {
    quote: "Amazing product! It’s made our processes seamless and effective.",
    rating: 5.0,
    name: "Jack Hanma",
    role: "JK Finance",
    imageUrl: "https://framerusercontent.com/images/7qBFv2WmuOwj4qUFS7XUzQSFL4.jpg",
  },
  {
    quote: "Incredible design and functionality! This has exceeded our expectations.",
    rating: 5.0,
    name: "John Robert",
    role: "JO Strategy",
    imageUrl: "https://framerusercontent.com/images/YGV3hSM1KkFRZxZ0JDeOT7ry7u4.jpg",
  },
];

const TestimonialsGrid: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black ">
      <h1 className="text-white text-4xl font-extrabold py-12 text-center">
        My <span className="text-indigo-500">Client Review</span>
      </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          quote={testimonial.quote}
          rating={testimonial.rating}
          name={testimonial.name}
          role={testimonial.role}
          imageUrl={testimonial.imageUrl}
        />
      ))}
      
    </div>
    </div>
  );
};

export default TestimonialsGrid;