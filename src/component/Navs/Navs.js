import React from "react";
import "./Navs.css";
import {  Navbar,Nav, Container } from 'react-bootstrap';
import logo from '../img/logo.png';


const Navs = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} title='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">about us</Nav.Link>
                        <Nav.Link href="#home">Explore Foods</Nav.Link>
                        <Nav.Link href="#home">Reviews</Nav.Link>
                        <Nav.Link href="#link">FAQ</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="namber">2345648210</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



export default Navs;








