import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InventoryUi from '../InventoryUi/InventoryUi';

const ManageItems = () => {

    //fetching all inventorie and showing on UI
    const [inventories, setInventories] = useState([]);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {

        async function getInvetories() {
            const url = 'https://powerful-stream-86951.herokuapp.com/manageinventories';
            const { data } = await axios.get(url)
            setInventories(data)
            setLoading(false)
        }
        getInvetories();

    }, [])


    //delete item from the database and showing rest on the UI
    const deleteThisItem = (id) => {
        const url = `https://powerful-stream-86951.herokuapp.com/manageinventories/${id}`;

        const deleteConfirm = window.confirm('Do you want to delete this item?');

        if (deleteConfirm) {

            fetch(url, {
                'method': 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = inventories.filter(i => i._id !== id)
                        setInventories(remaining);
                    }
                })

        }
    }

    return (
        <div className=''>
            <div className='containar-fluid py-5 bg-dark'>
                <h1 className='my-5 text-uppercase text-white'>Manage Items</h1>
            </div>
            {/*  <div className='container'>
                <div className="row mt-5 mb-5">            {
                    inventories.map(inventory => <InventoryUi
                        key={inventory._id}
                        inventory={inventory}
                        deleteThisItem={deleteThisItem}
                    ></InventoryUi>)
                }
                </div> */}

            <InventoryUi
                inventories={inventories}
                deleteThisItem={deleteThisItem}
                isLoading={isLoading}
            ></InventoryUi>
        </div>
    );
};

export default ManageItems;