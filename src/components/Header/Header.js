import "./Header.css";
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/Logo.svg"

const Header = () => {
    return (
        <Navbar className="header-nav" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <li className="nav-item">
                        <a href="./order" className="nav-link nav-item-link">Order</a>
                    </li>
                    <li className="nav-item">
                        <a href="./order" className="nav-link nav-item-link">Order Review</a>
                    </li>
                    <li className="nav-item">
                        <a href="./order" className="nav-link nav-item-link">Manage Inventory</a>
                    </li>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;