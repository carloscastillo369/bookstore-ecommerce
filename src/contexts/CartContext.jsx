import React, { useState, useEffect } from 'react';
import { db } from '../configs/firebase';
import Swal from 'sweetalert2';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [products, setProducts] = useState([]); //SE ALMACENA TODA LA COLECCION PRODUCTS DESDE FIRESTORE
    const [itemsCart, setItemsCart] = useState([]); //SE ALMACENA LOS ITEMS DEL CART
    const [qtyCart, setQtyCart] = useState(0); //SE ALMACENA LA CANTIDAD DE ITEMS DEL CART
    let [totalPriceCart, setTotalPriceCart] = useState(0); //PRECIO TOTAL 
    const [stateCart, setStateCart] = useState(false); //ESTADO SI EL CART ESTA VACIO

    //OBTENER LOS PRODUCTOS DESDE FIRESTORE
    useEffect(()=>{
        const getProducts = db.collection('products').get()
        .then(query => {
            let products = [];
            query.forEach(doc => {
                let product = {
                    id: doc.id,
                    ...doc.data()
                };
                products.push(product);
            }) 
            setProducts(products)
        })
        .catch((error)=>{
            console.log("Error searching items", error);
        })

        // CADA VEZ QUE SE INICIE LA APP SE CREARAN LAS LLAVES CARRITO, CANTIDAD Y PRECIO
        localStorage.carrito ? setItemsCart(JSON.parse(localStorage.carrito)) : localStorage.setItem('carrito', [])
        localStorage.cantidad ? setQtyCart(JSON.parse(localStorage.cantidad)) : localStorage.setItem('cantidad', [])
        localStorage.precio ? setTotalPriceCart(JSON.parse(localStorage.precio)) : localStorage.setItem('precio', [])

        return getProducts;
    }, []);

    //ACTUALIZA EL LOCAL STORAGE ANTE CUALQUIER CAMBIO EN EL ITEMSCART, CANTIDAD, PRECIO-TOTAL
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(itemsCart));
        localStorage.setItem('cantidad', JSON.stringify(qtyCart));
        localStorage.setItem('precio', JSON.stringify(totalPriceCart));
    });

    //AGREGAR UN PRODUCTO AL CARRITO
    const addItem = (item, quantity) => {
        products.forEach(product => {
            if(product.id === item.id){
                product.stock -= quantity; 
            }
        })
        const listProducts = itemsCart.filter((i) => i.id === item.id);
        if(listProducts.length === 0){
            setItemsCart([
                ...itemsCart,
                {
                    id: item.id,
                    item: item,
                    cantidad: quantity,
                    subTotalPrice: quantity*item.price
                }
            ]);
            setTotalPriceCart(totalPriceCart += quantity*item.price);
        } else if(listProducts.length === 1){
            itemsCart.forEach(i => {
                if (i.id === item.id) {
                    i.cantidad += quantity;
                    i.subTotalPrice = i.cantidad*item.price
                }
            });
            let totalPrice = 0;
            itemsCart.forEach(i=>{
                totalPrice += i.subTotalPrice;
            });
            setTotalPriceCart(totalPrice);
        }

        setQtyCart(qtyCart + quantity);
        setStateCart(true);
    };

    //ELIMINAR UN PRODUCTO DEL CARRITO
    const removeItem = (item) => {
        let qtyBackToStock = item.cantidad;
        const newItemsCart = itemsCart.filter(i => i.id !== item.id);
        let newQtyItems = 0;
        let newtotalPrice = 0;
        newItemsCart.forEach(i=>{
            newQtyItems += i.cantidad;
            newtotalPrice += i.subTotalPrice;
        });

        Swal.fire({
            title: '¿Está seguro?',
            text: "Está apunto de eliminar un producto de su carrito!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, elimínalo!',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                products.forEach(product => {
                    if (product.id === item.id) {
                        product.stock += qtyBackToStock;
                    }
                });
                setItemsCart(newItemsCart);  
                setProducts(products);
                setQtyCart(newQtyItems);
                setTotalPriceCart(newtotalPrice);

                Swal.fire(
                    'Eliminado!',
                    'Producto retirado de su carrito.',
                )
            }
        })  
    };

    //VACIAR POR COMPLETO EL CARRITO
    const clear = () => {
        Swal.fire({
            title: '¿Está seguro?',
            text: "Está apunto de eliminar todos los productos de su carrito!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, elimínalos!',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                products.forEach(item => {
                    item.stock = item.inistock
                })
                setItemsCart([]);
                setQtyCart(0);
                setTotalPriceCart(0);
                
                Swal.fire(
                    'Eliminados!',
                    'Su carrito está vacío.',
                )
            }
        })   
    };

    const afterPayment = () => {
        setItemsCart([]);
        setQtyCart(0);
        setTotalPriceCart(0);
    };

    return (
        <CartContext.Provider
        value = {{
            products,
            itemsCart,
            qtyCart,
            totalPriceCart,
            stateCart,
            addItem,
            removeItem,
            clear,
            afterPayment
        }}>
            {children}
        </CartContext.Provider>
    )
};