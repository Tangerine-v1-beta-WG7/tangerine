import React from "react";


export default function Card(props) { 
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{props.title}</h3>
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )

}