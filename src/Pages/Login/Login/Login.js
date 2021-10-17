import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';
const Login = () => {

    const { signUsingGoogle, user, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location?.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signUsingGoogle()
            .then(resutl => {
                history.push(redirect_url);
            })
            .catch(error => {

            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div>
            <h2 className="text-warning ">Please Login</h2>
            <div onClick={handleGoogleSignIn} className="btn btn btn-warning mt-3">Sign In With Google</div>
        </div>
    );
};

export default Login;