import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

const InventoryUi = ({ inventory, deleteThisItem }) => {

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
                        <Button onClick={() => deleteThisItem(inventory._id)} className='w-100'>Delete</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div >

        // <div className='col-lg-4 col-md-6'>
        //     <div className='border m-1 rounded-1 shadow text-lg-start text-center d-lg-flex d-md-block text-md-center justify-content-md-center justify-content-start'>
        //         <div>
        //             <img style={{ 'width': '200px' }} src={image} alt="" />
        //         </div>
        //         <div>

        //             <h4>{productName}</h4>
        //             <p>Price: ${productPrice}</p>
        //             <p>Stock: {quantity} Pcs</p>
        //             <p>Supplier: {supplier}</p>
        //         </div>
        //     </div>
        // </div>


    );
};

export default InventoryUi;