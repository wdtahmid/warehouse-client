import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

const InventoryUiHome = ({ inventory, updateThisItem }) => {

    const { productName, image, productPrice, quantity, supplier } = inventory;


    return (
        <div className='col-lg-3 col-md-6'>
            <CardGroup bg='light' className='mt-4'>
                <Card border='info' className='pt-4'>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Text as='h5'>Price: ${productPrice}</Card.Text>
                        <Card.Text>Stock: {quantity} Pcs</Card.Text>
                        <Card.Text>Supplier: {supplier}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => updateThisItem(inventory._id)} className='w-100'>Update</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div >
    );
};

export default InventoryUiHome;