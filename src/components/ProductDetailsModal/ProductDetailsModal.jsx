import React from 'react';
import './ProductDetailsModal.css';
import { motion } from 'framer-motion';

const ProductDetailsModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  const { title, description, price, rating, image } = product;

  const renderStars = () => {
    const fullStars = Math.floor(rating?.rate || 0);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {'★'.repeat(fullStars)}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <motion.div key="modal-bg" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="modal-overlay">
      <motion.div key="modal-content" initial={{bottom:"-100%"}} animate={{bottom:"0%"}} exit={{bottom:"-100%"}}  className="modal-content">
      <button onClick={onClose} className="close-btn">×</button>
        <div className="modal-header">
          <h5 className="model-title">{title}</h5>
          <img src={image} alt={title} className="model-image" />
        </div>
        <div className="modal-body">
          <p>{description}</p>
          <p>Price: <strong>${price}</strong></p>
          <p>Rating: <span className="stars">{renderStars()}</span></p>

          <div className="modal-footer">
          <button className="btn btn-primary" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetailsModal;