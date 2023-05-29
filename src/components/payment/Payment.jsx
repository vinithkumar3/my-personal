import React, { useState } from 'react';
import"./payment.css"
const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // Implement payment logic here
    console.log('Payment successful!');
  };

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <form>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <label htmlFor="cardHolder">Card Holder:</label>
        <input
          type="text"
          id="cardHolder"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
        />

        <div className="expiry-cvv">
          <div>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>

        <button type="button" onClick={handlePayment}>
          Make Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;