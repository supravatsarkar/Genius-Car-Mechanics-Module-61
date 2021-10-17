import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
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

                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName} </a>
                            </Navbar.Text>
                            {
                                user.email ? <Button onClick={logOut} variant="secondary" size="sm">Logout</Button>
                                    : <Button variant="primary" size="sm">Login</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;