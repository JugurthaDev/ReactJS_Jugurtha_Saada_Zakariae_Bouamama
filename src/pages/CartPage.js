import React from "react";
import { useCart } from "../components/CartContext";
import "./css/CartPage.css"; // Assurez-vous d'importer le fichier CSS

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (!cart || cart.length === 0) {
    return <h2 className="cart-title">Votre panier est vide.</h2>;
  }

  const totalAmount = cart.reduce((acc, shoe) => acc + shoe.price, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Votre Panier</h1>
      <ul>
        {cart.map((shoe) => (
          <li className="cart-item" key={shoe.id}>
            <span className="cart-item-name">{shoe.name}</span>
            <span className="cart-item-price">{shoe.price} €</span>
            <button
              className="cart-button"
              onClick={() => removeFromCart(shoe.id)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      <h2 className="total-amount">Total: {totalAmount} €</h2>
      <button className="cart-button" onClick={clearCart}>
        Vider le Panier
      </button>
    </div>
  );
};

export default CartPage;
