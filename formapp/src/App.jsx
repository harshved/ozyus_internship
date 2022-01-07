import React, { useState } from "react";

const App = () => {
    const [value, setvalue] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    });
    const inputEvent = (event) => {
        const {value, name} = event.target;

        setvalue((preValue) => {
            if(name === "fname"){
                return{
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone,
                };
            }else if(name === "lname"){
                return{
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    phone: preValue.phone,
                };
            }else if(name === "email"){
                return{
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    phone: preValue.phone,
                };
            }else if(name === "phone"){
                return{
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: value,
                };
            };
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        // let id = document.getElementById("detail");
        // id.innerHTML = "<h1>Name : <script>alert('asdad')</script></h1>\n<h2>Email : </h2>\n<h3>Phone : </h3>"
        alert("Form Submitted Successfully")
    }


    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h1>Hello, {value.fname} {value.lname} {value.email}</h1>,
                    <p id="detail"></p>,
                    <input type="text" placeholder="Enter Your First Name" onChange={inputEvent} name="fname" value={value.fname}/>,
                    <input type="text" placeholder="Enter Your Second Name" onChange={inputEvent} name="lname" value={value.lname}/>,
                    <input type="email" placeholder="Enter Your Email" onChange={inputEvent} name="email" value={value.email}/>,
                    <input type="number" placeholder="Enter Your Number" onChange={inputEvent} name="phone" value={value.phone}/>,
                    <button type="submit">Click Me 👍</button>
                </div>
            </form>
        </>
    );
}

export default App;