import React from "react";
import { Link } from 'react-router-dom';
import './Erreur404.scss';

function Erreur404() {
    return (
        <div id="erreur-404">
            <h1>404</h1>
            <h2>Oups ! La page que vous demandeé n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Erreur404;