import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {


    return (
        <Container fluid className='pt-5 px-5 bg-dark text-white text-start'>
            <Row>
                <Col md={true}>
                    <h4>About Us</h4>
                    <p>We are the smart warhouse for stocking your smart phones and gadhets.</p>
                </Col>
                <Col md={true}> <h4>Site Map</h4>
                    <nav className='d-flex flex-column'>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/blogs'}>Blogs</Link>
                        <Link to={'/aboutus'}>About Us</Link>
                        <Link to={'/manageinventories'}>Manage Inventories</Link>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </nav>
                </Col>
                <Col md={true}> <h4>Contact</h4>
                    <Button>tahmidr49@gmail.com</Button>
                </Col>
            </Row>
            <Row className='mt-5 p-3 text-center bg-primary bg-opacity-25'>
                <Col>Copyright &copy; {new Date().getFullYear()}. All rights reserved by Smart Warehouse</Col>
            </Row>
        </Container>
    );
};

export default Footer;