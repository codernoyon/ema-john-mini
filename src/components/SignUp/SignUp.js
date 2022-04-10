import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    const navigate = useNavigate();
    const goLogin = () => {
        navigate('/login')
    }
    return (
        <section className='signup-section mt-5'>
            <div className="container">
                <div className='row justify-content-center align-items-center vh-100 px-3 px-md-0'>
                    <div className='inner-form col-md-6 col-lg-4'>
                        <h3 className='text-center'>Sign Up</h3>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" />
                        </div>
                        <input className='custom-btn mt-4' type="submit" value="Sign Up" />
                        <small className='text-center d-block'>Already have an account? <span onClick={goLogin} className='highlight'>Login</span></small>
                        <small className='other-methods'>or</small>
                        <div className="google-signin mt-3">
                            <button className='btn d-flex align-align-items-center'><FcGoogle className='google-icon me-5' /> Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;