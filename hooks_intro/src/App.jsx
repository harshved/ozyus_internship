import React, { useState } from "react";

const App = () => {
    // const [count, setCount] = useState(0);
    let time = new Date().toLocaleTimeString();
    console.log(time);
    const [currTime, setTime] = useState(time);
    
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    };

    return (
        <>
            <div className="div">
                <h1> {currTime} </h1>
                <button className="button" onClick={updateTime}> Click Me </button>
            </div>
        </>
    )
}

export default App;