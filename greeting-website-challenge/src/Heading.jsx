import React from "react";

var greetings;
var date = new Date().getHours();
const cssStyle = {}
if(date>=1 && date<12){
  greetings = "Good Morning";
  cssStyle.color = "green";
}else if(date>=12 && date<19){
  greetings = "Good Afternoon";
  cssStyle.color = "orange";
}else{
  greetings = "Good Night";
  cssStyle.color = "black";
}

function Heading(){
    return (
        <div>
            <h1>Hello Sir, <span style={cssStyle}> {greetings} </span></h1>  
        </div>
    );
}

export default Heading;