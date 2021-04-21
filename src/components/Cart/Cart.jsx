import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import CartList from './CartList';
import CartSummary from './CartSummary';

import '../../styles/Cart/Cart.css';

const Cart = () => {
    const {qtyCart, clear} = useContext(CartContext);

    return (
        <>
            <div className="cart container">
                <h1 className="cart-title text-primary"> 
                    <i className="bi bi-cart4"> 
                        &nbsp;
                        Carrito de Compras ({qtyCart} artículo<span>{qtyCart > 1? 's' : null}</span>)
                    </i> 
                </h1>
                <div className="cart-container row row-cols-1 row-cols-md-2 g-5">
                    <div className="cart-content col-md-9">
                        <CartList/>
                        <div className="cart-btn-container">
                            <button onClick={clear} className="btn btn-danger">
                                Vaciar Carrito
                            </button>
                        </div>
                    </div>
                    <CartSummary/>
                </div>
            </div>
        </>
    )
};

export default Cart;