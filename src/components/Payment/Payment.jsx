import firebase from 'firebase/app';
import 'firebase/firestore';

import { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { AuthContext } from '../../contexts/AuthContext';

import PaymentForm from './PaymentForm'
import PaymentSummary from './PaymentSummary'
import Orden from '../Orden/Orden';

import '../../styles/Payment/Payment.css';

const Payment = () => {
    const [orden, setOrden] = useState();

    const {itemsCart, totalPriceCart} = useContext(CartContext);
    const {currentUser} = useContext(AuthContext);

    //ENVIAMOS SOLO LA INFORMACION NECESARIA DE LOS ITEMS DEL CART
    let sendItems = []
    itemsCart.forEach(i => {
        let sendItem = {
            id: i.id,
            title: i.item.title,
            price: i.item.price,
            cantidad: i.cantidad,
            subTotalPrice: i.subTotalPrice
        }
        sendItems.push(sendItem);
    });

    const sendData = (data)=>{
        const newOrden = {
            buyer: {
                name: data.name,
                lastname: data.lastName,
                phone: data.phone,
                email: currentUser.email
            },
            items: sendItems,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPriceCart  
        };
        setOrden(newOrden);
    };

    return (
        <>
            <div className="payment-container">
                {!orden?
                    <div className="row row-cols-1 row-cols-md-2 g-3 d-flex justify-content-center">
                        <PaymentForm sendData={sendData}/>
                        <PaymentSummary/>
                    </div>

                    :

                    <Orden orden={orden}/>
                }
            </div>
        </>
    )
}

export default Payment
