import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import CartItem from './CartItem';

const CartList = () => {
    const {itemsCart} = useContext(CartContext);

    return (
        <>
           <div className="cart-table-container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">
                                <span>#</span>
                            </th>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsCart.map((item, index) => (
                            <CartItem key={index} index={index} i={item}/>
                        ))}
                    </tbody>
                </table>
            </div> 
        </>
    )
};

export default CartList;
