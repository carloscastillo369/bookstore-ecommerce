import { useContext } from 'react';
import { CategoryContext } from '../../contexts/CategoryContext';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, NavLink } from 'react-router-dom';

import CartWidget from './CartWidget';

import '../../styles/NavBar/NavBar.css';

const Menu = () => {
    const {categorys, bgNavBar} = useContext(CategoryContext);
    const {currentUser, signOut} = useContext(AuthContext);

    return (
        <>
            <nav id="navbar" className={`navbar navbar-expand-lg ${bgNavBar} fixed-top`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        <img className="logo" src={'/images/logo/logo.png'} alt=""/>    
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item">
                                <NavLink id="menuItem01" exact activeClassName="active" className="icon-container nav-link" aria-current="page" to="/home">
                                    <i className="icon-image bi bi-house-door"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <p className="icon-container nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="icon-image bi bi-collection"></i>
                                </p>
                                <ul  className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                    {categorys.map((category, index) => (
                                        <li key={index}>
                                            <Link className="dropdown-item" to={`/category/${category.key}`}>
                                                <span className="category-name">{category.name}</span>
                                            </Link>
                                        </li> 
                                    ))}
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><Link className="dropdown-item" to="/allproducts">Todos los Productos</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <CartWidget/>
                            </li>
                            <li className="nav-item">
                                <NavLink id="menuItem04" className="icon-container nav-link" to="/contact">
                                    <i className="icon-image bi bi-envelope"></i>
                                </NavLink>
                            </li>

                            {!currentUser?
                                <>
                                    <li className="nav-item">
                                        <Link className="button-container nav-link" to="/login">
                                            <button className="btn btn-primary">
                                                <i className="bi bi-lock">&nbsp; Inicia Sesión</i>
                                            </button>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                    <Link className="button-container nav-link-register" to="/register">
                                        <button className="btn btn-danger">
                                            <i className="bi bi-pen">&nbsp; Registrarse</i>
                                        </button>
                                    </Link>
                                    </li>
                                </>

                                :

                                <li className="nav-item dropdown">
                                    <p  className="icon-container nav-link dropdown-toggle" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="icon-image bi bi-person-circle"></i>
                                    </p>
                                    <ul  className="user-dropdown dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown2">
                                        <li>
                                            <span 
                                                className={currentUser.displayName === null? "dropdown-item" : "user-capitalize dropdown-item"}
                                            >
                                                    Usuario: {currentUser.displayName === null? currentUser.email : currentUser.displayName}
                                            </span>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="">
                                                <span>Mis compras</span>
                                            </Link>
                                        </li> 
                                        <li><hr className="dropdown-divider"></hr></li>
                                        <li>
                                            <Link className="button-container dropdown-item" to="/home">
                                                <span onClick={signOut}>
                                                    <i className="bi bi-unlock">
                                                        &nbsp; Cerrar Sesión
                                                    </i>
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>    
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav> 
        </>
    )
};

export default Menu;