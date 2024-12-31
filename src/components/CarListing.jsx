import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus, FaCog, FaGasPump, FaCar } from 'react-icons/fa';
import { VehicleContext } from '../context/VehicleContext';
import { useAuth } from '../context/AuthContext';
import AddVehicleForm from './AddVehicleForm';
import { resolveImagePath } from '../utils/utils';

const VehicleListing = () => {
  const { isLoggedIn } = useAuth();
  const { vehicles, deleteVehicle } = useContext(VehicleContext);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const { vehicleType } = useParams();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const filtered = vehicles.filter(
      (vehicle) => 
        vehicle.specs.bodyStyle.toLowerCase() === vehicleType.toLowerCase() &&
        (vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
         vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredVehicles(filtered);
  }, [vehicleType, vehicles, searchTerm]);

  const handleEdit = (vehicle) => {
    if (isLoggedIn) {
      setEditingVehicle(vehicle);
      setShowAddForm(true);
    } else {
      alert('Please log in to edit vehicles.');
    }
  };

  const handleDelete = (id) => {
    if (isLoggedIn) {
      if (window.confirm('Are you sure you want to delete this vehicle?')) {
        deleteVehicle(id);
      }
    } else {
      alert('Please log in to delete vehicles.');
    }
  };

  const handleAddNew = () => {
    if (isLoggedIn) {
      setEditingVehicle(null);
      setShowAddForm(true);
    } else {
      alert('Please log in to add new vehicles.');
    }
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  const handleFormSubmit = () => {
    setShowAddForm(false);
    setEditingVehicle(null);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 mb-8 items-center">
          <input
            type="text"
            placeholder="Search by make or model"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-gray-900 text-white px-4 py-2 rounded border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-300"
          >
            Reset
          </button>
          {isLoggedIn && (
            <button
              onClick={handleAddNew}
              className="px-6 py-2 bg-amber-400 text-white rounded hover:bg-amber-700 transition duration-300"
            >
              Add Vehicle
            </button>
          )}
        </div>

        <div className="text-white text-xl mb-6">
          {filteredVehicles.length} Vehicles
        </div>

        <div className="space-y-6">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-[#0f1623] rounded-lg overflow-hidden border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-4 h-[300px]">
                  <img
                    src={resolveImagePath(vehicle.image)}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-6 p-6">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-y-2 mb-4">
                    <div className="text-gray-400">
                      Stock #: {vehicle.id}
                    </div>
                    <div className="text-gray-400">
                      Year: {vehicle.year}
                    </div>
                    <div className="text-gray-400">
                      Transmission: {vehicle.specs.transmission}
                    </div>
                    <div className="text-gray-400">
                      Drivetrain: {vehicle.specs.drivetrain}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mt-6">
                    <div className="flex flex-col items-center text-gray-400">
                      <FaCog className="h-6 w-6 mb-2" />
                      {vehicle.specs.transmission}
                    </div>
                    <div className="flex flex-col items-center text-gray-400">
                      <FaGasPump className="h-6 w-6 mb-2" />
                      {vehicle.specs.fuelType}
                    </div>
                    <div className="flex flex-col items-center text-gray-400">
                      <FaCar className="h-6 w-6 mb-2" />
                      {vehicle.mileage.toLocaleString()} km
                    </div>
                    <div className="flex flex-col items-center text-gray-400">
                      <FaCar className="h-6 w-6 mb-2" />
                      {vehicle.specs.bodyStyle}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 bg-[#0f1623] p-6 flex flex-col justify-between border-l border-gray-800">
                  <div>
                    <div className="text-4xl font-bold text-amber-400 mb-2">
                      ${vehicle.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400 mb-6">+ Taxes & licensing</div>
                  </div>

                  <div className="space-y-2">
                    <button className="w-full bg-amber-400 text-white py-2 px-4 rounded hover:bg-amber-700 transition duration-300">
                      Compare
                    </button>
                    <button className="w-full bg-amber-400 text-white py-2 px-4 rounded hover:bg-amber-700 transition duration-300">
                      Financing
                    </button>
                    <button className="w-full bg-amber-400 text-white py-2 px-4 rounded hover:bg-amber-700 transition duration-300">
                      Contact us
                    </button>
                    {isLoggedIn && (
                      <>
                        <button 
                          onClick={() => handleEdit(vehicle)}
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                        >
                          <FaEdit className="mr-2" /> Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(vehicle.id)}
                          className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 flex items-center justify-center"
                        >
                          <FaTrash className="mr-2" /> Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#0f1623] p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                {editingVehicle ? 'Edit Vehicle' : 'Add New Vehicle'}
              </h2>
              <AddVehicleForm
                editingVehicle={editingVehicle}
                onClose={() => setShowAddForm(false)}
                onSubmit={handleFormSubmit}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleListing;

