import "./Header.css";
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/Logo.svg"
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
    return (
        <Navbar className="header-nav" variant='dark' expand="lg" fixed="top">
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
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;