import React from 'react';

const Contacts = () => {
  return (
    <div className="container d-flex justify-content-evenly">
      <div className="map">
        {<iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.282410484835!2d83.46142650890688!3d27.677665076100336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687b2253a990d%3A0xcaf52268871bf033!2sLogos%20Church!5e0!3m2!1sen!2snp!4v1702198177222!5m2!1sen!2snp" 
        title='Church location' 
        width="400" 
        allowfullscreen="true" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
          </iframe>}
      </div>
      <div className="contact-details align-content-center">
        <center><b><h1>Contact Us</h1></b>
        <ul style={{ listStyleType: 'none'}}>
          <li><strong>Weekly Service Hours:</strong></li>
          <ul style={{ listStyleType: 'none'}}>
          <li><strong>Saturday:</strong> 10:00 AM - 12:00 PM</li>
            <li><strong>Sunday:</strong> 9:00 AM - 12:00 PM</li>
            <li><strong>Wednesday:</strong> 7:00 PM - 8:30 PM</li>
          </ul>
        </ul></center>
      </div>
      
    </div>
  );
};

export default Contacts;
