import React from "react";
import Footer from "../components/Footer";
import Header from "./header/Header";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-amber-300">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <img
          src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww"
          alt="Luxury car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <h1 className="absolute bottom-8 left-8 text-4xl font-bold">
          About Us
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6 text-amber-300">
          <p>
          Welcome to Motor SuperKings, where finding your next car is a smooth and enjoyable experience. Located in 6757 Main Street Unit #7 Stouffville, we specialize in offering a wide selection of high-quality, pre-owned vehicles to suit every lifestyle and budget.

          </p>
          <p>
          At Motor SuperKings, we take pride in delivering more than just cars—we provide peace of mind. Each vehicle in our inventory is handpicked and thoroughly inspected to ensure it meets our standards for quality, reliability, and value.


          </p>
          <p>
          Our mission is simple: to make car buying easy, transparent, and stress-free. Whether you're looking for a reliable sedan, a spacious SUV, or an affordable commuter car, our friendly team is here to help you every step of the way.

          </p>
          <p>
            Discover why so many drivers trust Motor SuperKings for their
            automotive needs. Visit us today and drive home in a car you'll
            love, backed by the confidence that you made the right choice.
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default AboutUs;
