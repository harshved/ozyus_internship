import React, { useEffect, useState } from "react";

const App = () => {
    const [num, setNum] = useState(0);
    //Use Effect used whenever the page is refreshed
    useEffect(() => {
        document.title = `You Clicked me ${num} times`;
        // alert("clicked "+num);
    });
    return (
        <button onClick={() => {
            setNum(num+1);
        }}>Click Me {num}</button>
        )
}
export default App;