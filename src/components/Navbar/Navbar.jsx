import React from 'react';
import './Navbar.css';

const Navbar = ({ cartCount,  onCartClick, onNavClick  }) => {
  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <nav className="navbar sticky-top">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
          <a className="nav-link"
              href="#home"
              onClick={(e) => onNavClick(e, 'home')}>
              Home
            </a>
          </li>
          <li className="nav-item">
          <a className="nav-link"
              href="#products"
              onClick={(e) => onNavClick(e, 'products')}>
              Products
            </a>
          </li>
          <li className="nav-item">
          <a className="nav-link"
              href="#contact"
              onClick={(e) => onNavClick(e, 'contact')}>
              Contact Us
            </a>
          </li>
        </ul>
        <div className="cart-icon" onClick={onCartClick} style={{ cursor: 'pointer' }}>
          <i className="bi bi-cart3"></i>
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
