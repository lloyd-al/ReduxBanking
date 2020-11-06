import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAuth } from '../actions/AuthActions'

const Auth = () => {
    const [isLoggedIn, setAuth] = useState("");
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth)

    const handleLogin = () => {
        dispatch(toggleAuth());
    };

    return (
        <div>
            <button onClick={handleLogin} className="btn btn-info">{auth.isLoggedIn? "logout" : "login"}</button>
        </div>
    );
}

export default Auth;