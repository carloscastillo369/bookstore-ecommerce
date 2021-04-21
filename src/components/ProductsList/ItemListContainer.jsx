import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

import ItemList from './ItemList';
import Spinner from '../Spinner/Spinner';
import Pagination from './Pagination';
import '../../styles/ProductsList/ItemListContainer.css';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8; //PAGINATION - CANTIDAD DE PRODUCTOS POR PÁGINA

    const {categoryId} = useParams();
    const {products} = useContext(CartContext);

    useEffect(() => {
        setCurrentPage(1);
        let showProducts = products.filter( product => categoryId? product.categoryId === categoryId : products );
        setItems(showProducts);
    },[categoryId, products]);

    //PAGINATION
    const qtyPages = Math.ceil(items.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = items.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const movePage = (number) => {
        setCurrentPage(currentPage + number);
    };

    return (
        <>
            <div className="itemlistcontainer container">
                {items.length === 0? 
                    <Spinner name="-loading" text="Cargando"/> 
                    
                    :
                    
                    <>
                        <ItemList items={currentProducts} category={categoryId} />
                        <Pagination currentPage={currentPage} qtyPages={qtyPages} paginate={paginate} movePage={movePage}/>
                    </>
                }
            </div>
        </>
    )
};

export default ItemListContainer;