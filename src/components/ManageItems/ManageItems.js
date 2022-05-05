import React, { useEffect, useState } from 'react';
import InventoryUi from '../InventoryUi/InventoryUi';

const ManageItems = () => {//fetching all inventorie and showing on UI
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/manageinventories';
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])


    //delete item from the database and showing rest on the UI
    const deleteThisItem = (id) => {
        const url = `http://localhost:5000/manageinventories/${id}`;

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
        <div>
            <div className='containar-fluid py-5 bg-dark'>
                <h1 className='mt-5 text-uppercase text-white'>Manage Items</h1>
            </div>
            <div className='container'>
                <div className="row mt-5 mb-5">            {
                    inventories.map(inventory => <InventoryUi
                        key={inventory._id}
                        inventory={inventory}
                        deleteThisItem={deleteThisItem}
                    ></InventoryUi>)
                }
                </div>
            </div>
        </div>
    );
};

export default ManageItems;