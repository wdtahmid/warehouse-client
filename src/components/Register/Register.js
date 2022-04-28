import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../hooks/firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {

    const [errorMessage, setErrorMessage] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    const handleUserRegister = (event) => {
        event.preventDefault();

        const userEmail = event.target.email.value;
        const userPassword = event.target.password.value;

        createUserWithEmailAndPassword(userEmail, userPassword)

        event.target.reset();
    }



    return (
        <div className='w-25 mx-auto text-start mt-5'>
            <h2 className='my-2'>Please Register</h2>
            <Form onSubmit={handleUserRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <p className='text-danger'>{error?.message}</p>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" size='small' type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;