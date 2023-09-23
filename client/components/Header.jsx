import React from "react";
import { Link } from "react-router-dom";
import '../style.css';

const Header = () => {

    return (
        <header className='header'>
            <div className="logo">
                Tangerine
            </div>
            <ul>
                <li>
                    <button className="btn">
                        Create Onboarding
                    </button>
                </li>
                <li className='btn-circle profile-icon'>
                    Icon
                </li>
            </ul>
        </header>
    )
}



export default Header;