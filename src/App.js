import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import ProductListing from './components/ProductListing/ProductListing';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductListing />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
