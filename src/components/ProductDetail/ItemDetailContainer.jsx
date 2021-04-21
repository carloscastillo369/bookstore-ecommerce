import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

import ItemDetail from './ItemDetail';
import Spinner from '../Spinner/Spinner';

import '../../styles/ProductDetail/ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [item, setItem] = useState();

    const {id} = useParams();
    const {products} = useContext(CartContext);

    useEffect(() => {
        products.forEach(product => {
            if(product.id === id) {
                setItem(product)
            }
        })
    }, [id, products])

    return (
        <>
             <div className="itemdetailcontainer container">
                {item?
                    <ItemDetail item={item}/>
 
                    : 
                    
                    <Spinner name="-loading" text="Cargando"/> 
                }
            </div>
        </>
    )
};

export default ItemDetailContainer;