import { Link } from 'react-router-dom';

import '../../styles/Cart/EmptyCart.css';

const EmptyCart = () => (
    <>
        <div className="cart-empty">
            <h1 className="cart-empty-text">Su carrito de compras está vacío.</h1>
            <i className="bi bi-cart-x"></i>
            <p className="cart-empty-go-home">
                Vuelva al &nbsp;
                <Link to="/home">
                    Home &nbsp;
                </Link> 
                para adquirir uno de nuestros productos.
            </p>
        </div>
    </>
);

export default EmptyCart;