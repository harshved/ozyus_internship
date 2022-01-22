import React from 'react';
import Login from './Login/Login';
import {Routes, Route} from 'react-router-dom';

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Login/>} />
            </Routes>
        </>
    )
};

export default App;
