import {React, useState} from 'react';
import HeroSection from '../components/HeroSection';
import { Modal, Button } from "react-bootstrap";


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

  const breadcrumbLinks = [
    { label: "Home", to: "/", active: false },
    { label: "Ministry", to: "/ministry", active: true },
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const handleShow = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
     
    <div style={{width:'100%'}}>
      {/* Hero Section */}
     <HeroSection
     title="Our Ministry"
     breadcrumbLinks={breadcrumbLinks}
   />

      {/* Gallery */}
      <div className="row g-4">
        {ministries.map((ministry, index) => (
          <div className="col-12 col-sm-6 col-md-4" key={index}>
            <div
              className="card h-100 border-0 shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => handleShow(ministry)}
            >
              <img
                src={ministry.image}
                alt={ministry.title}
                className="card-img-top img-fluid"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{ministry.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{currentItem.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="img-fluid mb-3"
          />
          <p>{currentItem.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Ministries;
