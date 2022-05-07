import React, { useEffect, useState } from 'react';
import auth from '../../hooks/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const axios = require('axios');

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const email = user.email;
    const navigate = useNavigate();
    useEffect(() => {

        const getMyItems = async () => {
            const url = `https://powerful-stream-86951.herokuapp.com/myitems?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setMyItems(data)
                /* .then(response => {
                    setMyItems(response.data);
                    console.log(response.data);
                }) */
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }

        }
        getMyItems();


    }, [email, navigate]);

    const deletFromMyItems = async (id) => {

        const deleteMyItem = window.confirm('Are you sure to delete this item?');
        if (deleteMyItem) {
            const url = `https://powerful-stream-86951.herokuapp.com/myitems/${id}`;

            await axios.delete(url)
                .then(response => {
                    if (response.data.deletedCount === 1) {
                        const restItems = myItems.filter(item => item._id !== id);
                        setMyItems(restItems);
                    }
                })

        } else {
            return;
        }
    }

    return (
        <div className='mb-5'>
            <div className='containar-fluid py-5 bg-dark'>
                <h1 className='my-5 text-uppercase text-white'>My Items</h1>
            </div>
            <div className='col col-md-10 offset-md-1 my-5'>
                <Table striped bordered hover>

                    <thead>
                        <tr>
                            <th>No:</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myItems.map((item, index) =>

                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td className='text-start'>{item.productName}</td>
                                    <td>${item.productPrice}</td>
                                    <td>{item.quantity} Pcs</td>
                                    <td><Button onClick={() => deletFromMyItems(item._id)}>Delete</Button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
            </div>

        </div >
    );
};

export default MyItems;