import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark " sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home" className="fs-3 fw-bolder text-warning" >Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home" className="text-warning">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services-sec" className="text-warning">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#exparts-sec" className="text-warning">Experts</Nav.Link>
                            <Nav.Link as={HashLink} to="/services/addService" className="text-warning">Add Service</Nav.Link>
                            <Nav.Link as={HashLink} to="/serviceManage" className="text-warning">Service Manage</Nav.Link>

                            {user?.displayName && <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName} </a>
                            </Navbar.Text>}
                            {
                                user.email ? <Button onClick={logOut} variant="warning" size="sm">Logout</Button>
                                    : <Link to="/login"><Button variant="warning" size="sm">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;