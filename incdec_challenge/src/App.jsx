import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';

const App = () => {
    const [value, setValue] = useState(0);

    const changeInc = () => {
        setValue(value+1);
    }
    const changeDec = () => {
        if(value===0){
            alert("Value can't be less than 0");
        }else{
            setValue(value-1);    
        }
    }
    return(
        <>
            <h1>INC DEC</h1>
            <h1> {value} </h1>
            <button onClick={changeInc}> <AddCircleIcon /></button>
            <button onClick={changeDec}> <DeleteIcon/></button>
        </>
    )
}
export default App;