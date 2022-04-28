import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';

import auth from '../../Firebase/Firebase.init';
import SocialLogin from '../SocailLogin/SocialLogin';
import toast from 'react-hot-toast';
import PageTitle from '../PageTitle/PageTitle';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePasseword = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        toast.success('Successfully Signup!', {id: "signup"});
        navigate(from, { replace: true })
    }

    const createUser = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Password did not matched");
            return;
        }
        if (password.length < 6) {
            setError("Password must be 6 characters or longer");
            return;
        }

        await createUserWithEmailAndPassword(email, password)
    }

    return (
        <section className='signup-section mt-5'>
            <PageTitle title={"Signup"}></PageTitle>
            <div className="container">
                <div className='row justify-content-center align-items-center vh-100 px-3 px-md-0'>
                    <div className="inner-form col-md-6 col-lg-4">
                        <form onSubmit={createUser} className=''>
                            <h3 className='text-center'>Sign Up</h3>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input onBlur={handleEmail} type="email" name="email" id="email" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input onBlur={handlePasseword} type="password" name="password" id="password" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input onBlur={handleConfirmPassword} type="password" name="confirmPassword" id="confirmPassword" required />
                                <small className='text-danger d-block'>
                                    {error}
                                </small>

                            </div>
                            <input className='custom-btn mt-4' type="submit" value="Sign Up" />
                            <small className='text-center d-block'>Already have an account? <Link to='/login' className='highlight'>Login</Link></small>
                        </form>
                        <SocialLogin/>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SignUp;