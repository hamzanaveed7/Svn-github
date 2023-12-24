import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { authenticated, isAdmin } = useAuth();

  return authenticated && isAdmin ? (
    <Route {...rest} element={<Component />} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
