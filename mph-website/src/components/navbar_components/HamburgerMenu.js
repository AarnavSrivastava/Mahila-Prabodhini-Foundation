import {Link, useMatch, useResolvedPath} from "react-router-dom";
import { useState } from 'react';
import hamburger from './hamburgericon.svg'

const HamburgerMenu = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div className="flex md:hidden">
            <button onClick={ () => setNavbarOpen(prev => !prev) }>{navbarOpen ? "Close" : <img className="w-[50px]" src={hamburger} id="hamburger" alt="hamburger" />}</button>
            <ul className={`${navbarOpen}` ? " " : "hidden"}>

            </ul>
        </div>
    )
}

export default HamburgerMenu;