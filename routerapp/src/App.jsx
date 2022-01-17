import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import Navbar from "./Navbar";
import './index.css';
import Service from "./Service";
import User from "./User";
import Search from "./Search";

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
                <Route exact path='/search' element={<Search />} />
                <Route exact path='/service' element={<Service name="Service"/>} />
                <Route path='/user/:userName/:userLastName' element={<User/>} />
                <Route element={<Error/>} /> {/*Shows Error Page*/}
            </Routes>
            {/* <About/>
            <Contact/> */}
        </>
    )
}
export default App;