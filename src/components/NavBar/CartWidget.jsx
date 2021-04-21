import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

import '../../styles/NavBar/CartWidget.css';

const CartWidget = () => {
    const {qtyCart} = useContext(CartContext);

    return (
        <>
            {qtyCart === 0? 
                <div className="icon-container nav-link">
                    <i className="icon-image bi bi-cart-x"></i>
                </div>
                : 
                <NavLink id="menuItem03" className="icon-container nav-link" to="/cart">
                    <i className="icon-image bi bi-cart-check"></i>
                    <div className="qtyItems-cart">
                        <span>{qtyCart}</span>
                    </div>
                </NavLink>}
        </>   
    )
};
    
export default CartWidget;