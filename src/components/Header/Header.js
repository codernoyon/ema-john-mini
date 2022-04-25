import "./Header.css";
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/Logo.svg"
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user] = useAuthState(auth);
    
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar className="header-nav d-block" variant='dark' expand="lg" fixed="top">
            <Container>
                <Navbar.Brand >
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <CustomLink className="nav-item-link" to='/shop'>Shop</CustomLink>
                    <CustomLink className="nav-item-link ms-lg-3" to='/order'>Order Review</CustomLink>
                    <CustomLink className="nav-item-link ms-lg-3" to='/inventory'>Manage Inventory</CustomLink>
                        {
                            user ? <div>
                                <button className="btn btn-warning m-0 p-0 px-3 ms-lg-3 mb-1 mb-lg-0 d-block d-lg-inline">{user.email}</button>
                                <button onClick={handleSignOut} className='btn btn-danger py-0 ms-lg-3'>Sign Out</button>
                            </div>
                            :
                            <CustomLink className="nav-item-link ms-lg-3" to='/login'>Login</CustomLink>
                        }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;