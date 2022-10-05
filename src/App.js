import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import * as Viewport from './viewport.js';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';

import RouteChanged from './RouteChanged.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="website-content-wrapper">
          <RouteChanged>
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </RouteChanged>
        </div>
        <Footer />
      </Router>
    );
  }

  componentDidMount() {
    Viewport.init();
  }
}

export default App;
