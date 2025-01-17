import React from 'react';
// import About from './About';
// import Ministries from './Ministries';
import Contacts from './Contacts';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-vh-100 w-100 overflow-hidden">
      {/* Banner */}
      <div className="position-relative w-100 vh-100">
        <img 
          src="./images/Youth1.jpg" 
          alt="Church" 
          className="img-fluid w-100 h-100"
          style={{
            objectFit: 'cover',
            opacity: '50%',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Centered Content */}
        <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="display-4 fw-bold mb-4">
            Welcome To Our Church
          </h1>
          <div className="container-sm px-4">
            <p className="lead mb-4">
              Join Us and Worship Our Lord TOGETHER!
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">About Us</button>
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

        {/* <About /> */}
        <section className="py-5 text-center">
      <div className="container">
        <h2 className="mb-3">About Us</h2>
        <p className="mb-4">
          Learn more about who we are, our mission, and how we serve our community in faith and love.
        </p>
        <NavLink to="/about" className="btn btn-primary">
          Learn More About Us
        </NavLink>
      </div>
    </section>
        {/* <Ministries /> */}
        <section className="py-5 text-center">
      <div className="container">
        <h2 className="mb-3">Our Ministry</h2>
        <p className="mb-4">
          Explore our ministries that aim to nurture faith and community, catering to all age groups and interests.
        </p>
        <NavLink to="/ministries" className="btn btn-primary">
          Learn More About Our Ministry
        </NavLink>
      </div>
    </section>
        {/* <Contacts /> */}
        <section className="py-5 text-center">
      <div className="container">
        <h2 className="mb-3">Contact Us</h2>
        <p className="mb-4">
          Have questions or need assistance? Reach out to us, and we’ll be happy to help.
        </p>
        <NavLink to="/contacts" className="btn btn-primary">
          Get in Touch
        </NavLink>
      </div>
    </section>
    </div>
  );
};

export default HomePage;