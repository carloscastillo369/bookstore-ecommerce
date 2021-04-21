import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

import '../../styles/Cart/CartSummary.css';

const CartSummary = () => {
    const {totalPriceCart} = useContext(CartContext);

    return (
        <>
            <div className="cartsummary col-md-3">
                <h3 className="cartsummary-title">Resumen</h3>
                <table className="cartsummary-table table">
                    <tbody>
                        <tr>
                            <th>
                                <h4 className="cartsummary-subtotal-text">SubTotal:</h4>
                            </th>
                            <td>
                                <h4 className="cartsummary-subtotal-price">S/ {totalPriceCart.toFixed(2)}</h4>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <h4 className="cartsummary-total-text">Total:</h4>
                            </th>
                            <td>
                                <h4 className="cartsummary-total-price">S/ {totalPriceCart.toFixed(2)}</h4>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/payment">
                    <button className="btn-Pay btn btn-success">
                        <i className="bi bi-credit-card"></i>&nbsp;&nbsp; Ir a Pagar
                    </button>
                </Link>
                <Link to="/home">
                    <button className="btn-Home btn btn-outline-primary">
                        <i className="bi bi-list-check"></i>&nbsp;&nbsp; Seguir Comprando
                    </button>
                </Link>
            </div> 
        </>
    )
};

export default CartSummary;