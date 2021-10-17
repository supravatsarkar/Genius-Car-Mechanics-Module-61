import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark " sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/home#services-sec">Services</Nav.Link>
                            <Nav.Link as={Link} to="/home#exparts-sec">Exparts</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Navbar.Text>
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;