import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <React.Fragment>
            <div>
                <h1>Kasa - Home</h1>
            </div>
            <Link to="/logements">
                <div>
                    <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="1er Logement" />
                </div>
            </Link>
        </React.Fragment>
    )
}

export default Home;
