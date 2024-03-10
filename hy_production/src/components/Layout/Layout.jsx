import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Layout.css';
import Footer from '../Footer/Footer';

function Layout({ children }) {
  return (
    <div className="layout">
      <NavigationBar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
