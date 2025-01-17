import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";

const Header = () => {

  return (
    <div className="header-container">
      <header className="d-flex justify-content-between align-items-center text-xl-start">
        {/* Logo */}
        <div className="logo flex-wrap">
          <img src="./images/logos.jpg" alt="Logo" width="40" height="40" style={{ borderRadius: '50%' }} />
          <span className="logo-text">LOGOS CHURCH</span>
        </div>

        {/* Hamburger menu for small screens */}
        <button className="navbar-toggler d-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <IoMdMenu/>
          </span>
        </button>

        {/* Offcanvas menu */}
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/events" className="nav-link">Events</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ministries" className="nav-link">Ministry</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacts" className="nav-link">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="nav nav-pills header-nav d-none d-lg-flex">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/events" className="nav-link">Events</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/ministries" className="nav-link">Ministry</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacts" className="nav-link">Contact Us</NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
