import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className='py-5 bg-dark text-white'>
            <Row>
                <Col md={true}>
                    <h4>Footer Col One</h4>
                </Col>
                <Col md={true}> <h4>Footer Col Two</h4></Col>
                <Col md={true}> <h4>Footer Col Three</h4></Col>
            </Row>
            <Row>
                <Col>Copyright</Col>

            </Row>
        </Container>
    );
};

export default Footer;