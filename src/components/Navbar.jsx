import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation  } from "react-router-dom";

import Logo from "../assets/images/logo.png"

import "./Navbar.scss";

export default function Navbar({ currentLocation }) {
    const location = useLocation()
    console.log(location)
    return (
        <nav className='navbar'>
            <img src={Logo} alt="Logo de Kasa" className='logo' />
            <ul className="links">
                <li className="links-item">
                    <Link to={"/"} className={`links-link ${currentLocation === 'homepage' ? 'active' : null}`}>Accueil</Link>
                </li>
                <li className="links-item">
                    <Link to={"/about"} className={`links-link ${currentLocation === 'aboutpage' ? 'active' : null}`}>A propos</Link>
                </li>
            </ul>
        </nav>
    )
}
