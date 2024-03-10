import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <NavigationBar />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default Layout;
