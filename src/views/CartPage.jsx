import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import NavBar from '../components/NavBar/NavBar';
import CartList from '../components/Cart/Cart';
import EmptyCart from '../components/Cart/EmptyCart';
import Footer from '../components/Footer/Footer';

const Cart = () => {
    const {itemsCart} = useContext(CartContext);

    return (
        <>
            <NavBar/>
            {itemsCart.length > 0? 
                <CartList/> 
                
                : 
                
                <EmptyCart/>
            }
            <Footer/>
        </>
    )
};

export default Cart;