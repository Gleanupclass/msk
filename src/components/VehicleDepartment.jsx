import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const VehicleDepartments = () => {
  const navigate = useNavigate();
  const features = [
    {
      title: 'Financing',
      image: 'https://centarautosale.ca/images/home/department/rdo.home.financeapplication.webp', // Replace with actual image URL
      buttonLabel: 'Apply Now',
      route:'/finance'
    },
    {
      title: 'Car Finder',
      image: 'https://webneel.com/wallpaper/sites/default/files/images/07-2013/3%20koenigsegg%20car%20hd%20wallpaper.jpg', // Replace with actual image URL
      buttonLabel: 'Find Yours',
    },
    {
      title: 'Inventory',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pAgUJSJuYm5PffWeU5SHkELEmNCt-v_Eag&s', // Replace with actual image URL
      buttonLabel: 'Find Yours',
    },
    {
      title: 'Featured Vehicles',
      image: 'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/107719/range-rover-exterior-left-front-three-quarter-37.jpeg?isig=0&q=80', // Replace with actual image URL
      buttonLabel: 'View Now',
    },
  ];

  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Departments</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              {/* Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
              />

              {/* Title */}
              <div className="absolute top-4 left-4">
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>

              {/* Button - visible on hover */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <Button
                  label={feature.buttonLabel}
                  className="shadow-lg"
                  style={{
                    backgroundColor: '#FFD700',  
                    color: '#000',               
                    border: 'none',              
                    borderRadius: '8px',         
                    padding: '10px 20px',       
                  }}
                  onClick={() => navigate(feature.route)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleDepartments;
