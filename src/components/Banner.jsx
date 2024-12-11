import React from 'react';

const Banner = () => {
  return (
      <div className="position-relative">
      <img src="./images/Youth1.jpg" alt="Church" className="img-fluid" style={{objectFit:'cover', opacity:'50%', backgroundAttachment:'fixed', width:'100%', height:'100vh'}}/>
      <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center text-center --text-color">
  <h1 className="display-5 fw-bold">Welcome To Our Church</h1>
  <div className="mx-auto">
    <p className="lead mb-4">Join Us and Worship Our Lord TOGETHER!</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-outline-secondary btn-lg px-4">About Us</button>
      <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Contact Us</button>
    </div>
  </div>
</div>

      </div>
  );
};

export default Banner;
