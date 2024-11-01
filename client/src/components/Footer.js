import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p>
            We are a creative printing agency offering high-quality printing solutions for businesses, marketing, and events.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:text-orange-500"><Link to="/">Home</Link></li>
            <li className="mb-2 hover:text-orange-500"><Link to="/products">Products</Link></li>
            <li className="mb-2 hover:text-orange-500"><Link to="/about">About Us</Link></li>
            <li className="mb-2 hover:text-orange-500"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-orange-500">
              <i className="fab fa-instagram"></i> {/* FontAwesome Instagram Icon */}
            </a>
            <a href="/" className="hover:text-orange-500">
              <i className="fab fa-facebook"></i> {/* FontAwesome Facebook Icon */}
            </a>
            <a href="/" className="hover:text-orange-500">
              <i className="fab fa-twitter"></i> {/* FontAwesome Twitter Icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
