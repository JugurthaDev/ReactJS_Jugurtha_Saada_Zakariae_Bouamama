import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import './css/ListPage.css';
import shoeimg from './img/image.png';

const ListPage = () => {
    const [shoes, setShoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [clickedIndexes, setClickedIndexes] = useState([]); // État pour les clics sur les boutons
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchShoes = async () => {
            console.log("Fetching shoes...");
            try {
                const response = await fetch('/api/shoes');
                console.log("Response status:", response.status);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("Received data:", data);
                setShoes(data);
            } catch (error) {
                console.error("Error fetching shoes:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchShoes();
    }, []);

    const handleAddToCart = (shoe, index) => {
        addToCart(shoe);
        setClickedIndexes((prev) => [...prev, index]); // Marque l'index comme cliqué
        setTimeout(() => {
            setClickedIndexes((prev) => prev.filter(i => i !== index)); // Retire l'index après l'animation
        }, 500); // Durée de l'animation
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Liste des chaussures</h1>
            <div className="shoe-list">
                {shoes.map((shoe, index) => (
                    <div key={index} className="shoe-card">
                        <div className="shoe-image">
                            <img src={shoeimg} alt={shoe.name} />
                        </div>
                        <h2>{shoe.name}</h2>
                        <p>Prix: {shoe.price} €</p>
                        <p>Genre: {shoe.gender === 'F' ? 'Femme' : 'Homme'}</p>
                        <p>{shoe.description.substring(0, 50)}...</p>
                        <div className="buttons">
                            <Link to={`/details/${index}`} className="detail-button">
                                Voir les détails
                            </Link>
                            <button
                                onClick={() => handleAddToCart(shoe, index)}
                                className={`add-to-cart ${clickedIndexes.includes(index) ? 'clicked' : ''}`} // Ajout de la classe cliquée
                            >
                                Ajouter au panier
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListPage;
