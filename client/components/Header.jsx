import React from "react";
import { Link } from "react-router-dom";
import { GiOrange } from "react-icons/gi";

import '../style.css';

const Header = () => {
    return (
        <header className='header'>
            <Link to="/" className="logo">
                <div >
                    <GiOrange /> Tangerine
                </div>
            </Link>
            <Link to="/onboard" className="btn">
                Create Onboard
            </Link>
        </header >
    )
}


export default Header;