import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

import RegisterForm from './RegisterForm';

import '../../styles/Register/Register.css';

const Register = () => {
    const {resetError} = useContext(AuthContext);

    return (
        <>
            <div className="register container">
                <div className="form-container container">
                    <Link to="/home"><img src={'/images/logo/logo.png'} alt=""/></Link>
                    <RegisterForm/>
                    <p className="register-text">¿Ya tienes cuenta?
                        <Link onClick={resetError} to="/login">
                            &nbsp;<span className="login-link">Ingresar</span> 
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
};

export default Register;