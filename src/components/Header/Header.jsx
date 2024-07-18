import React from "react";
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <div id="header">
            <img src="/assets/logo-kasa.png" alt="Logo de Kasa"></img>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header