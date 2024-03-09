import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Layout/Home';
import About from './components/Layout/About';
import Contact from './components/Layout/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
