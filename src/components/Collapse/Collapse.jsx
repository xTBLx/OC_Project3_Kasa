import React from "react";
import { useState } from 'react';
import './Collapse.scss';

function Collapse(props) {
    const [collapse, isCollapsed] = useState(true)

    return collapse ? (
        <section className="collapse">
            <div className="title-box" onClick={() => isCollapsed(false)}>
                <h2>{props.title}</h2>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
        </section>
    ) : (
        <section className="collapse">
            <div className="title-box" onClick={() => isCollapsed(true)}>
                <h2>{props.title}</h2>
                <i class="fa-solid fa-chevron-up"></i>
            </div>
            <div className="text-box">
                <p>{props.text}</p>
            </div>
        </section>
    )
}

export default Collapse