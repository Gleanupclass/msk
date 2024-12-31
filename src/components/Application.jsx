import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    lastName: '',
    phone: '',
    dob: '',
    maritalStatus: '',
    email: '',
    currentAddress: '',
    city: '',
    state: '',
    postalCode: '',
    duration: '',
    previousAddress: '',
    homeType: '',
    monthlyPayment: '',
    currentEmployer: '',
    jobType: '',
    occupation: '',
    grossIncome: '',
    employerAddress: '',
    employerPhone: '',
    employerDuration: '',
    previousEmployer: '',
    vehicleInterest: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-black text-amber-300 p-8 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Financing Application</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/3">
              <label className="block">Salutation *</label>
              <select
                name="salutation"
                value={formData.salutation}
                onChange={handleChange}
                className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
                required
              >
                <option value="">Select</option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
                required
              />
            </div>
            <div className="w-1/3">
              <label className="block">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
                required
              />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <div className="w-1/3">
              <label className="block">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
                required
              />
            </div>
            <div className="w-1/3">
              <label className="block">Date of Birth *</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
                required
              />
            </div>
            <div className="w-1/3">
              <label className="block">Marital Status *</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
                required
              >
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>
            </div>
          </div>
          
          <div className="w-full">
            <label className="block">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              required
            />
          </div>
        </div>

        {/* Current Address */}
        <div className="space-y-4 mt-6">
          <h3 className="font-semibold">Current Address</h3>
          <div className="w-full">
            <label className="block">Address *</label>
            <input
              type="text"
              name="currentAddress"
              value={formData.currentAddress}
              onChange={handleChange}
              className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/3">
              <label className="block">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              />
            </div>
            <div className="w-1/3">
              <label className="block">State / Province / Region</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              />
            </div>
            <div className="w-1/3">
              <label className="block">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              />
            </div>
          </div>
          
          <div className="w-full">
            <label className="block">Duration at Current Address *</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              required
            >
              <option value="">Select</option>
              <option value="Less than a year">Less than a year</option>
              <option value="More than a year">More than a year</option>
            </select>
          </div>
        </div>

        {/* Previous Address */}
        <div className="space-y-4 mt-6">
          <h3 className="font-semibold">Previous Address</h3>
          <div className="w-full">
            <label className="block">Address *</label>
            <input
              type="text"
              name="previousAddress"
              value={formData.previousAddress}
              onChange={handleChange}
              className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/3">
              <label className="block">City</label>
              <input
                type="text"
                name="previousCity"
                value={formData.previousCity}
                onChange={handleChange}
                className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              />
            </div>
            <div className="w-1/3">
              <label className="block">State / Province / Region</label>
              <input
                type="text"
                name="previousState"
                value={formData.previousState}
                onChange={handleChange}
                className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              />
            </div>
            <div className="w-1/3">
              <label className="block">Postal Code</label>
              <input
                type="text"
                name="previousPostalCode"
                value={formData.previousPostalCode}
                onChange={handleChange}
                className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              />
            </div>
          </div>
        </div>

        {/* Home/Rent/Mortgage Information */}
        <div className="space-y-4 mt-6">
          <div className="w-full">
            <label className="block">Home/Rent/Mortgage Information *</label>
            <select
              name="homeType"
              value={formData.homeType}
              onChange={handleChange}
              className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              required
            >
              <option value="">Select</option>
              <option value="Rent">Rent</option>
              <option value="Mortgage">Mortgage</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block">Monthly Payment *</label>
            <input
              type="number"
              name="monthlyPayment"
              value={formData.monthlyPayment}
              onChange={handleChange}
              className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              required
            />
          </div>
        </div>

        {/* Employment Information */}
        <div className="space-y-4 mt-6">
          <div className="w-full">
            <label className="block">Current Employer *</label>
            <input
              type="text"
              name="currentEmployer"
              value={formData.currentEmployer}
              onChange={handleChange}
              className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              required
            />
          </div>
          <div className="w-full">
            <label className="block">Job Type *</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              required
            >
              <option value="">Select</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block">Occupation *</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              required
            />
          </div>
          <div className="w-full">
            <label className="block">Gross Income Per Year *</label>
            <input
              type="number"
              name="grossIncome"
              value={formData.grossIncome}
              onChange={handleChange}
              className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              required
            />
          </div>
          <div className="w-full">
            <label className="block">Employer Address *</label>
            <input
              type="text"
              name="employerAddress"
              value={formData.employerAddress}
              onChange={handleChange}
              className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/3">
              <label className="block">Employer Phone *</label>
              <input
                type="tel"
                name="employerPhone"
                value={formData.employerPhone}
                onChange={handleChange}
                className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
                required
              />
            </div>
            <div className="w-1/3">
              <label className="block">Duration *</label>
              <select
                name="employerDuration"
                value={formData.employerDuration}
                onChange={handleChange}
                className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
                required
              >
                <option value="">Select</option>
                <option value="Less than a year">Less than a year</option>
                <option value="More than a year">More than a year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Previous Employer */}
        <div className="w-full">
          <label className="block">Previous Employer</label>
          <input
            type="text"
            name="previousEmployer"
            value={formData.previousEmployer}
            onChange={handleChange}
            className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
          />
        </div>

        {/* Vehicle Interest */}
        <div className="w-full mt-6">
          <label className="block">Which Vehicle Are You Interested In Financing?</label>
          <input
            type="text"
            name="vehicleInterest"
            value={formData.vehicleInterest}
            onChange={handleChange}
            className="w-full bg-black text-amber-300 border-2 border-amber-300 p-2 rounded"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-amber-300 text-black px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
