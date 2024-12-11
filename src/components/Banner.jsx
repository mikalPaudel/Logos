import React from 'react';

const Banner = () => {
  return (
      <div className="position-relative">
      <img src="./images/Youth1.jpg" alt="Church" className="img-fluid" style={{objectFit:'cover', opacity:'50%'}}/>
      <div className="position-absolute top-50 text-align-left text-black">
        <h1 className="welcome-text" style={{fontSize:'5.5em'}}>Welcome</h1> <br /><h1>To Our Church</h1> 
      </div>
      </div>
  );
};

export default Banner;
