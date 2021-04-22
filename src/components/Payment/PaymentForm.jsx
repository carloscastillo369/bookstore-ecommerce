import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form';

import '../../styles/Payment/PaymentForm.css';

const PaymentForm = ({sendData}) => {
    const {currentUser} = useContext(AuthContext);
    const {register, handleSubmit, setValue, formState: {errors} } = useForm();

    if(currentUser.displayName !== null){
        const infoUser = currentUser.displayName.split(" ");
        setValue("name", infoUser[0])
        setValue("lastName", infoUser[1])
    }
   
    return (
        <>
            <div className="payment-form-container col-md-7">
                <h3 className="payment-personal-data">Datos Personales</h3>
                <form onSubmit={handleSubmit(sendData)} className="payment-form row">
                    <h4 className="payment-form-title">Ingrese los siguientes datos para validar su orden de compra.</h4>

                    <div className="mb-3 input-group col">
                        <input
                            className={errors.name? 'payment-form-input form-input form-control is-invalid' : 'payment-form-input form-input form-control is-valid'}
                            autoComplete="off"
                            placeholder="Nombre"
                            {...register("name", {
                                required: {value:true, message:'Por favor, ingrese su nombre.'},
                                minLength: {value:3, message:'Ingrese mínimo 3 caracteres'},
                                maxLength: {value:15, message:'Ingrese máximo 15 caracteres'},
                                pattern: {value:/^[A-Za-z ñ]+$/i, message:'Formato incorrecto, ingrese solo letras'}
                                })
                            }
                        />
                        {errors.name && <div className="ms-2"> <span className="text-danger text small">{errors.name.message}</span> </div>}
                    </div>

                    <div className="mb-3 input-group col">
                        <input
                            className={errors.lastName? 'payment-form-input form-input form-control is-invalid' : 'payment-form-input form-input form-control is-valid'}
                            autoComplete="off"
                            placeholder="Apellido"
                            {...register("lastName", {
                                required: {value:true ,message:'Por favor, ingrese su apellido.'},
                                minLength: {value:3, message:'Ingrese mínimo 3 caracteres'},
                                maxLength: {value:20, message:'Ingrese máximo 20 caracteres'},
                                pattern: {value:/^[A-Za-z ñ]+$/i, message:'Formato incorrecto, ingrese solo letras'}
                                })
                            }
                        />
                        {errors.lastName && <div className="ms-2"> <span className="text-danger text small">{errors.lastName.message}</span> </div>}
                    </div>

                    <div className="mb-3 input-group col">
                        <input
                            className={errors.phone? 'payment-form-input form-input form-control is-invalid' : 'payment-form-input form-input form-control is-valid'}
                            autoComplete="off"
                            placeholder="Teléfono"
                            type="number"
                            {...register("phone", {
                                required: {value:true, message:'Por favor, ingrese su número de teléfono o celular.'},
                                min: {value:111111111, message:'Ingrese un número de 9 dígitos'},
                                max: {value:999999999, message:'Ingrese un número de 9 dígitos'},
                                })
                            }
                        />
                        {errors.phone && <div className="ms-2"> <span className="text-danger text small">{errors.phone.message}</span> </div>}
                    </div>

                    <div className="payment-btn-container">
                        <button type="submit" className="payment-btn btn btn-success">
                            <i className="bi bi-credit-card"></i>
                            &nbsp;&nbsp; Pagar
                        </button>
                    </div>
                </form>
            </div>    
        </>
    )
};

export default PaymentForm;
