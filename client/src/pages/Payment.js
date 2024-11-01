import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
const Payment = () => {
  const { state } = useLocation(); // Access the payment amount from navigation state
  const { amount } = state;
  const [transactionId, setTransactionId] = useState('');
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePaymentConfirmation = async (e) => {
    e.preventDefault();

    // Send payment confirmation to backend
    try {
      const response = await fetch('http://localhost:5000/api/confirm-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transactionId,
          paymentType: amount === 100 ? 'full' : 'advance', // Send type of payment
        }),
      });

      if (response.ok) {
        navigate('/confirmation'); // Redirect to confirmation page
      } else {
        console.error('Error confirming payment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const totalAmount = cart.cartItems.reduce((total, item) => total + item.salePrice * item.quantity, 0).toFixed(2)
  const amountToPay = amount === 100 ? totalAmount : totalAmount * 0.6;
  const QRCode = "https://quickchart.io/chart?cht=qr&chs=300x300&chl=upi://pay?pa=shardaprinters1@okaxis%26am="+amountToPay+"%26tn=";
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Pay via UPI</h1>
      <p className="mb-4">You need to pay ₹{amountToPay}</p>
      <img src={QRCode} alt="UPI QR Code" className="mb-4 w-96" />
      <p className="mb-4">Scan the QR code</p>

      <form onSubmit={handlePaymentConfirmation}>
        <label className="block mb-2 text-sm font-medium text-gray-700">Enter UPI Transaction ID:</label>
        <input
          type="text"
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
        />
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
