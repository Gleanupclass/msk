import React, { useState, useEffect, useContext } from 'react';
import { FaCar, FaTachometerAlt, FaGasPump, FaCog } from 'react-icons/fa';
import vehiclesData from '../data/vehicleData.json';
import { resolveImagePath } from '../utils/utils';
import { VehicleContext } from '../context/VehicleContext';

const PreOwnedInventory = () => {
    const { vehicles } = useContext(VehicleContext);
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [filterInput, setFilterInput] = useState('');

  const handleFilterChange = (e) => {
    setFilterInput(e.target.value);
  };

  const applyFilters = () => {
    if (!filterInput.trim()) {
      setFilteredVehicles(vehicles);
      return;
    }
  
    const searchTerm = filterInput.toLowerCase();
  
    const filtered = vehicles.filter(vehicle => 
      vehicle.model.toLowerCase().includes(searchTerm) ||
      vehicle.make.toLowerCase().includes(searchTerm)
    );
  
    setFilteredVehicles(filtered);
  };
  

  const resetFilters = () => {
    setFilterInput('');
    setFilteredVehicles(vehicles);
  };

  useEffect(() => {
    applyFilters();
  }, [filterInput]);

  

  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex gap-4">
            <input
              type="text"
              value={filterInput}
              onChange={handleFilterChange}
              placeholder="Search by make or model"
              className="flex-grow bg-gray-900 text-white border border-gray-700 rounded px-4 py-2"
            />
            <button 
              onClick={resetFilters}
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        <div className="text-white mb-4">
          {filteredVehicles.length} Vehicles
        </div>

        <div className="space-y-4">
          {filteredVehicles.map(vehicle => (
            <div key={vehicle.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-4 relative h-64 md:h-full min-h-[250px]">
                  <img
                    src={resolveImagePath(vehicle.image)}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-6 p-6">
                  <h2 className="text-xl font-bold text-white mb-2">
                    {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                  </h2>

                  <div className="grid grid-cols-2 gap-4 text-gray-400 text-sm mb-4">
                    <div>Stock #: {vehicle.id}</div>
                    <div>Year: {vehicle.year}</div>
                    <div>Transmission: {vehicle.specs.transmission}</div>
                    <div>Drivetrain: {vehicle.specs.drivetrain}</div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mt-4">
                    <div className="flex flex-col items-center text-gray-400">
                      <FaCog className="h-6 w-6 mb-1" />
                      <span className="text-xs">{vehicle.specs.transmission}</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-400">
                      <FaGasPump className="h-6 w-6 mb-1" />
                      <span className="text-xs">{vehicle.specs.fuelType}</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-400">
                      <FaTachometerAlt className="h-6 w-6 mb-1" />
                      <span className="text-xs">{vehicle.mileage.toLocaleString()} km</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-400">
                      <FaCar className="h-6 w-6 mb-1" />
                      <span className="text-xs">{vehicle.specs.bodyStyle}</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 bg-black p-6 flex flex-col justify-between border-l border-gray-800">
                  <div>
                    <div className="text-amber-400 text-2xl font-bold">
                      ${vehicle.price.toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm">+ Taxes & licensing</div>
                  </div>

                  <div className="space-y-2 mt-4">
                    <button className="w-full bg-amber-400 text-white py-2 px-4 rounded text-sm hover:bg-amber-700 transition duration-300">
                      Compare
                    </button>
                    <button className="w-full bg-amber-400 text-white py-2 px-4 rounded text-sm hover:bg-amber-700 transition duration-300">
                      Financing
                    </button>
                    <button className="w-full bg-amber-400 text-white py-2 px-4 rounded text-sm hover:bg-amber-700 transition duration-300">
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <button className="px-4 py-2 bg-black text-white border border-gray-800 rounded hover:bg-gray-800 transition duration-300">
            &lt;&lt;
          </button>
          <button className="px-4 py-2 bg-amber-400 text-white rounded hover:bg-amber-700 transition duration-300">
            1
          </button>
          <button className="px-4 py-2 bg-black text-white border border-gray-800 rounded hover:bg-gray-800 transition duration-300">
            2
          </button>
          <button className="px-4 py-2 bg-black text-white border border-gray-800 rounded hover:bg-gray-800 transition duration-300">
            &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreOwnedInventory;

