import React from "react";
import { Link } from "react-router-dom";
import { GiOrange } from "react-icons/gi";
import Dropdown from "./Dropdown.jsx";

import '../style.css';

const Header = () => {
    return (
        <header className='header'>
            <Link to="/" className="logo">
                <div >
                    <GiOrange /> Tangerine
                </div>
            </Link>
            <div className="flex-center">
            <Link to="/onboard" className="btn">
                Create Onboard
            </Link>
            <Dropdown/>
            </div>
        </header >
    )
}


export default Header;