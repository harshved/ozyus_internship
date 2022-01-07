import React, { useState } from "react";

const App = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [fullname, setfullname] = useState("");
    const changeEvent = (event) => {
        setfname(event.target.value);
    }
    const changeEvent1 = (event) => {
        setlname(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        setfullname(fname +" "+ lname);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h1>Hello, {fullname}</h1>,
                    <input type="text" placeholder="Enter Your First Name" onChange={changeEvent} value={fname}/>,
                    <input type="text" placeholder="Enter Your Second Name" onChange={changeEvent1} value={lname}/>,
                    <button type="submit">Click Me 👍</button>
                </div>
            </form>
        </>
    );
}

export default App;