import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'; // Import your authentication context

const PrivateRouteAdmin = () => {
  const { user } = useAuthContext(); // Assuming user is stored in the auth context

  // Check if the user is authenticated and has an admin role
  if (user && user.role === 'admin') {
    return <Outlet />; // Render the child components if the user is an admin
  } else {
    // Redirect to login page if not an admin
    return <Navigate to="/login" />;
  }
};

export default PrivateRouteAdmin;
