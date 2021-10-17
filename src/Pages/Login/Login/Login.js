import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signUsingGoogle } = useAuth();
    return (
        <div>
            <h2 className="text-warning ">Please Login</h2>
            <div onClick={signUsingGoogle} className="btn btn btn-warning mt-3">Sign In With Google</div>
        </div>
    );
};

export default Login;