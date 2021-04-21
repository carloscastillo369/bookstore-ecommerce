import { useContext } from 'react';
import { CategoryContext } from '../../contexts/CategoryContext';

import Spinner from '../Spinner/Spinner';
import CardCategory from './CardCategory';

import '../../styles/Home/Categorys.css';

const Categorys = ({message}) => {
    const {categorys} = useContext(CategoryContext);

    return (
        <>
            {categorys.length === 0?
                <Spinner name="-loading" text="Cargando"/>

                :
            
                <div className="categorys-container container"> 
                    <h2 className="categorys-title">Categorias</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {categorys.map((category, index) => (
                            <CardCategory key={index} category={category}/>
                        ))}
                    </div>
                </div>
            }
        </>
    )
};

export default Categorys;