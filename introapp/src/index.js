import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var fname = "Harsh";
var lname = "Ved";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";

// const heading = {
//   color: 'red',
//   textAlign: 'center',
//   fontWeight: 'bold',
//   margin: '50px 0px',
//   fontFamily: "'The Nautigal', 'cursive'",
// }

ReactDOM.render(
  <>
    <h1 style={{color: 'red',textAlign: 'center',fontWeight: 'bold',margin: '50px 0px',fontFamily: "'The Nautigal', 'cursive'"}}>{`My name is ${fname} ${lname}`}</h1>
    <div className='img_div'>
      <img src={img1} alt="Random Images"/> 
      <img src={img2} alt="Random Images"/> 
      <a href="" target="_a">
        <img src={img3} alt="Random Images"/> 
      </a>
    </div>
  </>, 
  document.getElementById('root')
);   