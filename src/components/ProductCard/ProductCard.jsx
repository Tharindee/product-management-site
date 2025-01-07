import React from 'react';
import './ProductCard.css';
import { motion } from 'framer-motion';

const ProductCard = ({ product, onViewDetails }) => {
    const { title, image, price, category, description, highlightedTitle } = product;
  
    return (
      <div id="products" className="product-card">
        <img src={image} alt={title} className="product-image" />
        <h3 className="product-title" dangerouslySetInnerHTML={{ __html: highlightedTitle || product.title }}/>
        <p className="product-price">${price}</p>
        <p className="product-category">{category}</p>
        <motion.button whileHover={{ scale:1.1 }} className="btn btn-info" onClick={() => onViewDetails(product)}>View Details</motion.button>
      </div>
    );
  };
  
  export default ProductCard;