import React, { useEffect, useState } from 'react';
import InventoryUi from '../../InventoryUi/InventoryUi';
import InventoryUiHome from '../../InventoryUiHome/InventoryUiHome';

const InventorySection = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/manageinventories';
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])


    return (
        <div>
            <div className="row mt-5 mb-5">            {
                inventories.slice(0, 6).map(inventory => <InventoryUiHome
                    key={inventory._id}
                    inventory={inventory}
                ></InventoryUiHome>)
            }
            </div>
        </div>
    );
};

export default InventorySection;