import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import SocialLogin from '../SocailLogin/SocialLogin';
import toast from 'react-hot-toast';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmail = event => {
        setEmail(event.target.value)
    };

    const handlePassword = event => {
        setPassword(event.target.value)
    };



    if (user) {
        toast.success('Successfully Login!', {id: "login"});
        navigate(from, { replace: true })
    }

    const userSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <section className='signup-section'>
            <div className="container">
                <div className='row justify-content-center align-items-center vh-100 px-3 px-md-0'>
                    <div className='inner-form col-md-6 col-lg-4'>
                        <form onSubmit={userSignIn} className=''>
                            <h3 className='text-center'>Login</h3>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input onBlur={handleEmail} type="email" name="email" id="email" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input onBlur={handlePassword} type="password" name="password" id="password" required />
                            </div>

                            <small className='text-danger'>{error?.message.includes("user-not-found") && "User not found"}</small>

                            {
                                loading && <p>Loading...</p>
                            }

                            <input className='custom-btn mt-4' type="submit" value="Login" />
                            <small className='text-center d-block'>New in Ema john? <Link to='/signup' className='highlight' >Create new account</Link></small>
                        </form>
                        <SocialLogin/>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Login;