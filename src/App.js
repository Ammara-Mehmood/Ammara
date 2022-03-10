import React, { Component, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Home from './Home';
import './index.css';
import Login from './Login.js';



function App() {
 
  return <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<Login />}  />
      <Route path='/home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
 </div>
}


export default App;

