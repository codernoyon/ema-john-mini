import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const goSignUP = () => {
        navigate('/signup')
    }
    return (
        <section className='signup-section'>
            <div className="container">
                <div className='row justify-content-center align-items-center vh-100 px-5 px-md-0'>
                    <div className='inner-form col-md-6 col-lg-4'>
                        <h3 className='text-center'>Login</h3>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        
                        <input className='custom-btn mt-4' type="submit" value="Login" />
                        <small className='text-center d-block'>New in Ema john? <span  onClick={goSignUP} className='highlight' >Create new account</span></small>
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

export default Login;