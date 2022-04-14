import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import { FcGoogle } from "react-icons/fc";
import auth from '../../Firebase/Firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePasseword = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

    if(user){
        navigate("/shop")
    }

    const createUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Password did not matched");
            return;
        }
        if (password.length < 6) {
            setError("Password must be 6 characters or longer");
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <section className='signup-section mt-5'>
            <div className="container">
                <div className='row justify-content-center align-items-center vh-100 px-3 px-md-0'>
                    <form onSubmit={createUser} className='inner-form col-md-6 col-lg-4'>
                        <h3 className='text-center'>Sign Up</h3>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" name="email" id="email" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasseword} type="password" name="password" id="password" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input onBlur={handleConfirmPassword} type="password" name="confirmPassword" id="confirmPassword" required />
                            <small className='text-danger d-block'>
                                {error}
                            </small>
                        
                        </div>
                        <input className='custom-btn mt-4' type="submit" value="Sign Up" />
                        <small className='text-center d-block'>Already have an account? <Link to='/login'  className='highlight'>Login</Link></small>
                        <small className='other-methods'>or</small>
                        <div className="google-signin mt-3">
                            <button className='btn d-flex align-align-items-center'><FcGoogle className='google-icon me-5' /> Continue with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;