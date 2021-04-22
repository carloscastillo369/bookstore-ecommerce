import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm';

import '../../styles/Login/Login.css';

const Login = () => {
    const {resetError} = useContext(AuthContext);

    return (
        <>
            <div className="login container">              
                <div className="form-container container">
                    <Link to="/home"><img src={'/images/logo/logo.png'} alt=""/></Link>
                    <p className="login-text">Inicia sesión en BookStore o 
                        <Link onClick={resetError} to="/register">
                            &nbsp;<span className="register-link">crea una cuenta</span> 
                        </Link>
                    </p>
                    <LoginForm/>
                </div>
            </div>
        </>
    )
};

export default Login;
