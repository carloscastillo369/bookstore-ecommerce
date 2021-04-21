import '../../styles/Footer/Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer row row-cols-1 row-cols-md-3 g-3">
                <div className="col">
                    <img className="footer-logo" src={"/images/logo/logodark.png"} alt=""/>
                </div>
                <div className="col">
                    <h2 className="footer-title-headers">Contactanos:</h2>
                    <ul>
                        <li className="footer-subtitle-text">
                            <i className="bi bi-telephone"></i>
                                &nbsp; (51) 349-7573
                        </li>
                        <li className="footer-subtitle-text">
                            <i className="bi bi-whatsapp"></i>
                                &nbsp; 999-777-333
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h2 className="footer-title-headers">Siguenos:</h2>
                    <ul>
                        <li className="footer-subtitle-text">
                            <i className="bi bi-facebook"></i>&nbsp; facebook/bookstore
                        </li>
                        <li className="footer-subtitle-text">
                            <i className="bi bi-instagram"></i>&nbsp; BookStore-Oficial
                        </li>
                    </ul>
                    
                </div>  
            </div>
        </>
    )
}

export default Footer
