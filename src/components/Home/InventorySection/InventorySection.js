import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InventoryUiHome from '../../InventoryUiHome/InventoryUiHome';

const InventorySection = () => {
    const [inventories, setInventories] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const url = 'https://powerful-stream-86951.herokuapp.com/manageinventories';
        const getTheInventory = async () => {
            try {
                const { data } = await axios.get(url)
                setInventories(data);
                setLoading(false);
            }
            catch (error) {
                console.error(error);
            }
        }
        getTheInventory();
    }, [])

    return (
        <div className='container'>
            <InventoryUiHome
                inventories={inventories}
                isLoading={isLoading}
            ></InventoryUiHome>
        </div>
    );
};

export default InventorySection;