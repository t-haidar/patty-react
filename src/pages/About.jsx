import { useState, useEffect } from "react";

const slides = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
];

function About() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % slides.length), 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-[#111] min-h-screen text-white px-6 py-10 text-center">
      <h2 className="text-3xl font-bold mb-6">About Our Restaurant</h2>
      <p className="max-w-xl mx-auto text-gray-300 mb-4">Patty's Burger Restaurant started as a small family-owned business.</p>
      <p className="max-w-xl mx-auto text-gray-300 mb-4">Our specialties include burgers, pizza, fries, and homemade meals.</p>
      <p className="max-w-xl mx-auto text-gray-300 mb-10">Our mission is to provide good food and a welcoming environment.</p>
      <h3 className="text-2xl font-bold mb-4">Gallery</h3>
      <div className="max-w-lg mx-auto h-72 overflow-hidden rounded-xl">
        <img src={slides[index]} alt="slide" className="w-full h-full object-cover" />
      </div>
      <footer className="bg-black text-center py-6 mt-10 text-gray-400">
        <p>Open: Mon-Sun 10AM - 8PM</p>
        <p>Follow us: Facebook | Instagram</p>
      </footer>
    </div>
  );
}

export default About;
