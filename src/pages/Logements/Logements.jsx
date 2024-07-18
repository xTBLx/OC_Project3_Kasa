import React from "react";
import { useParams } from "react-router-dom";

function Logements() {
    let {id} = useParams();
    console.log(id);
    return (
        <div>
            <h1>Kasa - Logements</h1>
        </div>
    )
}

export default Logements;