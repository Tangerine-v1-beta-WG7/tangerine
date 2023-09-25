import React from "react";
import "../dropdown.css";

const DropdownItem = (props) => {
    return (
        <li className='dropdownItem'>
            <img src={props.img}></img>
            <a>{props.text}</a>
        </li>
    )
}


export default DropdownItem;