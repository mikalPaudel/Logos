import React from 'react';
import { FaPhoneAlt, FaFacebook,FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="py-3">
      <hr />
      <div className="container-fluid">
        {/* Row 1: Contact Info */}
        <div className="row text-center">
          <div className="col">
            <h5>Contact Info:</h5>
          </div>
        </div>

        {/* Row 2: Email, Facebook, Phone */}
        <div className="row align-items-center">
          <div className="col-md-5 ml-md-10">
          <Link to="mailto:abc@gmail.com">
             <FaEnvelope/>
            </Link>
            <p>Email: abc@gmail.com</p>
          </div>
          <div className="col-md-4">
            <Link to="https://www.facebook.com/profile.php?id=100094953342789">
              <FaFacebook/>
            </Link>
            <p>Facebook: Logos Church Butwal</p>
          </div>
          <div className="col-md-3">
            <Link to="#"><FaPhoneAlt/></Link>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Row 3: Copyright Info */}
        <div className="row">
          <div className="col">
            <p>&copy; {new Date().getFullYear()} Logos Church. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
