import React, { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Ministries from '../pages/Ministries';
import Contacts from '../pages/Contacts';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  // const location = useLocation(); 

  const handleScroll = useCallback(() => {
    setScrollTop(document.documentElement.scrollTop);
    setScrolling(document.documentElement.scrollTop > scrollTop);
  }, [scrollTop, setScrolling]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [handleScroll]);

  const headerClass = scrolling ? 'header-hidden' : '';

  return (
   <div className={`header-container ${headerClass}`}>
       <header className={`d-flex justify-content-between align-items-center py-3 text-xl-start ${headerClass}`}>
        {/* Logo */}
        <div className="logo">
          <img src="./images/logos.jpg" alt="Logo" width="50" height="50" />
          <span className="logo-text">LOGOS CHURCH</span>
        </div>

        {/* Navigation Links */}
        <ul className="nav nav-pills header-nav">
        
          <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
           {/* <li className="nav-item"><NavLink to="/events" className="nav-link">Events</NavLink></li> */}
           <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li className="nav-item"><NavLink to="/ministries" className="nav-link">Ministry</NavLink></li>
          <li className="nav-item"><NavLink to="/contacts" className="nav-link">Contact Us</NavLink></li>
        </ul>
      </header>
      {/* <main>
        <section id="home">
          <h2>Home</h2>
          <HomePage />
        </section>
        <section id="about">
          <h2>About</h2>
          <About />
        </section>
        <section id="ministry">
          <h2>Ministry</h2>
          <Ministries />
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <Contacts />
        </section>
      </main> */}
    </div>
  );
};

export default Header;

