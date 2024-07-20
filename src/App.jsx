// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './Layout';
import Football from './pages/kubada cagta';
import Handball from './pages/Handball';
import Tennis from './pages/Tennis';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/kubada cagta" element={<kubada cagta />} />
          <Route path="/handball" element={<Handball />} />
          <Route path="/tennis" element={<Tennis />} />
        </Routes>
      </Router>
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
