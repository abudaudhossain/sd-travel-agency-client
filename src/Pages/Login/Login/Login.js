import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const {googleSignIn, user, error} = useAuth();
    console.log(user);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (user.email) {
        history.replace(from);
    }

    return (
        <div className="d-flex flex-column align-items-center m-5">
            <div className="login d-flex flex-column align-items-center pt-5">
                <h1 className="title">Please Login</h1>
                <button onClick={googleSignIn} className="btn btn-warning mt-5"><i className="fab fa-google pe-5"></i>Login in With Google</button>
            </div>
            <h1>{error}</h1>
        </div>
    );
};

export default Login;