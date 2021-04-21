import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';

import HomePage from './views/HomePage';
import ProductsListPage from './views/ProductsListPage';
import ProductDetailPage from './views/ProductDetailPage';
import CartPage from './views/CartPage';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import PaymentPage from './views/PaymentPage';
import PrivateRoute from './routes/PrivateRoute';
import BlockedRoute from './routes/BlockedRoute';
import PageNotFound from './views/PageNotFound';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


const App = () => {
    return (
        <>
            <Router>
                <ScrollToTop/>
                <CartProvider>
                    <AuthProvider>
                        <Switch>
                            <Redirect exact from="/" to="/home"/>
                            <BlockedRoute path="/login" component={LoginPage}/>
                            <BlockedRoute path="/register" component={RegisterPage}/>
                            <PrivateRoute path="/payment" component={PaymentPage}/>
                            <Route path="/cart" component={CartPage}/>
                            <Route path="/item/:id" component={ProductDetailPage}/>
                            <Route path="/category/:categoryId" component={ProductsListPage}/>
                            <Route path="/allproducts" component={ProductsListPage}/>
                            <Route path="/home" component={HomePage}/>
                            <Route component={PageNotFound}/>
                        </Switch>
                    </AuthProvider>
                </CartProvider>
            </Router>
        </>
    )
};

export default App;