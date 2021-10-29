import React from 'react';
import "./Login.css"

const Login = () => {
    return (
        <div className="d-flex flex-column align-items-center m-5">
            <div className="login d-flex flex-column align-items-center pt-5">
                <h1 class="title">Please Login</h1>
                <button className="btn btn-warning mt-5"><i class="fab fa-google pe-5"></i>Login in With Google</button>
            </div>
        </div>
    );
};

export default Login;