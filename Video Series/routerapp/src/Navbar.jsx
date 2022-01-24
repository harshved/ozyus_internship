import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'

const Navbar = () => {
    return(
        <>
            <div className="menu_style">
                <NavLink exact to='/'>About Us</NavLink>
                <NavLink exact to='/contact'>Contact Us</NavLink>
                <NavLink exact to='/search'>Search</NavLink>
                <NavLink exact to='/user/harsh/ved'>User</NavLink>
                <NavLink exact to='/service'>Services</NavLink>
            </div>
        </>
    )
}
export default Navbar;