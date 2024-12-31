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
        Finance department
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6 text-amber-300">
          <p>
          Welcome to  Motor Super Kings, your auto loan and car lease resource. We're eager to provide financing for your new car, or we can assist in used car financing. Check out our online car loan calculator for an instant car loan rate.
          </p>
          <p>
          Then, proceed to our online finance application. All types of credit, from good to bad, can qualify for an auto loan. No credit, no problem! 
          </p>
          <p>
          We will work with you to secure a no credit car loan if your situation demands it. We have strong relationships and we are committed to finding you the perfect car loan company to suit your car finance needs.

          </p>
         
        </div>

      
      </div>
    </div>
  );
};

export default AboutUs;
