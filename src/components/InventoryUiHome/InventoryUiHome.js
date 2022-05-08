import React from 'react';
import { Button, Card, CardGroup, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InventoryUiHome = ({ inventories, updateThisItem, isLoading }) => {
    const navigate = useNavigate();

    const goToSingleInventory = (id) => {
        navigate(`/inventory/${id}`)
    }

    return isLoading ? <div className='vh-100 d-flex align-items-center justify-content-center'><Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner></div> : (
        <div className='row'>
            {
                inventories.map(inventory =>
                    <CardGroup className='col-lg-4 col-md-6 mt-4' bg='light'>
                        <Card border='info' className='pt-4'>
                            <Card.Title>{inventory.productName}</Card.Title>
                            <Card.Img variant="top" src={inventory.image} />
                            <Card.Body>
                                <Card.Text as='h5'>Price: ${inventory.productPrice}</Card.Text>
                                <Card.Text>Stock: {inventory.quantity} Pcs</Card.Text>
                                <Card.Text>Supplier: {inventory.supplier}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button onClick={() => goToSingleInventory(inventory._id)} className='w-100'>Update</Button>
                            </Card.Footer>
                        </Card>
                    </CardGroup>

                )
            }

            {/* <CardGroup className='col-lg-4 col-md-6 mt-4' bg='light'>
                <Card border='info' className='pt-4'>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Text as='h5'>Price: ${productPrice}</Card.Text>
                        <Card.Text>Stock: {quantity} Pcs</Card.Text>
                        <Card.Text>Supplier: {supplier}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => goToSingleInventory(inventory._id)} className='w-100'>Update</Button>
                    </Card.Footer>
                </Card>
            </CardGroup> */}
        </div >
    );
};

export default InventoryUiHome;