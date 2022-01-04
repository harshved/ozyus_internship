import React from 'react';
import ReactDOM from 'react-dom';

var fname = "Harsh";
var lname = "Ved";
var date = new Date();

ReactDOM.render(
  <>
    <h1>{`My name is ${fname} ${lname}`}</h1>
    <p>Current Date is {date.toLocaleDateString()}</p>
    <p>Current Time is {date.toLocaleTimeString()}</p>
  </>, 
  document.getElementById('root')
);