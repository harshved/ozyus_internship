import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import Navbar from "./Navbar";
import './index.css';
import Service from "./Service";

const App = () => {
    const Name = () => {
        return <h1>This is Name Component</h1> 
    }
    return(
        <>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<About name="About"/>} />
                <Route exact path='/contact' element={<Contact name="Contact"/>} />
                <Route exact path='/service' element={<Service name="Service"/>} />
                <Route path='/contact/name' element={<Name/>} />
                <Route element={<Error/>} />
            </Routes>
            {/* <About/>
            <Contact/> */}
        </>
    )
}
export default App;