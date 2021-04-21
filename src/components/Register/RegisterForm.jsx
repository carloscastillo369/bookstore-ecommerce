import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthContext';

import '../../styles/Register/RegisterForm.css'

const RegisterForm = () => {
    const [typeInput, setTypeInput] = useState('password');
    const {createUser, error, resetError} = useContext(AuthContext);
    const {register, handleSubmit, formState: {errors}, watch } = useForm({mode: 'onBlur'});
    const password = watch("password");

    const onSubmit = (data) => {
        createUser(data.email, data.password)
        resetError()
    };

    const changeInput = () => {
        typeInput==='password'? setTypeInput('text') : setTypeInput('password')
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="formulario">
                <h4 className="formulario-title">Complete los siguientes datos para crear una cuenta.</h4>
                {error? 
                    <div className="alert alert-danger" role="alert">{error}</div> 
                    
                    : 
                    null
                }

                <div className="mb-3 input-group">
                    <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                    <input
                        className={errors.email? 'register-form-input form-input form-control is-invalid' : 'register-form-input form-input form-control is-valid'}
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
                        className={errors.password? 'register-form-input form-input form-control is-invalid' : 'register-form-input form-input form-control is-valid'}
                        autoComplete="off"
                        placeholder="Contraseña"
                        type={typeInput}
                        {...register("password", {
                            required: {value:true, message:'Por favor, ingrese su contraseña.'},
                            minLength: {value:6, message:'Ingrese mínimo 6 caracteres'},
                            maxLength: {value:15, message:'Ingrese máximo 15 caracteres'},
                            pattern: {value:/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,15}$/, message:'Para mayor seguridad el password debe estar formado por letras mayúsculas, minúsculas y números'}
                            })
                        }
                    />
                    <i onClick={changeInput} className={typeInput === "password"? "icon-password bi bi-eye-slash" : "icon-password bi bi-eye"}></i>
                    {errors.password && <div className="ms-5"> <span className="text-danger text small">{errors.password.message}</span> </div>}
                </div>

                <div className="mb-3 input-group">
                    <span className="input-group-text"><i className="bi bi-key"></i></span>
                    <input
                        className={errors.repeatPassword? 'register-form-input form-input form-control is-invalid' : 'register-form-input form-input form-control is-valid'}
                        autoComplete="off"
                        placeholder="Repita la contraseña"
                        type={typeInput}
                        {...register("repeatPassword", {
                            required: {value:true, message:'Por favor, ingrese su contraseña.'},
                            validate: value => value === password || 'Las contraseñas no coinciden'
                            })
                        }
                    />
                    <i onClick={changeInput} className={typeInput === "password"? "icon-password bi bi-eye-slash" : "icon-password bi bi-eye"}></i>
                    {errors.repeatPassword && <div className="ms-5"> <span className="text-danger text small">{errors.repeatPassword.message}</span> </div>}
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        {...register("check", {
                            required: {value:true, message:'Debe aceptar los términos y condiciones.'},
                            })
                        }
                    />
                    <label className="form-check-label">Acepto los Términos y Condiciones. Políticas de Privacidad y Compra Segura.</label>
                    {errors.check && <div className="mb-3"> <span className="text-danger text small">{errors.check.message}</span> </div>}
                </div>

                <div className="formulario-btn-container">
                    <button type="submit" className="formulario-btn-submit btn btn-primary">Crear Cuenta</button>
                </div>
            </form>
        </>
    )
};

export default RegisterForm;
