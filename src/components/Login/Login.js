import React from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../hooks/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Google } from 'react-bootstrap-icons';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const axios = require('axios');

const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const [authUser] = useAuthState(auth);

    if (authUser) {
        navigate(from, { replace: true });
    }
    const [signInWithEmailAndPassword, user, loading, passwordSignInError,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    let errorMessage;
    if (passwordSignInError || googleError) {
        errorMessage = <p className='text-danger'>Error: {passwordSignInError?.message || googleError?.message}</p>
    }


    if (loading || googleLoading) {

        return <p className='text-center vh-100 d-flex align-items-center justify-content-center'><Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></p>;
    }

    if (user || googleUser) {
        return (
            <div>
                <p>Signed In User: {user.email}</p>
            </div>
        );
    }

    const handleSignInUser = async e => {
        e.preventDefault();
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;

        signInWithEmailAndPassword(userEmail, userPassword)

        const response = await axios.post('https://powerful-stream-86951.herokuapp.com/login', { userEmail });
        console.log(response.data);
        localStorage.setItem('accessToken', response.data);
        navigate(from, { replace: true });

        e.target.reset();

    }

    return (
        <div className='login-form text-start mx-auto py-5 my-5'>
            <h2 className='text-start'>Please Login</h2>

            <Form className='my-5' onSubmit={handleSignInUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {errorMessage}
                    <Form.Control className='w-full' type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" size='small' type="submit">
                    Log In
                </Button>
            </Form>
            <p className='text-start'>Don't you have an account? Please <Link to='/register'>Register</Link > </p>
            <Row className='text-start'>
                <Col sm={true}>Or, You can use below options!</Col>
            </Row>
            <Row className='mt-2'>
                <Col sm={true}>
                    <Button onClick={() => signInWithGoogle()}><Google></Google></Button>
                </Col>
            </Row>
        </div>
    );
};

export default Login;