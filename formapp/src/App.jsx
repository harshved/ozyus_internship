import React, { useState } from "react";

const App = () => {
    const [currentValue, setValue] = useState(); 
    const [name, setName] = useState(); 

    const onSubmit = () => {
        setName(currentValue);
    }
    
    const changeEvent = (event) => {
        var val = event.target.value;
        setValue(val)
    }
    return (
        <>
            <div>
                <h1>Hello, {name}</h1>,
                <input type="text" placeholder="Enter Your Name" onChange={changeEvent} value={currentValue}/>,
                <button onClick={onSubmit}>Click Me 👍</button>
            </div>
        </>
    );
}

export default App;