import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });
  const [paymentOption, setPaymentOption] = useState(null);

  const handlePaymentOption = (option) => {
    setPaymentOption(option);

    // Navigate to payment page with the selected option
    if (option === 'full') {
      navigate('/payment', { state: { amount: 100 } }); // Full payment (100%)
    } else {
      navigate('/payment', { state: { amount: 60 } }); // 60% advance payment
    }
  };


  const handleInputChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Proceed with the order process here
    console.log('Order placed:', { shippingInfo, cartItems: cart.cartItems });

    // Navigate to a confirmation page after placing the order
    navigate('/order-confirmation');
  };

  if (cart.cartItems.length === 0) {
    return <div className="container mx-auto px-4 py-8">Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      {/* Shipping Information Form */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shippingInfo.name}
            onChange={handleInputChange}
            className="border rounded p-2"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={handleInputChange}
            className="border rounded p-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingInfo.city}
            onChange={handleInputChange}
            className="border rounded p-2"
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={shippingInfo.postalCode}
            onChange={handleInputChange}
            className="border rounded p-2"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={shippingInfo.country}
            onChange={handleInputChange}
            className="border rounded p-2"
          />
        </div>
      </div>

      {/* Cart Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        {cart.cartItems.map((item) => (
          <div key={item._id} className="flex justify-between items-center mb-4">
            <p>{item.name} (x{item.quantity})</p>
            <p>${(item.salePrice * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="text-lg font-semibold mt-4">
          Total: ${cart.cartItems.reduce((total, item) => total + item.salePrice * item.quantity, 0).toFixed(2)}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Choose Payment Option</h2>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mr-4 hover:bg-blue-700"
            onClick={() => handlePaymentOption('full')}
          >
            Pay 100%
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
            onClick={() => handlePaymentOption('advance')}
          >
            Pay 60% Advance
          </button>
        </div>
      </div>
      {/* Place Order Button */}
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
