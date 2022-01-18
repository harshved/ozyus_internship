import React from 'react';
import homeImg from './img/home.svg';
import Common from './Common';

export default function About() {
    return (
        <>
            <Common name='Welcome to About Page' imgsrc={homeImg} visit="/contact" btname="Contact Us" />   
        </>
    )
}
