import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handleEmail = event => {
        setEmail(event.target.value)
    };

    const handlePassword = event => {
        setPassword(event.target.value)
    };



    if (user) {
        navigate("/shop")
    }

    const userSignIn = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password)
    }
    
    return (
        <section className='signup-section'>
            <div className="container">
                <div className='row justify-content-center align-items-center vh-100 px-3 px-md-0'>
                    <form onSubmit={userSignIn} className='inner-form col-md-6 col-lg-4'>
                        <h3 className='text-center'>Login</h3>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" name="email" id="email" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="password" id="password" required/>
                        </div>

                        <small className='text-danger'>{error?.message.includes("user-not-found") && "User not found"}</small>
                        
                        {
                            loading && <p>Loading...</p>
                        }

                        <input className='custom-btn mt-4' type="submit" value="Login" />
                        <small className='text-center d-block'>New in Ema john? <Link to='/signup'  className='highlight' >Create new account</Link></small>
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

export default Login;