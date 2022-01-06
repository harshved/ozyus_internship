import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import sdata from "./series_data";

function App(){
    return(
        <>
        <Heading />
        {sdata.map((currValue) =>{
            return (
                <Card 
                    img_src = {currValue.img_src}
                    category = {currValue.category}
                    sname = {currValue.sname}
                    link = {currValue.link}
                />
            );
        })};
        </>
    );
}

export default App;