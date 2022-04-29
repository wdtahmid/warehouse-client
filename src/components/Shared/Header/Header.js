import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../hooks/firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Mobile Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/aboutus">Aboute Us</Nav.Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            {user
                                ?

                                <div>
                                    <NavDropdown.Divider />
                                    <Button onClick={logOut}>Sign Out</Button>
                                </div>
                                :

                                <div>
                                    <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to="/">Separated link</NavDropdown.Item>
                                </div>}


                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;