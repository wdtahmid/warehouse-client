import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import InventoryUi from '../InventoryUi/InventoryUi';

const ManageInventories = () => {

    const navigate = useNavigate();
    const addNewItem = () => {
        navigate('/additem')
    }

    //fetching all inventorie and showing on UI
    const [inventories, setInventories] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {

        async function getInvetories() {

            const url = 'https://powerful-stream-86951.herokuapp.com/manageinventories';

            const recievedInventories = await axios.get(url)
            setInventories(recievedInventories.data);
            setLoading(false);

        }

        getInvetories()


    }, [])


    console.log(isLoading);
    //delete item from the database and showing rest on the UI
    const deleteThisItem = (id) => {
        const url = `https://powerful-stream-86951.herokuapp.com/manageinventories/${id}`;

        fetch(url, {
            'method': 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const deleteConfirm = window.confirm('Do you want to delete this item?');
                    if (deleteConfirm) {
                        const remaining = inventories.filter(i => i._id !== id)
                        setInventories(remaining);
                    }
                }
            })

    }

    return (
        <div className='my-5'>
            <div className='containar-fluid py-5 bg-dark'>
                <h1 className='mt-5 text-uppercase text-white'>Manage Inventoies</h1>
                <Button onClick={addNewItem} variant="outline-info" className='mb-5 mt-2'>Add New Item</Button>
            </div>
            <InventoryUi
                inventories={inventories}
                isLoading={isLoading}
                deleteThisItem={deleteThisItem}
            ></InventoryUi>
        </div>
    );
};

export default ManageInventories;