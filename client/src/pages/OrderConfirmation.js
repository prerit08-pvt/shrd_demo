import React from 'react';

const OrderConfirmation = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Order Confirmation</h1>
      <p>Your order has been placed successfully. Thank you for your purchase!</p>
      {/* You can add more details like order summary and order ID here */}
    </div>
  );
};

export default OrderConfirmation;
