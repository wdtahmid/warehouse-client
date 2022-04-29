import React, { useEffect, useState } from 'react';
import InventoryUi from '../InventoryUi/InventoryUi';

const ManageInventories = () => {


    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/manageinventories';
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])


    //delete item


    return (
        <div>
            <div className='containar-fluid py-5 bg-dark'>
                <h1 className='my-5 text-uppercase text-white'>Manage Inventoies</h1>
            </div>
            <div className='container'>
                <div className="row mt-5 mb-5">            {
                    inventories.map(inventory => <InventoryUi
                        key={inventory._id}
                        inventory={inventory}
                    ></InventoryUi>)
                }
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;