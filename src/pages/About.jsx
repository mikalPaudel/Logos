import React from 'react'
import HeroSection from '../components/HeroSection'
const About = () => {
  const breadcrumbLinks = [
    { label: "Home", to: "/", active: false },
    { label: "About", to: "/about", active: true },
  ];
  return (
      <>
       {/* Hero Section */}
       <HeroSection
        title="About Us"
        breadcrumbLinks={breadcrumbLinks}
      />
       {/* Page Content */}
       <div className="container py-5">
        <h2>About Our Church</h2>
        <p>
          We are dedicated to spreading the message of faith and community. Join
          us in our journey of worship and fellowship!
        </p>
      </div>
      </>
   
  
  )
}

export default About