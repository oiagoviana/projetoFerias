import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login/>} />
        <Route path='/home' element = {<Home/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

