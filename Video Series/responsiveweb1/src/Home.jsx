import React from 'react';
import Common from './Common';
import homeImg from './img/home.svg'

export default function Home() {
    return (
        <>
            <Common name='Grow your business with' imgsrc={homeImg} visit="/service" btname="Get Started" />  
        </>
    )
}
