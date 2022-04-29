import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItem = () => {
    return (
        <div>
            <h2>Add item</h2>

            <Form>
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
        </div>
    );
};

export default AddItem;