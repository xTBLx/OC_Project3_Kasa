import React from "react";
import Banner from '../../components/Banner/Banner.jsx';
import Collapse from '../../components/Collapse/Collapse.jsx';
import './About.scss';

function About() {
    return (
        <div className="main-bloc">
            <Banner src="assets/image-banner-about.jpeg" text="" />
            <div id="abouts">
                <Collapse title="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes" />
                <Collapse title="Respect" text=
                "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme" />
                <Collapse title="Service" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme" />     
                <Collapse title="Securité" text="La sécurité est la priorité de Kasa. Aussi pour nos hôtes que pour les voyageurs, châque logements correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </div>
    )
}

export default About;