import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';

import ItemCount from '../ItemCount/ItemCount';
import FinishBuy from './FinishBuy';
import Spinner from '../Spinner/Spinner';

import '../../styles/ProductDetail/ItemDetail.css';

const ItemDetail = ({item}) => {
    const [stock, setStock] = useState(item.stock);
    const [btnFinishBuy, setBtnFinishBuy] = useState(false)
    const [buying, setBuying] = useState('')
    const initial = 1;

    const {addItem} = useContext(CartContext);
    
    const onAdd = (e, qtyToBuy) => {
        e.preventDefault();
        setBtnFinishBuy(true);
        addItem(item, qtyToBuy);
        if (stock >= qtyToBuy) {
            setStock(stock - qtyToBuy);
            setBuying('-buying')
            setTimeout(() => {
                setBuying('')
            }, 800)
        }
        else Swal.fire('Disminuir la cantidad de compra.')
    }; 

    return (
        <>
            <Link to={`/category/${item.categoryId}`}>
                <span className="itemlist-return-text">
                    <i className="bi bi-arrow-return-left"></i> 
                    {item.categoryId}
                </span>
            </Link>
            <div className="itemdetail row g-0">
                <div className="col-md-6">
                    <img className="itemdetail-image" src={item.image} alt=""/>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="itemdetail-title card-title">{item.title}</h5>
                        <p className="itemdetail-stock">Stock: {item.stock} </p>
                        <p className="itemdetail-price-text card-text"> 
                            Precio: 
                            <span className="itemdetail-price-number">S/. {item.price.toFixed(2)}</span> 
                        </p>
                        <ItemCount clase='-detail' stock={stock} initial={initial} onAdd={onAdd}/>
                        <FinishBuy state={btnFinishBuy}/>
                        <hr/>
                        <ul className="itemdetail-description-list">Detalles:
                            {item.description.map((detail,index) => (
                                <li className="itemdetail-description-item" key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Spinner name={buying} text="Agregando al carrito"/>
        </>
    )
};

export default ItemDetail;