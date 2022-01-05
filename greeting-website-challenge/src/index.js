import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
var greetings;
var date = new Date().getHours();
const cssStyle = {

}
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

ReactDOM.render(
  <>
    <div>
      <h1>Hello Sir, <span style={cssStyle}> {greetings} </span></h1>  
    </div>
  </>,
  document.getElementById('root')
);