import { Link } from 'react-router-dom';

import '../../styles/ProductDetail/FinishBuy.css';

const FinishBuy = ({state}) => (
    <>
        {state? 
            <div className="btn-container">
                <Link to="/cart">
                    <button className="btn-terminar-compra btn btn-outline-secondary">
                        <i className="bi bi-cart-check"></i>&nbsp; Terminar Compra
                    </button> 
                </Link>

                <Link to="/allproducts">
                    <button className="btn-seguir-comprando btn btn-outline-primary">
                        <i className="bi bi-list-check"></i>&nbsp; Seguir Comprando
                    </button>
                </Link>
            </div>    
            : 
            
            null
        }
    </>
);

export default FinishBuy;