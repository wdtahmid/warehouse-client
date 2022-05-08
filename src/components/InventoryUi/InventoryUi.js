import React from 'react';
import { Button, Card, CardGroup, Spinner } from 'react-bootstrap';


const InventoryUi = ({ inventories, deleteThisItem, isLoading }) => {




    return isLoading ? <div className='vh-100 d-flex align-items-center justify-content-center'><Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner></div> : (
        <div className='container my-5'>
            <div className='row'>
                {
                    inventories.map(inventory =>
                        <CardGroup className='col-lg-3 col-md-6 mt-4' key={inventory._id} bg='light'>
                            <Card border='info' className='pt-4'>
                                <Card.Title>{inventory.productName}</Card.Title>
                                <Card.Img variant="top" src={inventory.image} />
                                <Card.Body>
                                    <Card.Text as='h5'>Price: ${inventory.productPrice}</Card.Text>
                                    <Card.Text>Stock: {inventory.quantity} Pcs</Card.Text>
                                    <Card.Text>Supplier: {inventory.supplier}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button onClick={() => deleteThisItem(inventory._id)} className='w-100'>Delete</Button>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    )
                }
            </div>

        </div >
    );
};

export default InventoryUi;