import React, { useState } from "react";

const App = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    const itemEvent = (event) => {
        setInputList(event.target.value);
    }
    const onSubmit = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1> ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a Items" onChange={itemEvent} value={inputList} />
                    <button onClick={onSubmit}> + </button>
                    <ol>
                        {/* <li>{inputList}</li> */}
                        {items.map((itemVal) => {
                            return <li>{itemVal}</li>;
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default App;