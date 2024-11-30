// src/pages/AdminDashboard.jsx
import React, { useState } from 'react';
import AdminLogin from '../components/AdminLogin';
import AddUser from '../components/AddUser';

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const handleLogin = (token) => {
    setIsLoggedIn(true);
    setToken(token);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <div>
          <h2>Welcome to Admin Dashboard</h2>
          <AddUser token={token} />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
