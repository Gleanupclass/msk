import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

// Import images from assets
import adaptiveImg from '../assets/adaptive.png';
import ecoImg from '../assets/eco.png';

const VehicleFeatures = () => {
  const navigate = useNavigate();
  const features = [
   
    {
      title: 'Car - Selection Process',
      description: 'We use a refined checklist with proven techniques defined by top mechanical experts  to choose right cars.',
      image: ecoImg,
    },
    {
      title: 'Highly affordable and Proven Cars',
      description: 'Our cars are with genuinely build quality without major accidents or damages with most affordable deals and we are specific in high reliable and safety standard cars.',
      image: adaptiveImg,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b bg-black">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-amber-300 mb-12">Why Choose Motor SuperKings</h2>
        <p className="text-2xl text-amber-300 mb-20 leading-relaxed">
        Discover the Unique selection criteria we choose for  our vehicles that ensures performance, comfort, and safety.

        </p>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center  bg-zinc-950 p-10 rounded-2xl shadow-2xl`}>
              <div className="w-full md:w-1/2">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-[400px] object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 text-left space-y-6">
                <h3 className="text-3xl font-bold text-amber-300">
                  {feature.title}
                </h3>
                <p className="text-xl text-amber-300 leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-6">
                  <Button
                    label="Discover More"
                    className="font-bold text-black bg-amber-300 rounded-md transition duration-300 ease-in-out w-48"
                    style={{
                      backgroundColor: '#fbbf24', 
                      color: '#ffffff', 
                      border: 'none',
                      boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
                      padding: '14px 28px', 
                    }}
                    onClick={() => navigate('/about-us')}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleFeatures;
