import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function EMIForm({ onSubmit }) {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [prepayment, setPrepayment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loanAmount && interestRate && tenure) {
      onSubmit({
        loanAmount: parseFloat(loanAmount),
        interestRate: parseFloat(interestRate),
        tenure: parseInt(tenure, 10),
        prepayment: parseFloat(prepayment) || 0,
      });
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="loanAmount">
        <Form.Label>Loan Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter loan amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="interestRate">
        <Form.Label>Interest Rate (%)</Form.Label>
        <Form.Control
          type="number"
          step="0.01"
          placeholder="Enter interest rate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="tenure">
        <Form.Label>Loan Tenure (months)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter loan tenure"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="prepayment">
        <Form.Label>Prepayment (optional)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter prepayment amount"
          value={prepayment}
          onChange={(e) => setPrepayment(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Calculate
      </Button>
    </Form>
  );
}

export default EMIForm;
