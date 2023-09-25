import React from "react";
import { Link } from "react-router-dom";
import { GiOrange } from "react-icons/gi";

import '../style.css';

const Header = () => {
    return (
        <header className='header'>
            <div className="logo">
                <GiOrange /> Tangerine
            </div>

            <button className="btn">
                Create Onboard
            </button>
        </header >
    )
}


export default Header;