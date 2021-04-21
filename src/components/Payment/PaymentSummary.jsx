import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import SummaryCartItems from './SummaryCartItems';

import '../../styles/Payment/PaymentSummary.css';

const PaymentSummary = () => {
    const {itemsCart, qtyCart, totalPriceCart} = useContext(CartContext)

    return (
        <>
            <div className="payment-summary col-md-4">
                <h3 className="payment-summary-title">Resumen de mi orden</h3>
                <p className="payment-summary-qtyItems">{qtyCart} artículo<span>{qtyCart > 1? "s" : null}</span></p>
                <div className="payment-summary-listItems">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemsCart.map((item, index) => (
                                <SummaryCartItems key={index} i={item}/>
                            ))}
                        </tbody>
                    </table>
                </div> 
                <div>
                    <h3 className="payment-summary-total">
                        Total: &nbsp;
                        <span className="payment-summary-price">S/. {totalPriceCart.toFixed(2)}</span> 
                    </h3>
                </div>
            </div>
        </>
    )
}

export default PaymentSummary
