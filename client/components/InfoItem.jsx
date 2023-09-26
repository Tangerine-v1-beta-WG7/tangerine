import React from "react";
import "../dropdown.css";

const InfoItem = (props) => {
    return (
        <li className='InfoItem'>
            <a>{props.desc}</a>
            <a>{props.text}</a>
        </li>
    )
}


export default InfoItem;