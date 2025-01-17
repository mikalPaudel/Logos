import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = ({ title, breadcrumbLinks }) => {
  return (
    <div className="hero-section position-relative">
      {/* Background Image */}
      <div className="hero-background">
        <img
          src="./images/Youth1.jpg"
          alt={title}
          className="img-fluid"
          style={{
            objectFit: "cover",
            opacity: "0.5",
            width: "100%",
            height: "40vh", // Adjust for smaller hero height
          }}
        />
      </div>

      {/* Content */}
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <h1 className="fw-bold text-color display-5">{title}</h1>
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mt-3">
          <ol className="breadcrumb justify-content-center">
            {breadcrumbLinks.map((link, index) => (
              <li
                className={`breadcrumb-item ${
                  link.active ? "active" : ""
                }`}
                key={index}
              >
                {link.active ? (
                  link.label
                ) : (
                  <NavLink to={link.to} className="text-decoration-none">
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default HeroSection;
