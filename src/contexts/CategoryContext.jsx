import React, { useState, useEffect } from 'react';
import { db } from '../configs/firebase';

export const CategoryContext = React.createContext();

export const CategoryProvider = ({children}) => {
    const [categorys, setCategorys] = useState([]);
    const [bgNavBar, setBgNavBar] = useState('navbar-light bg-light');

    useEffect(() => {
        db.collection('categorys').get()
        .then(query => {
            let categorys = [];
            query.forEach(doc => {
                let category = {
                    id: doc.id,
                    ...doc.data()
                };
                categorys.push(category);
            })
            setCategorys(categorys)
        })

        return setCategorys([]);
    }, []);

    //CAMBIAR EL BACKGROUND DEL MENU AL HACER SCROLL
    useEffect(() => {
        const scroll = () => {
            if (window.scrollY > 90) {
                setBgNavBar('navbar-dark bg-dark')
            } else {
                setBgNavBar('navbar-light bg-light')
            }
        };

        window.addEventListener("scroll", scroll);
        return () => {
            window.removeEventListener("scroll", scroll);
        }
    }, []);


    //CAMBIAR LOS ICONOS A FILL CUANDO ESTAN ACTIVOS
    let menuItem01 = document.getElementById('menuItem01');
    let menuItem03 = document.getElementById('menuItem03');
    let menuItem04 = document.getElementById('menuItem04');

    useEffect(()=>{
        if(menuItem01 !== null){
            let menuItem01hasClassActive = menuItem01.classList.contains('active');
            menuItem01hasClassActive?
                menuItem01.firstElementChild.classList.replace('bi-house-door', 'bi-house-door-fill')
                :
                menuItem01.firstElementChild.classList.replace('bi-house-door-fill', 'bi-house-door')
        }  
        
        if(menuItem03 !== null){
            let menuItem03hasClassActive = menuItem03.classList.contains('active');
            menuItem03hasClassActive?
                menuItem03.firstElementChild.classList.replace('bi-cart-check', 'bi-cart-check-fill')
                :
                menuItem03.firstElementChild.classList.replace('bi-cart-check-fill', 'bi-cart-check')
        }   

        if(menuItem04 !== null){
            let menuItem04hasClassActive = menuItem04.classList.contains('active');
            menuItem04hasClassActive?
                menuItem04.firstElementChild.classList.replace('bi-envelope', 'bi-envelope-fill')
                :
                menuItem04.firstElementChild.classList.replace('bi-envelope-fill', 'bi-envelope')
        }   
    });


    return (
        <CategoryContext.Provider
        value = {{
            categorys,
            bgNavBar,
        }}>
            {children}
        </CategoryContext.Provider>
    )
};