import firebase from 'firebase/app';
import 'firebase/firestore';

import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import { db } from '../../configs/firebase';


import OrdenTable from './OrdenTable';
import Spinner from '../Spinner/Spinner';
import '../../styles/Orden/Orden.css';

const Orden = (orden) => {
    const [ordenId, setOrdenId] = useState();

    const {itemsCart, afterPayment} = useContext(CartContext);

    useEffect(()=>{
        if (!ordenId) {
            db.collection("orders")
            .add(orden)
            .then((res)=>{
                setOrdenId(res.id)
                const stampsToUpdate = db.collection('products')
                    .where(firebase.firestore.FieldPath.documentId(), 'in', itemsCart.map((i) => i.id));
        
                const updateStock = async () => {
                    const query = await stampsToUpdate.get();
                    const batch = db.batch();
                    query.docs.forEach((docSnapshot, idx) => {
                    batch.update(docSnapshot.ref, {
                        stock: docSnapshot.data().stock - itemsCart[idx].cantidad,
                        inistock: docSnapshot.data().inistock - itemsCart[idx].cantidad,
                    });
                    });
                    batch.commit();
                };
        
                updateStock();
                afterPayment();
            })
            .catch((error)=>{
                console.log(error)
            })
        } 
    },[ordenId, itemsCart, orden, afterPayment])

    const Imprimir = () => {
        window.print()
    };

    return (
        <>
            {ordenId?
                <>
                    <div className="orden">
                        <h2 className="orden-title">Gracias por su compra!</h2>
                        <div className="orden-container">
                            <h5 className="orden-text">Orden de compra código:  
                                <span className="orden-number text-primary"> {ordenId}</span>
                            </h5>
                            
                            <button onClick={Imprimir} className="orden-btn-printer btn btn-outline-primary">
                                <i className="bi bi-printer"></i> Imprimir
                            </button>
                        </div>

                        <div className="group-products">
                            <OrdenTable ordenId={ordenId}/>
                        </div>
                        <Link className="navbar-brand" to="/home">
                            <i className="bi bi-reply-fill"></i>
                            <img className="logo" src={'/images/logo/logo.png'} alt=""/>
                        </Link>
                    </div>
                </>

                :

                <Spinner name="-buying" text='Procesando su Compra'/>
            }
        </>)
}

export default Orden;