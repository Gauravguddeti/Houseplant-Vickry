import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Houseplant Vickry</h1>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link cart-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalQuantity}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
