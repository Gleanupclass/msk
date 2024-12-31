import React, { createContext, useState, useEffect } from 'react';
import initialVehicles from '../data/vehicleData.json';

export const VehicleContext = createContext();

export const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState(() => {
    const storedVehicles = localStorage.getItem('vehicles');
    return storedVehicles ? JSON.parse(storedVehicles) : initialVehicles.vehicles;
  });

  useEffect(() => {
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
  }, [vehicles]);

  const addVehicle = (newVehicle) => {
    setVehicles(prevVehicles => {
      const updatedVehicles = [...prevVehicles, { ...newVehicle, id: Date.now().toString() }];
      localStorage.setItem('vehicles', JSON.stringify(updatedVehicles));
      return updatedVehicles;
    });
  };

  const updateVehicle = (updatedVehicle) => {
    setVehicles(prevVehicles => {
      const updatedVehicles = prevVehicles.map(vehicle => 
        vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle
      );
      localStorage.setItem('vehicles', JSON.stringify(updatedVehicles));
      return updatedVehicles;
    });
  };

  const deleteVehicle = (id) => {
    setVehicles(prevVehicles => {
      const updatedVehicles = prevVehicles.filter(vehicle => vehicle.id !== id);
      localStorage.setItem('vehicles', JSON.stringify(updatedVehicles));
      return updatedVehicles;
    });
  };

  return (
    <VehicleContext.Provider value={{ vehicles, addVehicle, updateVehicle, deleteVehicle }}>
      {children}
    </VehicleContext.Provider>
  );
};

