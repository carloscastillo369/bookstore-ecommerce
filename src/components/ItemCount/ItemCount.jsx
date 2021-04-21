import { useState } from 'react';

import '../../styles/ItemCount/ItemCount.css';

const ItemCount = ({stock, initial, onAdd, clase}) => {
    const [contador, setContador] = useState(initial);

    const handleChange = (e) => {
        e.preventDefault();
        setContador(Number(e.target.value));
        if (Number(e.target.value) > stock) {
            setContador(stock);
        }
        if (Number(e.target.value) < 1) {
            setContador(1);
        }
    };

    const handleUD = (e) => {
        e.preventDefault();
        if (e.target.innerText === '-') {
            setContador(contador - 1);
        };
        if (e.target.innerText === '+') {
            setContador(contador + 1);
        }
    };

    return (
        <>
            {stock === 0? 
                <h5 className={`itemcount-sinstock${clase}`}>SIN STOCK</h5> 
                
                : 
            
                <form className={`itemcount-contador${clase}`}>
                    <div className={`contador${clase}`}>
                        <button type="button" className={`btn-down${clase} btn btn-light`} onClick={(e) => handleUD(e)} disabled={contador <= 1}>-</button>
                        <input
                            className={`contador-input${clase} form-control`}
                            type="number" 
                            value={contador}
                            onChange={(e) => handleChange(e)}
                        />
                        <button type="button" className={`btn-up${clase} btn btn-light`} onClick={(e) => handleUD(e)} disabled={contador >= stock}>+</button>
                    </div>
                    <button type="button" className={`btn-add${clase} btn btn-success`} onClick={(e) => onAdd(e,contador)}>
                        <i className={`btn-add-icon${clase} bi bi-cart4`}></i>
                        <span className={`btn-add-text${clase}`}>Agregar</span>
                    </button>
                </form>
            }
        </>
    )
};

export default ItemCount;