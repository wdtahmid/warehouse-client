import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../hooks/firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth)

    const handleInsetInventory = event => {
        event.preventDefault();

        const productName = event.target.productName.value;
        const productPrice = event.target.productPrice.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const email = user?.email;

        const inventories = {
            productName,
            productPrice,
            image,
            description,
            quantity,
            supplier,
            email
        }

        const url = 'https://powerful-stream-86951.herokuapp.com/additem';
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
                    toast('The item has benn added successfully!')
                }
            })
        event.target.reset();
    }
    return (
        <div className='mb-5'>
            <div className='containar-fluid py-5 bg-dark'>
                <h1 className='my-5 text-uppercase text-white'>Add New Item</h1>
            </div>
            <div className='w-25 mx-auto mt-5'>

                <Form onSubmit={handleInsetInventory}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="productName" name='productName' placeholder="Product Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="number" name='productPrice' placeholder="Product Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" name='image' placeholder="Image URl" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control as="textarea" name='description' row='4' placeholder="A short description fo product" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="number" name='quantity' placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" name='supplier' placeholder="Supplier Name" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add This Product
                    </Button>
                </Form>

                <ToastContainer></ToastContainer>
            </div>
        </div>

    );
};

export default AddItem;