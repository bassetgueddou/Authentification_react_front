import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Login from './components/Login/login';
import Logout from './components/Logout/logout';
import Register from './components/Register/register';
import Navigation from './components/Navbar/navbar';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Navigation />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
