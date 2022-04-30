import React, { useState } from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
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
                    <h1 className='text-info'>Brouse Our Stock</h1>
                    <InventorySection></InventorySection>
                </Container>
            </div>
            <div className='py-5 bg-light'>
                <Button onClick={goToManageInventory}>Manage Inventories</Button>
            </div>
        </div >

    );
};

export default Home;