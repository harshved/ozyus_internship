import React, { useState } from "react";

const App = () => {
    const [value, setvalue] = useState({
        fname: '',
        lname: '',
        email: '',
    });
    const inputEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setvalue((preValue) => {
            if(name === "fname"){
                return{
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                };
            }else if(name === "lname"){
                return{
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                };
            }else if(name === "email"){
                return{
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                };
            };
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted Successfully")
    }


    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h1>Hello, {value.fname} {value.lname} {value.email}</h1>,
                    <input type="text" placeholder="Enter Your First Name" onChange={inputEvent} name="fname" value={value.fname}/>,
                    <input type="text" placeholder="Enter Your Second Name" onChange={inputEvent} name="lname" value={value.lname}/>,
                    <input type="email" placeholder="Enter Your Email" onChange={inputEvent} name="email" value={value.email}/>,
                    <button type="submit">Click Me 👍</button>
                </div>
            </form>
        </>
    );
}

export default App;