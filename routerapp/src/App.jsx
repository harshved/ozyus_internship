import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";

const App = () => {
    const Name = () => {
        return <h1>This is Name Component</h1> 
    }
    return(
        <>
            <Routes>
                <Route exact path='/' element={<About/>} />
                <Route exact path='/contact' element={<Contact/>} />
                <Route path='/contact/name' element={<Name/>} />
                <Route element={<Error/>} />
            </Routes>
            {/* <About/>
            <Contact/> */}
        </>
    )
}
export default App;