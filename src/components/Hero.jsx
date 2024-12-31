import React from "react";
import { Button } from "primereact/button";
import HeroCar from "../assets/hero1.png";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative h-[600px] w-full">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
           src={HeroCar}
          alt="Highway aerial view"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-lg">
          <h1 className="text-2xl font-bold text-amber-300 mb-4">
            Pride in Every Deal
          </h1>
          <p className="text-xl italic text-amber-300/90 mb-8">
            Building Trust, One Car at a Time
          </p>
          <Button
            label="Discover More"
            className="p-button-raised w-fit px-6 py-2 text-black bg-amber-300"
            onClick={() => navigate('/cars')}

          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
