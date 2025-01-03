import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Home from './components/Home';
import NoPage from './components/NoPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {/* BrowserRouter is used to handle routing in the application */}
      <BrowserRouter>
        <Routes>
          {/* Route for the login page */}
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          {/* Route for the registration page */}
          <Route path="/register" element={<RegisterPage setUser={setUser} />} />
          {/* Route for the home page, only accessible if user is logged in */}
          {user && <Route path="/Home" element={<Home user={user} />} />}
          {/* Route for handling 404 - Page Not Found */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      {/* ToastContainer is used to display toast notifications */}
      <ToastContainer />
    </div>
  );
}

export default App;
