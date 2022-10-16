import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import * as Viewport from './viewport.js';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import FoodSelection from './pages/food-selection/FoodSelection';
import EatingHabits from './pages/eating-habits/EatingHabits';
import Result from './pages/result/Result';

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
              <Route path="/food-selection" element={<FoodSelection />} />
              <Route path="/eating-habits" element={<EatingHabits />} />
              <Route path="/result" element={<Result />} />
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
