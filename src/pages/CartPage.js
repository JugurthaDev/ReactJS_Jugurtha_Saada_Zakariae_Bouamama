// src/components/CartPage.js

import React from 'react';
import { useCart } from '../components/CartContext';

const CartPage = () => {
    const { cart, removeFromCart, clearCart } = useCart(); // Récupérer le panier et les fonctions du contexte

    if (!cart || cart.length === 0) {
        return <h2>Votre panier est vide.</h2>;
    }

    const totalAmount = cart.reduce((acc, shoe) => acc + shoe.price, 0);

    return (
        <div>
            <h1>Votre Panier</h1>
            <ul>
                {cart.map((shoe) => (
                    <li key={shoe.id}>
                        {shoe.name} - {shoe.price} €
                        <button onClick={() => removeFromCart(shoe.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
            <h2>Total: {totalAmount} €</h2>
            <button onClick={clearCart}>Vider le Panier</button>
        </div>
    );
};

export default CartPage;
