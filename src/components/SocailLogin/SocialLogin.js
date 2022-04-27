import { FcGoogle } from "react-icons/fc";
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../Firebase/Firebase.init";
import Loading from "../Loading/Loading";
import { useLocation, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        await signInWithGoogle();
    };

    if (user) {
        toast.success('Successfully Login!', {id: "login"});
        navigate(from, { replace: true })
    }

    if (loading) {
        return <Loading />
    }

    if(error){
        toast.error(error?.message || 'someting went wrong', {id: 'eror'})
    }


    return (
        <div>
            <small className='other-methods'>or</small>
            <div className="google-signin mt-3">
                <button onClick={handleGoogleSignIn} className='btn d-flex align-align-items-center'><FcGoogle className='google-icon me-5' /> Continue with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;