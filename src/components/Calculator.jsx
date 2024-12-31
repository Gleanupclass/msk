import React, { useState } from 'react';

const FinanceCalculator = () => {
  const [vehiclePrice, setVehiclePrice] = useState(40000);
  const [downPayment, setDownPayment] = useState(0);
  const [tradeIn, setTradeIn] = useState(0);
  const [loanTerm, setLoanTerm] = useState(36);
  const [interestRate, setInterestRate] = useState(5); // Example interest rate
  const [payment, setPayment] = useState(0);
  const [totalObligation, setTotalObligation] = useState(0);
  const [costOfBorrowing, setCostOfBorrowing] = useState(0);

  const calculateLoan = () => {
    const principal = vehiclePrice - downPayment - tradeIn;
    const annualInterest = interestRate / 100;
    const monthlyInterest = annualInterest / 12;

    // Monthly payment formula
    const monthlyPayment = (principal * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -loanTerm));
    const totalCost = monthlyPayment * loanTerm;
    const borrowingCost = totalCost - principal;

    setPayment(monthlyPayment.toFixed(2));
    setTotalObligation(totalCost.toFixed(2));
    setCostOfBorrowing(borrowingCost.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-black text-amber-400 p-8 flex flex-col items-center">
          
      <h1 className=" self-start text-3xl font-bold text-left mb-6">Finance Calculator</h1>
      <div className="w-full max-w-lg bg-black p-6 rounded-lg shadow-xl space-y-4">
        <div>
          <label className="block text-lg">Vehicle Price ($)</label>
          <input
            type="number"
            value={vehiclePrice}
            onChange={(e) => setVehiclePrice(e.target.value)}
            onFocus={() => setVehiclePrice('')} 
            className="w-full p-2 mt-2 bg-gray-800 text-amber-400 rounded-md"
          />
        </div>
        <div>
          <label className="block text-lg">Down Payment ($)</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            onFocus={() => setDownPayment('')} 
            className="w-full p-2 mt-2 bg-gray-800 text-amber-400 rounded-md"
          />
        </div>
        <div>
          <label className="block text-lg">Your Trade ($)</label>
          <input
            type="number"
            value={tradeIn}
            onChange={(e) => setTradeIn(e.target.value)}
            onFocus={() => setTradeIn('')}
            className="w-full p-2 mt-2 bg-gray-800 text-amber-400 rounded-md"
          />
        </div>
        <div>
          <label className="block text-lg">Loan Term (Months)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            onFocus={() => setLoanTerm('')} 
            className="w-full p-2 mt-2 bg-gray-800 text-amber-400 rounded-md"
          />
        </div>
        <div>
          <label className="block text-lg">Annual Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            onFocus={() => setInterestRate('')} 
            className="w-full p-2 mt-2 bg-gray-800 text-amber-400 rounded-md"
          />
        </div>
        <button
          onClick={calculateLoan}
          className="w-full mt-6 p-2 bg-amber-500 text-black font-bold rounded-md"
        >
          Calculate
        </button>
      </div>
      <div className="mt-8 text-lg space-y-2">
        <p><strong>Your Estimated Payment:</strong> ${payment}</p>
        <p><strong>Total Obligation (Amount to be paid over the loan term):</strong> ${totalObligation}</p>
        <p><strong>Cost of Borrowing (Interest):</strong> ${costOfBorrowing}</p>
      </div>
    </div>
  );
};

export default FinanceCalculator;
