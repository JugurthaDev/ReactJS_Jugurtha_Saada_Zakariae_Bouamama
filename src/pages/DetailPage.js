// src/components/DetailPage.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../components/CartContext'; // Importer le hook de contexte
import shoesData from '../mocks/fixtures/shoes.json';
import img from './img/image.png';
import './css/DetailPage.css';

const DetailPage = () => {
    const { id } = useParams();
    const [shoe, setShoe] = useState(null);
    const { addToCart } = useCart(); // Utiliser le contexte

    useEffect(() => {
        const selectedShoe = shoesData[id]; // Récupérer la chaussure sélectionnée
        setShoe(selectedShoe);
    }, [id]);

    if (!shoe) return <p>Chargement...</p>;

    return (
        <div className="shoe-detail">
            <h1>{shoe.name}</h1>
            <div className="shoe-image">
                <img src={img} alt={shoe.name} />
            </div>
            <p>Prix: {shoe.price} €</p>
            <p>Genre: {shoe.gender === 'F' ? 'Femme' : 'Homme'}</p>
            <p>Description: {shoe.description}</p>
            <button onClick={() => addToCart(shoe)} className="add-to-cart">
                Ajouter au panier
            </button>
            <Link to="/">Retour à la liste</Link>
        </div>
    );
};

export default DetailPage;
