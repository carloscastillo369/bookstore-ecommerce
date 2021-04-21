import { useState, useEffect } from 'react';
import { db } from '../../configs/firebase';

import OrdenItem from './OrdenItem';
import '../../styles/Orden/OrdenTable.css';

const OrdenTable = ({ordenId}) => {
    const [orderItem, setOrderItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [currentDate, setCurrentDate] = useState([]);

    useEffect(() => {
        if(ordenId){
            db.collection('orders').doc(`${ordenId}`).get()
            .then(doc => {
              let order = {
                id: doc.id,
                ...doc.data()
              };
              let ordenItems = order.orden.items;
              let totalPrice = order.orden.total;
              let date = order.orden.date;
              setOrderItem(ordenItems);
              setTotalPrice(totalPrice);
              setCurrentDate(date);
            }
        )}
    }, [ordenId])


    const fireBaseTime = new Date( currentDate.seconds * 1000 + currentDate.nanoseconds / 1000000 );
    const date = fireBaseTime.toDateString();
    const atTime = fireBaseTime.toLocaleTimeString();


    return (
        <>
            <h5 className="orden-date">Fecha: {date} - Hora: {atTime}</h5>
            <table className="table table-hover">
                <thead>
                    <tr className="table-primary">
                        <th scope="col-1">#</th>
                        <th scope="col-3">Producto</th>
                        <th scope="col-3">Precio (S/.)</th>
                        <th scope="col-1">Cantidad</th>
                        <th scope="col-4">Subtotal (S/.)</th>
                    </tr>
                </thead>
                <tbody>
                    <OrdenItem orderItem={orderItem} date={date} atTime={atTime} />
                </tbody>
                <tfoot>
                    <tr>
                        <th className="orden-total-text" colSpan="4">Total a pagar (S/.)</th>
                        <th> 
                            <span className="orden-total-pay">{totalPrice.toFixed(2)}</span>
                        </th>
                    </tr>
                </tfoot>
            </table>    
        </>
    )
};

export default OrdenTable;
