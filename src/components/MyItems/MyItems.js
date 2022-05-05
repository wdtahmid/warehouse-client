import React, { useEffect, useState } from 'react';
import auth from '../../hooks/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const axios = require('axios');

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const email = user.email;
    useEffect(() => {
        const url = `http://localhost:5000/myitems?email=${email}`;
        const getMyItems = async () => {
            await axios.get(url)
                .then(response => {
                    setMyItems(response.data);
                })
        }

        getMyItems();
    }, [email]);

    return (
        <div>
            <h2>My Items: {myItems.length}</h2>
        </div>
    );
};

export default MyItems;