import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import sdata from "./series_data";

function App(){
    return(
        <>
        <Heading />
        <Card 
            img_src = {sdata[0].img_src}
            category = {sdata[0].category}
            sname = {sdata[0].sname}
            link = {sdata[0].link}
        />
        <Card 
            img_src = {sdata[1].img_src} 
            category = {sdata[1].category}
            sname = {sdata[1].sname}
            link = {sdata[1].link}
        />
        <Card 
            img_src = {sdata[2].img_src}
            category = {sdata[2].category}
            sname = {sdata[2].sname}
            link = {sdata[2].link}
        />
        </>
    );
}

export default App;