import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthContext';

import '../../styles/Login/LoginForm.css';

const LoginForm = () => {
    const [typeInput, setTypeInput] = useState('password');
    const {signIn, signInWithGoogle, signInWithFacebook, error, resetError} = useContext(AuthContext);
    const {register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) => {
        signIn(data.email, data.password)
        resetError()
    };

    const changeInput = () => {
        typeInput==='password'? setTypeInput('text') : setTypeInput('password')
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}  className="formulario">
                <h4 className="formulario-title">Complete los siguientes campos para iniciar sesión.</h4>
                {error? 
                    <div className="alert alert-danger" role="alert">{error}</div> 
                    
                    : 
                    null
                }

                <div className="mb-3 input-group">
                    <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                    <input
                        className={errors.email? 'login-form-input form-input form-control is-invalid' : 'login-form-input form-input form-control is-valid'}
                        autoComplete="off"
                        placeholder="Email"
                        {...register("email", {
                            required: {value:true, message:'Por favor, ingrese su dirección de correo electrónico.'},
                            pattern: {value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message:'Por favor, ingrese una dirección de correo electrónico válida (p.e. someone@example.com).'}
                            })
                        }
                    />
                    {errors.email && <div className="ms-5"> <span className="text-danger text small">{errors.email.message}</span> </div>}
                </div>

                <div className="mb-3 input-group">
                    <span className="input-group-text"><i className="bi bi-key"></i></span>
                    <input
                        className={errors.password? 'login-form-input form-input form-control is-invalid' : 'login-form-input form-input form-control is-valid'}
                        autoComplete="off"
                        placeholder="Password"
                        type={typeInput}
                        {...register("password", {
                            required: {value:true, message:'Por favor, ingrese su contraseña.'},
                            })
                        }
                    />
                    <i onClick={changeInput} className={typeInput === "password"? "icon-password bi bi-eye-slash" : "icon-password bi bi-eye"}></i>
                    {errors.password && <div className="ms-5"> <span className="text-danger text small">{errors.password.message}</span> </div>}
                </div>

                <div className="formulario-btn-container">
                    <button type="submit" className="formulario-btn-submit btn btn-danger">
                        Continuar
                    </button>
                    <button onClick={signInWithFacebook} type="submit" className="formulario-btn-submit btn btn-facebook">
                        <i className="bi bi-facebook"></i>
                        &nbsp;&nbsp;Continuar con Facebook
                    </button>
                    <button onClick={signInWithGoogle} type="submit" className="formulario-btn-submit btn btn-google">
                        <i className="bi bi-google"></i>
                        &nbsp;&nbsp;Continuar con Google
                    </button>
                </div>
            </form>
        </>
    )
};

export default LoginForm;
