import React from "react";
import LogementsData from "../../data/logements.json"
import { Link } from 'react-router-dom';
import './Cards.scss';

function Cards () {
    return (
        <div id="cards">
            {LogementsData.map((LogementsDetail, i) => {
                return (
                    <Link to={"/logements/" + LogementsDetail.id}  key={LogementsDetail.id}>
                        <section className="card">
                            <img src={LogementsDetail.cover} alt="" />
                            <section className="fade">
                                <h2>{LogementsDetail.title}</h2>
                            </section>
                        </section>
                    </Link>
                )
            })}
        </div>
    )
}

export default Cards