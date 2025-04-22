<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
=======
import React from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to WebCloud ☁️</h1>
      <p>Secure file storage & sharing made easy.</p>
    </div>
>>>>>>> origin/master
  );
}

export default App;
