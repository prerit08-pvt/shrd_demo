// src/pages/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemove = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { _id: id, quantity: parseInt(quantity, 10) },
    });
  };

  if (cart.cartItems.length === 0) {
    return <div className="container mx-auto px-4 py-8">Your cart is empty</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      {cart.cartItems.map((item) => (
        <div key={item._id} className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <p className="text-gray-700">${item.salePrice}</p>
          </div>
          <div className="flex items-center">
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item._id, e.target.value)}
              className="border rounded w-16 text-center mr-4"
              min="1"
            />
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
              onClick={() => handleRemove(item._id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="text-lg font-semibold mt-4">
        Total: ${cart.cartItems.reduce((total, item) => total + item.salePrice * item.quantity, 0)}
      </div>
      <button className="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-700" onClick={() => navigate('/checkout')}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
