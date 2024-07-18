import React from "react";
import Banner from '../../components/Banner/Banner.jsx';
import './Home.scss';
import Cards from "../../components/Cards/Cards.jsx";

function Home() {
    return (
        <div className="main-bloc">
            <Banner src="assets/image-banner-homepage.jpeg" text="Chez vous, partout et ailleurs" />
            <Cards />
        </div>
    )
}

export default Home;
