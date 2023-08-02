import React from 'react'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layouts from './components/Layout'
import About from './pages/About'
import Ministries from './pages/Ministries'
import Events from './pages/Events'
import Contacts from './pages/Contacts'
import HomePage from './pages/HomePage'
const MyRoute = () => {
  return (

    <Router>
        <Routes>
            <Route path='/' element={<Layouts/>}>
            <Route index element={<HomePage/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='ministries' element={<Ministries/>}/>
            <Route path='events' element={<Events/>}/>
            <Route path='contacts' element={<Contacts/>}/>
            </Route>
        </Routes>
    </Router>
    
  )
}

export default MyRoute