import React, { useContext, useState, useEffect } from 'react';
import { VehicleContext } from '../context/VehicleContext';
import { constructImagePath } from '../utils/utils';

const AddVehicleForm = ({ editingVehicle, onClose, onSubmit }) => {
  const { addVehicle, updateVehicle } = useContext(VehicleContext);
  const [newVehicle, setNewVehicle] = useState({
    id: '',
    year: '',
    make: '',
    model: '',
    trim: '',
    price: '',
    mileage: '',
    image: '',
    specs: {
      transmission: '',
      drivetrain: '',
      fuelType: '',
      bodyStyle: '',
    },
    carfaxAvailable: false,
  });

  useEffect(() => {
    if (editingVehicle) {
      setNewVehicle(editingVehicle);
    }
  }, [editingVehicle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setNewVehicle(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setNewVehicle(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedVehicle = {
      ...newVehicle,
      image: constructImagePath(newVehicle.make, newVehicle.image),
    };
    if (editingVehicle) {
      updateVehicle(submittedVehicle);
    } else {
      addVehicle({ ...submittedVehicle, id: Date.now().toString() });
    }
    onSubmit();
    onClose();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Remove the file extension for storage
      const fileName = file.name.replace(/\.[^/.]+$/, "");
      setNewVehicle(prev => ({ ...prev, image: fileName }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          type="number" 
          name="year" 
          value={newVehicle.year} 
          onChange={handleChange} 
          placeholder="Year" 
          className="w-full p-2 border rounded bg-gray-700 text-amber-300" 
          required 
        />
        <input 
          type="text" 
          name="make" 
          value={newVehicle.make} 
          onChange={handleChange} 
          placeholder="Make" 
          className="w-full p-2 border rounded bg-gray-700 text-amber-300" 
          required 
        />
        <input 
          type="text" 
          name="model" 
          value={newVehicle.model} 
          onChange={handleChange} 
          placeholder="Model" 
          className="w-full p-2 border rounded bg-gray-700 text-amber-300" 
          required 
        />
        <input 
          type="text" 
          name="trim" 
          value={newVehicle.trim} 
          onChange={handleChange} 
          placeholder="Trim" 
          className="w-full p-2 border rounded bg-gray-700 text-amber-300" 
          required 
        />
        <input 
          type="number" 
          name="price" 
          value={newVehicle.price} 
          onChange={handleChange} 
          placeholder="Price" 
          className="w-full p-2 border rounded bg-gray-700 text-amber-300" 
          required 
        />
        <input 
          type="number" 
          name="mileage" 
          value={newVehicle.mileage} 
          onChange={handleChange} 
          placeholder="Mileage" 
          className="w-full p-2 border rounded bg-gray-700 text-amber-300" 
          required 
        />
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-amber-300">Image</label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload} 
          className="text-sm text-gray-300 bg-gray-700 w-full p-2 rounded"
        />
        {newVehicle.image && (
          <p className="text-sm text-gray-300">
            Selected image: {constructImagePath(newVehicle.make, newVehicle.image)}
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          type="text" 
          name="specs.transmission" 
          value={newVehicle.specs.transmission} 
          onChange={handleChange} 
          placeholder="Transmission" 
          className="w-full p-2 border rounded bg-gray-700 text-amber-300" 
          required 
        />
        <input 
          type="text" 
          name="specs.drivetrain" 
          value={newVehicle.specs.drivetrain} 
          onChange={handleChange} 
          placeholder="Drivetrain" 
          className="w-full p-2 border rounded bg-gray-700 text-amber-300" 
          required 
        />
        <input 
          type="text" 
          name="specs.fuelType" 
          value={newVehicle.specs.fuelType} 
          onChange={handleChange} 
          placeholder="Fuel Type" 
          className="w-full p-2 border rounded bg-gray-700 text-amber-300" 
          required 
        />
        <input 
          type="text" 
          name="specs.bodyStyle" 
          value={newVehicle.specs.bodyStyle} 
          onChange={handleChange} 
          placeholder="Body Style" 
          className="w-full p-2 border rounded bg-gray-700 text-amber-300" 
          required 
        />
      </div>
      
      <label className="flex items-center text-amber-300">
        <input
          type="checkbox"
          name="carfaxAvailable"
          checked={newVehicle.carfaxAvailable}
          onChange={(e) => setNewVehicle(prev => ({ ...prev, carfaxAvailable: e.target.checked }))}
          className="mr-2"
        />
        Carfax Available
      </label>
      
      <div className="flex justify-end space-x-2">
        <button 
          type="button" 
          onClick={onClose} 
          className="bg-gray-600 text-amber-300 py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          className="bg-blue-600 text-amber-300 py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          {editingVehicle ? 'Update Vehicle' : 'Add Vehicle'}
        </button>
      </div>
    </form>
  );
};

export default AddVehicleForm;

