import { Link } from 'react-router-dom';

import '../../styles/PageNotFound/NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className="page-not-found container">
                <i className="bi bi-emoji-frown"></i>
                <h1 className="NotFound-text"> 404 - No se encontró la página</h1>
                <Link to="/home">
                    <p className="back-home">
                        <i className="bi bi-reply"></i>
                        &nbsp; Regrese al Home
                    </p>
                </Link>
            </div>
        </>
    )
}

export default NotFound;
