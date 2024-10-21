// src/components/CartContext.js

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (shoe) => {
        setCart((prevCart) => [...prevCart, shoe]);
    };

    const removeFromCart = (id) => {
        console.log(`Tentative de suppression de l'article avec ID: ${id}`);
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Ajout de la fonction pour vider le panier
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
