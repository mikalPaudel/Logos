import React from 'react'
import Banner from '../components/Banner'
import About from './About'
import Ministries from './Ministries'
import Contacts from './Contacts'

const HomePage = () => {
  return (
    <>
  <div className="row justify-content-center">
    <div>
    <center> 
      <Banner />
    </center></div>
    <About/>
    <hr />
    <Ministries/>
    <hr />
    <Contacts/>
  </div>
    </>
    
  )
}

export default HomePage