import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, NavLink, Button } from 'reactstrap';
import '../App.css';
import { FaUser } from "react-icons/fa";

function Header()
{
    return(
        <Navbar expand="md" className='p-0 bg-light'>
            <Nav navbar className='align-items-center justify-content-center'>
                <NavLink className='p-0'>
                <NavbarBrand className='ms-5'>
                    <img src="assets/images/logo1.png" height="100" width="100" className='mr-auto pointer logo'></img>
                </NavbarBrand>
                </NavLink>
                <NavItem >
                <NavLink className='nav-link fs-2 ms-4 ps-5 text-prim'>Home</NavLink>
                </NavItem>
                <NavItem >
                <NavLink className='nav-link fs-2 ms-4 ps-5 text-prim'>Shop</NavLink>
                </NavItem>
                <NavItem >
                <NavLink className='nav-link fs-2 ms-4 ps-5 text-prim'>About</NavLink>
                </NavItem>
            </Nav>

            <Nav navbar>
                <NavItem>
                    <Button color="transparent loginbutton" className='me-5 fs-3 text-prim icon'><FaUser className='mb-2 me-2'></FaUser>Login</Button>
                </NavItem>
            </Nav>
        </Navbar>
    )

}
export default Header