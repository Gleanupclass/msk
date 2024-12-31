import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const footerSections = [
    {
      title: 'Our Dealership',
      items: ['We offer a wide selection of high-quality, pre-owned vehicles to suit every lifestyle and budget.', 
        <span key="email">
        <FaEnvelope className="inline-block mr-2 text-amber-300" />
        info@motorsuperkings.com
      </span>,
        <span key="phone">
        <FaPhone className="inline-block mr-2 rotate-90 text-amber-300" />
        Ph-4165574537
      </span>,],
    },
    {
      title: 'Address',
      items : ['6757 Main Street ','Unit #7 Stouffville','ON L4A 6B6'],
    },
    
    
    {
      title: 'Working hours',
      items: ['Mon - Fri: 10:00AM - 7:00PM', 'Saturday: 12:00PM - 6:00PM', 'Sunday : CLOSED'],
    },
    
  ];

  return (
    <footer className="bg-black pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="text-base font-thin text-amber-300 hover:text-white transition duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-amber-300 pt-8 justify-between items-center">
          <p className="text-base text-center text-amber-300">
            &copy; 2024 Motor Super Kings Inc. All rights reserved.
          </p>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
