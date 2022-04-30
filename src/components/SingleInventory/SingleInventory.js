import React, { useEffect, useState } from 'react';
import { Button, Card, Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleInventory = () => {

    const { id } = useParams();

    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [id])

    const handleDeliverd = () => {
        console.log('Deliverd');
    }
    return (
        <div>
            <div className='containar-fluid py-5 bg-dark'>
                <h1 className='mt-5 text-uppercase text-white'>{inventory.productName}</h1>
                <Button onClick={handleDeliverd} variant="outline-info" className='mb-5 mt-2'>Deliverd This Item</Button>
            </div>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <img className='img-fluid' src={inventory.image} alt="" />
                    </div>
                    <div className='col-lg-7 text-start mt-4'>
                        <Stack direction='horizontal' gap={3}>
                            <Card.Subtitle as='h5'>Price: ${inventory.productPrice}</Card.Subtitle>
                            {'|'}
                            <Card.Subtitle as='h5'>Stock: {inventory.quantity} Pcs</Card.Subtitle>
                            {'|'}
                            <Card.Subtitle as='h5'>Supplier: {inventory.supplier}</Card.Subtitle>
                        </Stack>
                        <p className='mt-5 lh-lg'>{inventory.description}</p>
                        <Button onClick={handleDeliverd} variant="outline-info" className='mb-5 mt-2'>Deliverd This Item</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleInventory;