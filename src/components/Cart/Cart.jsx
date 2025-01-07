import React from 'react';
import './Cart.css';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = ({ cart, onClearCart, onCheckout, onCloseCart, isOpen }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="cart"
          initial={{ transform: 'translateX(100%)', opacity: 0 }}
          animate={{ transform: 'translateX(0%)', opacity: 1 }}
          exit={{ transform: 'translateX(100%)', opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="cart">
          <div className="cart-header">
            <h4>Shopping Cart</h4>
            <button className="close-cart" onClick={onCloseCart}>
              &times;
            </button>
          </div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
          <h5 className="total-amount">Total: ${totalPrice.toFixed(2)}</h5>
          <div className="cart-buttons">
            <button className="btn btn-secondary" onClick={onClearCart}>
              Clear Cart
            </button>
            <button className="btn btn-primary" onClick={onCheckout}>
              Go to Checkout
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;