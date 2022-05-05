import React, { useState } from 'react';
import { Accordion, Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import { ArrowRepeat, Truck, Wifi } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../../src/images/banner/banner-1.jpg';
import banner2 from '../../../src/images/banner/banner2.jpg';
import InventorySection from './InventorySection/InventorySection';

const Home = () => {
    const [index, setIndex] = useState(0);

    const navigate = useNavigate();
    const goToManageInventory = () => {
        navigate('/manageinventories')
    }
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-start'>
                        <h1>welcome to smart world</h1>
                        <h3>We'r happy that you here!!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-start'>
                        <h1>keep up to date..</h1>
                        <h3>We're providing latest gadget!!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <Container className='py-5'>
                    <h1 className='text-primary'>Brouse Our Stock</h1>
                    <InventorySection></InventorySection>
                </Container>
            </div>
            <div className='py-5 bg-light'>
                <Button onClick={goToManageInventory}>Manage Inventories</Button>
            </div>
            <Container className='py-5'>
                <h2>We Ensure</h2>
                <Row>
                    <Col md={true}>
                        <div className='p-5'>
                            <Wifi className='text-primary' size={36}></Wifi>
                            <h5 className='my-3'>Online Order</h5>
                            <p>We are making your life very easy and joyful.You can brouse our inventory from any whaer and You are able to order online.</p>
                        </div>

                    </Col>
                    <Col md={true}>
                        <div className='p-5'>
                            <Truck className='text-primary' size={36}></Truck>
                            <h5 className='my-3'>Free Shipping</h5>
                            <p>We are making your life very easy and joyful.You can brouse our inventory from any whaer and You are able to order online.</p>
                        </div>
                    </Col>
                    <Col md={true}>
                        <div className='p-5'>
                            <ArrowRepeat className='text-primary' size={36}></ArrowRepeat>
                            <h5 className='my-3'>Money Back Guaranty</h5>
                            <p>We are making your life very easy and joyful.You can brouse our inventory from any whaer and You are able to order online.</p>
                        </div>
                    </Col>

                </Row>
            </Container>
            <Container fluid className='bg-light py-5'>
                <h2 className='mb-5'>Frequently Ask Qyestions</h2>
                <Row>
                    <Container>
                        <Col className='col-md-6 offset-md-3'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Container>

                </Row>
            </Container>
        </div >

    );
};

export default Home;