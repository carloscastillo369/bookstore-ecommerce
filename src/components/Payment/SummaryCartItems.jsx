import '../../styles/Payment/SummaryCartItems.css';

const SummaryCartItems = ({i}) => {
    return (
        <>
            <tr>
                <td className="summaryItem-product">
                    <img className="summaryItem-image" src={i.item.image} alt=""/>
                    <div>
                        <p className="summaryItem-title">{i.item.title}</p>
                        <p className="summaryItem-cantidad">Cantidad: {i.cantidad}</p>
                    </div>
                </td>
                <td className="summaryItem-subTotal">S/. {(i.subTotalPrice).toFixed(2)} </td>
            </tr>
        </>
    )
};

export default SummaryCartItems;
