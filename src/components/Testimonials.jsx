import React from 'react';
import { Rating } from 'primereact/rating';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Emily Johnson',
      rating: 5,
      comment: 'Exceptional service and fantastic deals!',
      image: '/placeholder.svg'
    },
    {
      name: 'Michael Smith',
      rating: 5,
      comment: 'Highly recommend AutoTrust for your next car!',
      image: '/placeholder.svg'
    },
    {
      name: 'Sophia Lee',
      rating: 5,
      comment: "Best car buying experience I've ever had!",
      image: '/placeholder.svg'
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Hear from Our Happy Customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full border-4 border-white mr-6"
                />
                <div>
                  <h3 className="font-semibold text-xl text-white mb-1">{testimonial.name}</h3>
                  <Rating 
                    value={testimonial.rating} 
                    readOnly 
                    stars={5} 
                    cancel={false}
                    className="text-yellow-400"
                  />
                </div>
              </div>
              <p className="text-gray-300 text-lg">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
