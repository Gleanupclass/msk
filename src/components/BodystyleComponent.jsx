import React from 'react';
import sedanImage from '../assets/Sedans.png'; 
import coupeImage from '../assets/Coupes.png';
import convertibleImage from '../assets/Convertibles.png';
import suvImage from '../assets/Suvs.png';
import minivanImage from '../assets/Vans.png';
import truckImage from '../assets/Commercial.png';
import { useNavigate } from 'react-router-dom';

const carTypes = [
    { name: 'Sedan', image: sedanImage, path: '/sedan' },
    { name: 'Coupe', image: coupeImage, path: '/coupe' },
    { name: 'Convertible', image: convertibleImage, path: '/convertible' },
    { name: 'SUV', image: suvImage, path: '/suv' },
    { name: 'Minivan/Van', image: minivanImage, path: '/minivan' },
    { name: 'Truck/Commercial', image: truckImage, path: '/truck' },
  ];
  
  const BodystyleComponent = () => {
    const navigate = useNavigate();
  
    const handleNavigation = (path) => {
      navigate(path);
    };
  
    return (
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-amber-300 mb-12">Explore by Vehicle Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {carTypes.map((car, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handleNavigation(car.path)}
              >
                <img src={car.image} alt={car.name} className="w-32 h-auto mb-6" />
                <p className="text-amber-300 font-semibold text-lg text-center">{car.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BodystyleComponent;
