import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../store/cartSlice';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon - Checkout functionality will be available soon!');
  };

  if (items.length === 0) {
    return (
      <div className="shopping-cart empty-cart">
        <div className="container">
          <h1>Your Shopping Cart</h1>
          <div className="empty-cart-content">
            <p>Your cart is empty</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <div className="container">
        <h1>Your Shopping Cart</h1>
        
        <div className="cart-summary">
          <p className="total-items">Total Items: <span>{totalQuantity}</span></p>
          <p className="total-cost">Total Cost: <span>${totalAmount.toFixed(2)}</span></p>
        </div>

        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.name} className="item-image" />
              
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">Unit Price: ${item.price}</p>
              </div>
              
              <div className="quantity-controls">
                <button 
                  className="quantity-btn decrease"
                  onClick={() => handleDecrease(item.id)}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  className="quantity-btn increase"
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </button>
              </div>
              
              <div className="item-total">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              
              <button 
                className="delete-btn"
                onClick={() => handleRemove(item.id)}
                title="Remove from cart"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
