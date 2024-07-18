import React from "react";
import './Banner.scss';

function Banner(props) {
    return (
        <div id="banner" key={props.src}>
            <img src={props.src} alt="" />
            <section>
                <h1>{props.text}</h1>
            </section>
        </div>
    )
}

export default Banner