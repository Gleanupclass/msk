import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import CarSearch from './components/CarSearch';
import VehicleFeatures from './components/VehicleFeatures';
import Footer from './components/Footer';
import VehicleDepartments from './components/VehicleDepartment';
import FinanceDepartments from './components/FinanceDepartment';
import FinanceCalculator from './components/Calculator';
import ApplicationForm from './components/Application';
import Header from './components/header/Header';
import AboutUs from './components/AboutUs';
import BodystyleComponent from './components/BodystyleComponent';
import VehicleListing from './components/CarListing';
import PreOwnedInventory from './components/PreOwnedInventory';
import { VehicleProvider } from './context/VehicleContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <VehicleProvider>
    <Router>
      <div className="font-sans antialiased text-gray-900 bg-black">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <BodystyleComponent />
                 
                  <VehicleFeatures />
                  <VehicleDepartments />
                
                </>
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/cars" element={<PreOwnedInventory />} />
            <Route path="/:vehicleType" element={<VehicleListing />} /> 
            <Route path="/finance" element={<FinanceDepartments />} />
            <Route path="/calculator" element={< FinanceCalculator/>}/>
            <Route path="/application" element={< ApplicationForm/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </VehicleProvider>
    </AuthProvider>
  );
}

export default App;

