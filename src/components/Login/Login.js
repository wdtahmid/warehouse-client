import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../hooks/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {

    const [user] = useAuthState(auth);
    const [
        signInWithEmailAndPassword,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSignInUser = e => {
        e.preventDefault();

        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;

        signInWithEmailAndPassword(userEmail, userPassword)
        if (user) {
            return (
                <div>
                    <p>Signed In User: {user.email}</p>
                </div>
            );
        }
        e.target.reset();

    }



    return (
        <div className='w-25 mx-auto text-start mt-5'>
            <h2>Please Login</h2>
            <Form onSubmit={handleSignInUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        <p>{user?.email}</p>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" size='small' type="submit">
                    Submit
                </Button>
            </Form>
            <p>{error?.message}</p>
        </div>
    );
};

export default Login;