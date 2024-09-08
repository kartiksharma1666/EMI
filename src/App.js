import React, { useState } from 'react';
import EMIForm from './components/EMIForm';
import EMIDetails from './components/EMIDetails';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [emiData, setEmiData] = useState(null);
  const [theme, setTheme] = useState('light');

  const handleSubmit = (data) => {
    const { loanAmount, interestRate, tenure, prepayment } = data;
    // Calculate EMI
    const rate = interestRate / 12 / 100;
    const emi = loanAmount * rate * Math.pow(1 + rate, tenure) / (Math.pow(1 + rate, tenure) - 1);
    const totalPayment = emi * tenure;
    const totalInterest = totalPayment - loanAmount;

    // Optional: Handle prepayment logic
    let remainingTenure = tenure;
    let remainingPrincipal = loanAmount;
    let totalInterestSaved = 0;

    if (prepayment > 0) {
      const newLoanAmount = loanAmount - prepayment;
      const newEMI = newLoanAmount * rate * Math.pow(1 + rate, remainingTenure) / (Math.pow(1 + rate, remainingTenure) - 1);
      totalInterestSaved = (emi - newEMI) * remainingTenure;
    }

    setEmiData({
      emi: emi.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      prepayment,
      totalInterestSaved: totalInterestSaved.toFixed(2),
    });
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} />
      <div className="container">
        <h1 className="text-center mb-4">EMI Calculator</h1>
        <EMIForm onSubmit={handleSubmit} />
        {emiData && <EMIDetails emiData={emiData} />}
      </div>
    </div>
  );
}

export default App;
