
import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const axios = require('axios').default;

const SingleInventory = () => {

    const params = useParams();
    const paramsId = params.id;

    const [inventory, setInventory] = useState({});
    // const [deliverd, setDeliverd] = useState(1)


    useEffect(() => {
        const url = `http://localhost:5000/inventory/${paramsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [paramsId]);


    const deliverQuantity = async () => {
        const updatedQuantity = parseInt(inventory.quantity) - 1;
        const url = `http://localhost:5000/inventory-deliverd/${paramsId}`;
        const inventories = {
            productName: inventory.productName,
            image: inventory.image,
            price: inventory.productPrice,
            quantity: updatedQuantity,
            supplier: inventory.supplier,
            inventory: inventory.description
        }
        try {
            await axios.put(url, inventories)
                .then(response => {
                    if (response.data.modifiedCount === 1) {
                        toast("Deliverd one item")
                    }
                    console.log(response);
                })

        }

        catch (error) {
            console.error(error);
        }

        try {
            const response = await axios.get(`http://localhost:5000/inventory/${paramsId}`);
            setInventory(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const insertStock = async (event) => {
        event.preventDefault();
        const stockQuantity = parseInt(event.target.restock.value);
        if (stockQuantity > 0) {
            const paramsId = params.id;
            const url = `http://localhost:5000/inventory-restock/${paramsId}`;
            const restockInventories = {
                productName: inventory.productName,
                image: inventory.image,
                price: inventory.productPrice,
                quantity: parseInt(inventory.quantity) + parseInt(stockQuantity),
                supplier: inventory.supplier,
                inventory: inventory.description
            };

            try {
                await axios.put(url, restockInventories)
                    .then(res => {
                        if (res.data.modifiedCount === 1) {
                            toast('This item restocked!')
                        }
                    })
            }
            catch (error) {
                console.log(error);
            }

            try {
                const response = await axios.get(`http://localhost:5000/inventory/${paramsId}`);
                setInventory(response.data);
            } catch (error) {
                console.error(error);
            }

        } else {
            console.log('Please enter a valid number');
        }
        event.target.reset()
    }
    return (
        <div>
            <div className='containar-fluid py-5 bg-dark'>
                <h1 className='mt-5 text-uppercase text-white'>{inventory.productName}</h1>
                <Button onClick={() => deliverQuantity(inventory._id)} variant="outline-info" className='mb-5 mt-2'>Delivered</Button>
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
                        <Form onSubmit={insertStock}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="number" name='restock' placeholder="Restock Quantity" />
                            </Form.Group>
                            <Button variant="outline-info" type='submit' className='mb-5 mt-2'>Restock This Item</Button>
                        </Form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleInventory;