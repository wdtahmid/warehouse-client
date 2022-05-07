import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import InventoryUiHome from '../../InventoryUiHome/InventoryUiHome';

const InventorySection = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/manageinventories';
        const getTheInventory = async () => {

            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            try {
                const { data } = await axios.get(url)
                setInventories(data);

            }
            catch (error) {
                console.error(error);
            }
        }
        getTheInventory();
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