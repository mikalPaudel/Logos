import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <header className="d-flex justify-content-between align-items-center py-3 text-xl-start">
        {/* Logo */}
        <div className="logo">
          <img src="./images/logos.jpg" alt="Logo" width="50" height="50" />
          <span className="logo-text">LOGOS CHURCH</span>
        </div>

        {/* Navigation Links */}
        <ul className="nav nav-pills header-nav">
          <li className="nav-item"><Link to="/" className="nav-link" aria-current="page">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/ministries" className="nav-link">Ministries</Link></li>
          <li className="nav-item"><Link to="/events" className="nav-link">Events</Link></li>
          <li className="nav-item"><Link to="/contacts" className="nav-link">Contact Us</Link></li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
