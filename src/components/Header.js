import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';
import logo from './img/logo.png';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo Wenov" className="header-logo" />
            <div className="header-buttons">
                <Link to="/" className="header-button catalog-button">
                    Catalogue
                </Link>
                <Link to="/cart" className="header-button cart-button">
                    <FaShoppingCart className="cart-icon" />
                    <span className="cart-count">0</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
