import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { plants, categories } from '../../data/plants';
import './ProductListing.css';

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-listing">
      <div className="container">
        <h1>Our Plant Collection</h1>
        
        <div className="category-filter">
          <button 
            className={selectedCategory === 'All' ? 'active' : ''}
            onClick={() => setSelectedCategory('All')}
          >
            All Plants
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="plants-grid">
          {filteredPlants.map(plant => (
            <div key={plant.id} className="plant-card">
              <img src={plant.thumbnail} alt={plant.name} className="plant-image" />
              <div className="plant-info">
                <h3>{plant.name}</h3>
                <p className="plant-category">{plant.category}</p>
                <p className="plant-price">${plant.price}</p>
                <button 
                  className={`add-to-cart-btn ${isInCart(plant.id) ? 'disabled' : ''}`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
