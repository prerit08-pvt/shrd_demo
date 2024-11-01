import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(null);

 

  const handleMenuToggle = (index) => {
    setMenuOpen(menuOpen === index ? null : index);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Main Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/products" className="hover:text-orange-500">Products</Link>
          <Link to="/about" className="hover:text-orange-500">About Us</Link>
          <Link to="/contact" className="hover:text-orange-500">Contact</Link>
        </div>

        {/* Mega Menu */}
        <div className="relative">
          <button
            onClick={() => handleMenuToggle(0)}
            className="hover:text-orange-500 focus:outline-none"
          >
            <i className="fal fa-bars"></i> Services
          </button>

        
      
  
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
