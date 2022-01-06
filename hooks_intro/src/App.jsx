import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    
    const IncNo = () => {
        setCount(count + 1);
    };

    return (
        <>
            <div className="div">
                <h1> {count} </h1>
                <button className="button" onClick={IncNo}> Click Me </button>
            </div>
        </>
    )
}

export default App;