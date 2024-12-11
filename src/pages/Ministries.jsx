import React from 'react';

const Ministries = () => {
  const ministries = [
    {
      title: "Youth Ministry",
      image: "./images/Youth2.jpg",
      description: "Youth Ministry will take place every Saturday 12:30-1:45pm. The Youth meet in the main church hall after church worship to continue Bible Study and other activities. For further information about Youth Ministry, please call David at 9810000000 or email at youth@logos.com",
    },
    {
      title: "Children Ministry",
      image: "./images/children.jpg",
      description: "Children Ministry will take place every Saturday 12:30-1:45pm. The Youth meet in the main church hall after church worship to continue Bible Study and other activities. For further information about Youth Ministry, please call David at 9810000000 or email at youth@logos.com",
    },
    {
      title: "House Fellowship",
      image: "./images/home.jpg",
      description: "House Ministry will take place every Saturday 12:30-1:45pm. The Youth meet in the main church hall after church worship to continue Bible Study and other activities. For further information about Youth Ministry, please call David at 9810000000 or email at youth@logos.com",
    },
    {
      title: "Women Fellowship",
      image: "./images/women.jpg",
      description: "Women Ministry will take place every Saturday 12:30-1:45pm. The Youth meet in the main church hall after church worship to continue Bible Study and other activities. For further information about Youth Ministry, please call David at 9810000000 or email at youth@logos.com",
    },
    {
      title: "Night Fellowship",
      image: "./images/night.jpg",
      description: "Night Fellowship will take place every Saturday 12:30-1:45pm. The Youth meet in the main church hall after church worship to continue Bible Study and other activities. For further information about Youth Ministry, please call David at 9810000000 or email at youth@logos.com",
    },
  ];

  return (
    <div id="ministriesCarousel" className="carousel slide" data-bs-ride="carousel"  style={{height:'100vh', width:'100%'}}>
      
      <h1 style={{fontSize:'5.5em', textShadow:'rgb(255,255,0)', textAlign:'center'}}>Our Ministries</h1>
      <div className="carousel-inner">
        {ministries.map((ministry, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <img src={ministry.image} className="d-block img-fluid w-100" style={{ height: '300px', objectFit: 'cover' }} alt={ministry.title} />
                  
                </div>
                 
                <div className="col-md-6 d-flex align-items-center">
                  <div className="p-3">
                    <h1>{ministry.title}</h1>
                    <p>{ministry.description}</p>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" style={{borderRadius:'50%', height:'5em', width:'5em'}} type="button" data-bs-target="#ministriesCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" style={{borderRadius:'50%', height:'5em', width:'5em'}} type="button" data-bs-target="#ministriesCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Ministries;
