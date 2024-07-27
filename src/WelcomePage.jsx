import React from 'react';
import { useLocation } from 'react-router-dom';

const WelcomePage = () => {
    debugger
  const location = useLocation();
  const { email, password } = location.state || {};

  return (
    <div>
      <h1>Display Page</h1>
      {email && password ? (
        <div>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default WelcomePage;
