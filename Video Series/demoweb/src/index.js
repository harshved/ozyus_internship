import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import './Components/Header/Header';
import Header from './Components/Header/Header';
import AboutUs from './Components/Body/AboutUs';
import Cards from './Components/Body/Card';

ReactDOM.render(
  <>
    <App/>
    <AboutUs/>
    <Cards/>
    
  </>,
  document.getElementById('root')
);
