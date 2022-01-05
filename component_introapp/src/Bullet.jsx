import React from "react";
import Calculator, { add, div, mul, sub } from './Calculator';

function Bullet(){
    return (
        <ol>
            <li>Addition is         : {add(30,3)}</li>
            <li>Substraction is     : {sub(30,3)}</li>
            <li>Division is         : {div(40,3).toFixed(2)}</li>
            <li>Multiplication is   : {mul(30,3)}</li>
        </ol>
    );
}

export default Bullet;