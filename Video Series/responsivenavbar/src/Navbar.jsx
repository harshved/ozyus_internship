import React, { useState } from 'react';
import {FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from "react-icons/fa"
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar = () => {
    const [showMedia, setShowMedia] = useState(false);
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2><span>O</span>zyus<span>S</span>olutions</h2>
                </div>
                <div className={{showMedia} ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="" target="_blank"><FaFacebookSquare className='facebook'/></a>
                        </li>
                        <li>
                            <a href="" target="_blank"><FaInstagramSquare className='instagram'/></a>
                        </li>
                        <li>
                            <a href="" target="_blank"><FaYoutubeSquare className='youtube'/></a>
                        </li>
                    </ul>
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMedia(!showMedia)}><GiHamburgerMenu/></a>
                    </div>
                </div>
            </nav> 
            <section className="hero-section">
                <p>Welcome to</p>
                <h2>Ozyus Solution</h2>
            </section>
        </>
    )
};

export default Navbar;
