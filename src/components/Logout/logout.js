import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './logout.css';

function Logout() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/logout');
      if (response.status === 200) {
        setMessage('You have been logged out.');
        navigate('/login'); // Redirect to login page after successful logout
      }
    } catch (error) {
      setMessage('Error logging out.');
    }
  };

  return (
    <div className="logout-container">
      <h2>Logout</h2>
      <Button variant="primary" onClick={handleLogout}>
        Logout
      </Button>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default Logout;
