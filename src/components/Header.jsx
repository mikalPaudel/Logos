import React, { useEffect, useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
          {/* <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page">Home</Link>
          </li> */}
          <li className="nav-item">
          <NavLink to="/" className="nav-link" exact activeClassName="active">
    Home
  </NavLink>
</li>
<li className="nav-item">
            <NavLink to="/ministries" className="nav-link" activeClassName="active">
              Ministries
            </NavLink>
          </li>
           {/* <li className="nav-item"><Link to="/events" className="nav-link">Events</Link></li> */}
           <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/contacts" className="nav-link">Contact Us</Link></li>
        </ul>
      </header>
    </div>
  );
};

export default Header;

