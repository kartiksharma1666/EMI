import React from 'react';

function EMIDetails({ emiData }) {
  return (
    <div className="mt-4">
      <h3>EMI Details</h3>
      <p><strong>EMI:</strong> ₹{emiData.emi}</p>
      <p><strong>Total Interest Payable:</strong> ₹{emiData.totalInterest}</p>
      <p><strong>Total Amount Payable:</strong> ₹{emiData.totalPayment}</p>
      {emiData.prepayment > 0 && (
        <>
          <p><strong>Prepayment Amount:</strong> ₹{emiData.prepayment}</p>
          <p><strong>Total Interest Saved:</strong> ₹{emiData.totalInterestSaved}</p>
        </>
      )}
    </div>
  );
}

export default EMIDetails;
