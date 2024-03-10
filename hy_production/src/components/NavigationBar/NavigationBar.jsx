import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';


function NavigationBar() {
  return (
    <div className="navbar">
      <img src="/images/hy.png" alt="Logo" className="logo" />
      <text className="logo">H&Y&nbsp;Production</text>
      <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavigationBar;
