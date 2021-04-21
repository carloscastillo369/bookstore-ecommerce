import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';

const BlockedRoute = ({component: Component, ...rest}) => {
    const {currentUser} = useContext(AuthContext);
    const {qtyCart} = useContext(CartContext);
    return (
        <Route
            {...rest}
            render = {props => {
                return !currentUser? 
                    <Component {...props}/> 
                    
                    : 
                    
                    <> 
                        {qtyCart===0? 
                            <Redirect to="/home"/> 
                        
                            : 
                        
                            <Redirect to="/payment"/>
                        }
                    </>
            }}
        />
    )
};

export default BlockedRoute;