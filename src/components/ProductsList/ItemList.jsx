import { Link } from 'react-router-dom';

import Item from './Item';
import '../../styles/ProductsList/ItemList.css'

const ItemList = ({items, category}) => (
    <>
        <Link to="/home">
            <span className="itemlist-return-text">
                <i className="bi bi-arrow-return-left"></i> 
                Home
            </span>
        </Link>
        <h1 className="itemlist-title">{category? category : 'Nuestros productos'}</h1>
        <ul className="row row-cols-1 row-cols-md-4 g-3">
            {items.map((item,index) => (
                <Item key={index} item={item}/>
            ))}
        </ul>
    </>
);

export default ItemList;