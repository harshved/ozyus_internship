import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';

const App = () => {
    return(
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/contact" element={<Contact />}/>
                <Route exact path="/service" element={<Service />}/>
            </Routes>
        </>
    )
    
}
export default App;