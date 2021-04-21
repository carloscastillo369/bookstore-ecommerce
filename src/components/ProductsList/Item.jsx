import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';

import ItemCount from '../ItemCount/ItemCount';
import Spinner from '../Spinner/Spinner';
import '../../styles/ProductsList/Item.css';

const Item = ({item}) => {
    const [stock, setStock] = useState(item.stock);
    const [buying, setBuying] = useState('');
    const initial = 1;

    const {addItem} = useContext(CartContext);
  
    const onAdd = (e, qtyToBuy) => {
        e.preventDefault();
        addItem(item, qtyToBuy);
        if (stock >= qtyToBuy) {
            setStock(stock - qtyToBuy);
            setBuying('-buying')
            setTimeout(() => {
                setBuying('')
            }, 1000)
        }
        else Swal.fire('Disminuir la cantidad de compra.')
    };
  
    return (
        <>
            <li className="col">
                <div className="item-card card h-100">
                    <Link className="item-link-image" to={`/item/${item.id}`}>
                        <img className="item-card-image" src={item.image} alt=""/>
                    </Link>
                    <div className="card-body">
                        <h5 className="item-card-brand">{item.brand}</h5>
                        <Link to={`/item/${item.id}`}>
                            <h5 className="item-card-title card-title text-primary">{item.title}</h5>
                        </Link>
                        <p className="item-card-price card-text">S/. {item.price.toFixed(2)}</p>
                        <p className="item-card-stock">Stock: {item.stock}</p>
                        <ItemCount clase='' stock={item.stock} initial={initial} onAdd={onAdd}/>
                    </div>
                </div>
            </li>
            <Spinner name={buying} text="Agregando al carrito"/>
        </>
    )
};
export default Item;