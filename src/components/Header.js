// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';
import logo from './img/logo.png';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo Wenov" className="header-logo" />
            <h1 className="header-title">Wenov Store</h1>
            <div className="header-buttons">
                <Link to="/" className="header-button">
                    Catalogue
                </Link>
                <Link to="/cart" className="header-button">
                    Panier
                </Link>
            </div>
        </header>
    );
};

export default Header;
