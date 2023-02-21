import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import '../App.css';
import {NavLink} from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { auth } from '../firebase'
import { UserAuth } from '../context/AuthContext';



export default function Header()
{
    
    const user = UserAuth().user;
    console.log(user)

    

    return(
        <Navbar expand="md" className='p-0 bg-light'>
            <Nav navbar className='align-items-center justify-content-center'>
                <NavLink className='p-0'>
                <NavbarBrand className='ms-5'>
                    <img src="assets/images/logo1.png" height="100" width="100" className='mr-auto pointer logo'></img>
                </NavbarBrand>
                </NavLink>
                <NavItem >
                <NavLink className='nav-link fs-2 ms-4 ps-5 text-prim' to="/">Home</NavLink>
                </NavItem>
                <NavItem >
                <NavLink className='nav-link fs-2 ms-4 ps-5 text-prim' to="/login">Shop</NavLink>
                </NavItem>
                <NavItem >
                <NavLink className='nav-link fs-2 ms-4 ps-5 text-prim' to="/signup">About</NavLink>
                </NavItem>
            </Nav>

            <Nav navbar>
                <NavItem>
                    {user && (
                    <NavLink className='nav-link text-prim fs-2 me-5'>Hi, {user.email}</NavLink>
                    )}
                    {!user && (
                    <NavLink to="/login"><Button color="transparent loginbutton" className='me-5 fs-3 text-prim icon' ><FaUser className='mb-2 me-2'></FaUser>Login</Button></NavLink>
                    )}
                </NavItem>
            </Nav>
        </Navbar>
    )

}
