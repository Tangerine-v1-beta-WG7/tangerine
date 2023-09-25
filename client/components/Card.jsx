import React from "react";

import '../style.css';


const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{props.title}</h3>
            </div>
            <div className="card-body">
                {props.amount}
            </div>
        </div>
    )

}

export default Card;