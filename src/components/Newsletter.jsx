import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with email:', email);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:flex md:items-center md:justify-between">
          {/* Newsletter Heading */}
          <div className="mb-6 md:mb-0 md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Join Our Newsletter
            </h2>
            <p className="text-gray-600">
              Get the latest updates, offers, and car models right to your inbox.
            </p>
          </div>

          {/* Subscription Form */}
          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex items-center gap-3">
            <div className="flex-1 relative">
              <InputText
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out"
              />
            </div>
            <Button
              type="submit"
              label="Subscribe"
              className="p-3 rounded-lg text-white font-semibold"
              style={{
                backgroundColor: '#007BFF', // Blue background color for better visual appeal
                border: 'none',
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'} // Darker blue on hover
              onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'} // Back to original on mouse out
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
