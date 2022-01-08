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
        });
        setInputList("");
    }
    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElement, index) => {
                return index !== id;
            })
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
                        {items.map((itemVal, index) => {
                            return (
                            <>
                                <div className="todo_style">
                                    <i className="fa fa-times" aria-hidden="true" onClick={() => {
                                        deleteItem(index)
                                    }}></i>
                                    <li>{itemVal}</li>    
                                </div>
                            </>
                        )})}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default App;