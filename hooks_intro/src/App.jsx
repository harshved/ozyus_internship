import React, { useState } from "react";

const App = () => {
    // const [count, setCount] = useState(0);
    let time = new Date().toLocaleTimeString();
    
    const [currTime, setTime] = useState(time);
    
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    };
    setInterval(updateTime, 1000);
    return (
        <>
            <div className="div">
                <h1> {currTime} </h1>
            </div>
        </>
    )
}

export default App;