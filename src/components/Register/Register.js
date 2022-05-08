import React, { useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import auth from '../../hooks/firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Facebook, Google } from 'react-bootstrap-icons';

const Register = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [termsError, setTermsError] = useState('');

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, verifyError] = useSendEmailVerification(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (user || googleUser) {
        navigate(from, { replace: true });
    }

    let errorEle;

    if (error || verifyError || googleError) {
        errorEle = <p>{error?.message}</p>
    }

    if (loading || googleLoading) {
        return <p className='text-center vh-100 d-flex align-items-center justify-content-center'><Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></p>;
    }



    const handleUserRegister = (event) => {
        event.preventDefault();

        const checkBox = event.target.checkbox.checked;

        if (!checkBox) {
            setTermsError("Please accept the termse and conditions.");
        }
        else if (checkBox) {
            setTermsError('');
            const userEmail = event.target.email.value;
            const userPassword = event.target.password.value;
            createUserWithEmailAndPassword(userEmail, userPassword);
            sendEmailVerification(userEmail);
            toast('Please verify your email.')

        }
        else {
            return;
        }

        event.target.reset();

    }



    return (
        <div className='register-form text-start py-5 mt-5'>
            <h2 className='my-2 ps-2'>Please Register</h2>

            <Form className='my-5' onSubmit={handleUserRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <p className='text-danger'>{errorEle}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='checkbox' label='Accept terms and conditions.' />
                    <p className='text-danger'>{termsError}</p>
                </Form.Group>
                <Button variant="primary" size='small' type="submit">
                    Register
                </Button>
            </Form>
            <p className='pt-2'>Already have an account? Please <Link to='/login'>Sign In</Link > </p>
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

export default Register;