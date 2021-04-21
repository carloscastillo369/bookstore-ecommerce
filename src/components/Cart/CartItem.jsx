import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

import '../../styles/Cart/CartItem.css';

const CartItem = ({i, index}) => {
    const {addItem, removeItem} = useContext(CartContext);

    return (
        <>
            <tr className="cartitem">
                <th scope="row">
                    <span>{index + 1}</span>
                </th>
                <td className="col-item">
                    <Link to={`/item/${i.item.id}`}>
                        <img className="cartitem-image" src={i.item.image} alt=""/>
                    </Link>
                    <div className="cartitem-details">
                        <Link className="cartitem-text" to={`/item/${i.item.id}`}>
                            <strong>{i.item.brand}</strong>
                            <span>{i.item.title}</span>
                        </Link>
                        <div className="cartitem-btn-container">
                            <button onClick={() => {removeItem(i)}} className="btn-cartitem-delete">
                                    <i className="bi bi-trash"></i> <span>Eliminar</span> 
                            </button>
                        </div>
                    </div>
                </td>
                <td className="cartitem-price">S/. {i.item.price.toFixed(2)} </td>
                <td className="cartitem-quantity">
                    <div className="cartitem-control-quantity">
                        <button onClick={() => addItem(i.item, -1)} disabled={i.cantidad === 1} className="cartitem-btn-down btn btn-primary"> 
                            <span>-</span> 
                        </button>
                        <input 
                            className="cartitem-input-quantity form-control" 
                            type="number" 
                            value={i.cantidad}
                            disabled
                        />
                        <button onClick={() => addItem(i.item, 1)} disabled={i.cantidad === i.item.stock} className="cartitem-btn-up btn btn-primary">
                            <span>+</span>
                        </button>
                    </div>
                </td>
                <td className="col-subtotal">S/. {(i.subTotalPrice).toFixed(2)} </td>
            </tr>
        </>
    )
};

export default CartItem;