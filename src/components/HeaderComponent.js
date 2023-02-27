import React, {Component, useState} from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import '../App.css';
import {NavLink} from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { auth } from '../firebase'
import { signOut } from "firebase/auth";
import { UserAuth } from '../context/AuthContext';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { IoLogOutSharp } from "react-icons/io5";
import { FaPalette } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

export default function Header()
{

    const logout = async () => {
        await signOut(auth);
    };
    const user = UserAuth().user;
    console.log(user)

    

    return(
        <Navbar expand="md" className='p-0 bg-light'>
            <Nav navbar className='align-items-center justify-content-center'>
                <NavLink className='p-0'>
                <NavbarBrand className='ms-5'>
                    <NavLink to="/"><img src="assets/images/logo1.png" height="100" width="100" className='mr-auto pointer logo'></img></NavLink>
                </NavbarBrand>
                </NavLink>
                <NavItem >
                <NavLink className='nav-link fs-2 ms-4 ps-5 text-prim' to="/">Home</NavLink>
                </NavItem>
                <NavItem >
                <NavLink className='nav-link fs-2 ms-4 ps-5 text-prim' to="/">Shop</NavLink>
                </NavItem>
                <NavItem >
                <NavLink className='nav-link fs-2 ms-4 ps-5 text-prim' to="/">About</NavLink>
                </NavItem>
            </Nav>

            <Nav navbar>
                
                <NavItem>
                    {user && (
                         <UncontrolledDropdown>
                         <DropdownToggle className='me-5 fs-3 text-prim icon' color="transparent">
                           Hi, {user.email}
                         </DropdownToggle>
                         <DropdownMenu>
                            <div className='d-flex'>
                           <DropdownItem className='icon'><FaPalette size={'2em'}/></DropdownItem>
                           <DropdownItem className='icon'><IoIosSettings size={'2em'}/></DropdownItem>
                           <DropdownItem divider />
                           <DropdownItem className='icon' onClick={logout}><IoLogOutSharp size={'2em'}/></DropdownItem>
                           </div>
                         </DropdownMenu>
                       </UncontrolledDropdown>
                    
                    )}
                    {!user && (
                    <NavLink to="/login"><Button color="transparent loginbutton" className='me-5 fs-3 text-prim icon' ><FaUser className='mb-2 me-2'></FaUser>Login</Button></NavLink>
                    )}
                </NavItem>
            </Nav>
        </Navbar>
    )

}
