import React, { useState } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import LogIn from './LogIn';
import { AuthContextProvider } from '../context/AuthContext';
//reikes route'u

const Main = () => 
{
    return(
        <>
        <AuthContextProvider>
        <Router>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<LogIn/>}/>
            </Routes>
        </Router>
        </AuthContextProvider>
        </>
    )
}

export default Main