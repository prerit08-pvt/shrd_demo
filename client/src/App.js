import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/cartContext'; // Import CartProvider
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Cart from './pages/Cart'; // Import Cart page
import OrderConfirmation from './pages/OrderConfirmation'; // Import OrderConfirmation page
import Checkout from './pages/Checkout'; // Import Checkout page  
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Payment from './pages/Payment';
import { AuthProvider } from './context/AuthContext';
// import Login from './components/Login';
import Register from './components/Register';
// import profile from './components/Profile';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import PrivateRouteAdmin from './components/PrivateRouteAdmin';
function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
          <Route path="/checkout" element={<Checkout />} /> {/* Add checkout route */}
          <Route path="/order-confirmation" element={<OrderConfirmation />} /> 
          <Route path="/profile" element={<profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route element={<PrivateRouteAdmin />}>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/login" element={<AdminLogin />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
