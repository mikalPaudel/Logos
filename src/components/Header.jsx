import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      } fixed-top`}
      style={{
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <div className="navbar-brand d-flex align-items-center">
          <img
            src="./images/logos.jpg"
            alt="Logo"
            width="40"
            height="40"
            className="rounded-circle me-2"
          />
          <span className="fw-bold">LOGOS CHURCH</span>
        </div>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span>
            <IoMdMenu size={24} />
          </span>
        </button>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-end collapse"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ministries" className="nav-link">
                  Ministry
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacts" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ministries" className="nav-link">
                Ministry
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="nav-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
