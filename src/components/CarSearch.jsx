import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

const CarSearch = () => {
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedMinYear, setSelectedMinYear] = useState(null);
  const [selectedMaxYear, setSelectedMaxYear] = useState(null);

  const makes = [
    { label: 'HONDA', value: 'honda' },
    { label: 'MAZDA', value: 'mazda' },
    { label: 'TOYOTA', value: 'toyota' },
    { label: 'VOLKSWAGEN', value: 'volkswagen' }
  ];

  const modelsByMake = {
    honda: [
      { label: 'Civic', value: 'civic' },
      { label: 'CR-V', value: 'crv' },
      { label: 'HR-V', value: 'hrv' }
    ],
    mazda: [
      { label: 'Mazda3', value: 'mazda3' },
      { label: 'CX-5', value: 'cx5' },
      { label: 'CX-9', value: 'cx9' }
    ],
  };

  const years = Array.from({ length: 2024 - 2020 + 1 }, (_, i) => ({
    label: String(2024 - i),
    value: 2024 - i
  }));

  const handleSearch = () => {
    console.log('Search with:', { selectedMake, selectedModel, selectedMinYear, selectedMaxYear });
  };

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end p-8 rounded-lg shadow-md bg-zinc-950">
          <div>
            <Dropdown
              value={selectedMake}
              options={makes}
              onChange={(e) => {
                setSelectedMake(e.value);
                setSelectedModel(null);
                setSelectedMinYear(null);
                setSelectedMaxYear(null);
              }}
              placeholder="Select Make"
              className="w-full md:w-14rem rounded-lg p-2 bg-zinc-400 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <Dropdown
              value={selectedModel}
              options={selectedMake ? modelsByMake[selectedMake] : []}
              onChange={(e) => {
                setSelectedModel(e.value);
                setSelectedMinYear(null);
                setSelectedMaxYear(null);
              }}
              placeholder="Select Model"
              className="w-full rounded-lg p-2  bg-zinc-400 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
              disabled={!selectedMake}
            />
          </div>
          <div>
            <Dropdown
              value={selectedMinYear}
              options={years}
              onChange={(e) => {
                setSelectedMinYear(e.value);
                setSelectedMaxYear(null);
              }}
              placeholder="Min Year"
              className="w-full rounded-lg p-2  bg-zinc-400 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
              disabled={!selectedModel}
            />
          </div>
          <div>
            <Dropdown
              value={selectedMaxYear}
              options={years.filter(year => (!selectedMinYear || year.value >= selectedMinYear))}
              onChange={(e) => setSelectedMaxYear(e.value)}
              placeholder="Max Year"
              className="w-full rounded-lg p-2 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
              disabled={!selectedMinYear}
            />
          </div>
          <Button
            label="Search"
            className="w-full bg-amber-300 text-white py-3 px-6 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300 transition duration-200 ease-in-out"
            onClick={handleSearch}
          />
        </div>
      </div>
    </section>
  );
};

export default CarSearch;
