import '../../styles/Orden/OrdenItem.css';

const OrdenItem = ({orderItem}) => {
    return (
        <>
            {orderItem.length === 0? 
            
                null
                
                : 
                
                <>
                    {orderItem.map((item, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{item.title}</td>
                            <td>
                                <span className="orden-price">{item.price.toFixed(2)}</span> 
                            </td>
                            <td>
                                <span className="orden-cantidad">{item.cantidad}</span> 
                            </td>
                            <td>
                                <span className="orden-subtotal">{item.subTotalPrice.toFixed(2)}</span>
                            </td>
                        </tr>
                    ))}
                </>
            }
        </>
    )
};

export default OrdenItem;