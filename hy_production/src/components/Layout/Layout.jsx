import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <NavigationBar />
      <div className="content">
        <h1>H&Y Production</h1>
        {children}
      </div>
    </div>
  );
}

export default Layout;
