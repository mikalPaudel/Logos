import React from 'react'

const CarousMin = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner card border">
    <div className="carousel-item" data-bs-interval="2000">
        <img src="./images/logos.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item active" data-bs-interval="10000">
        <img src="./images/youth.jpg" alt="..."/>
      </div>
      
      <div className="carousel-item">
        <img src="./images/Fellowship.jpg" alt="..."/>       
      </div>
    </div>
    <button className="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default CarousMin