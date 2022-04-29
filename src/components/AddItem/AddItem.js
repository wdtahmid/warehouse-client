import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItem = () => {
    const [success, setSuccess] = useState('')

    const handleInsetInventory = event => {
        event.preventDefault();

        const productName = event.target.productName.value;
        const productPrice = event.target.productPrice.value;

        const inventories = {
            productName,
            productPrice
        }

        const url = 'http://localhost:5000/additem';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(inventories)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('the item has benn added successfully!')
                }
            })
        console.log(inventories);
    }
    return (
        <div className='w-25 mx-auto mt-5'>
            <h2>Add item</h2>

            <Form onSubmit={handleInsetInventory}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="productName" name='productName' placeholder="Product Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="number" name='productPrice' placeholder="Product Price" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Insert This Product
                </Button>
            </Form>

            <p>{success}</p>
        </div>
    );
};

export default AddItem;