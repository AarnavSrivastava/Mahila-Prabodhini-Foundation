import {  useLocation } from "react-router-dom";
import hamburgericon from './hamburgericon.svg';
import { useState, useEffect } from 'react';

import Menu from './navbar_components_components/Menu.js'

const HamburgerMenu = (props) => {
    const [open, setOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location]);

    return (
        <div className="flex justify-center items-center rounded-full md:hidden w-[35px] h-[35px] border-2 border-slate-300 ">
            <button onClick={ () => setOpen(prev => !prev) }>
                <img className="" src={hamburgericon} id="hamburger" alt="hamburger"/>
            </button>

            <div className={(open) ? "absolute top-[55px] w-[250px] translate-x-[-45%] bg-white rounded-md p-4 overflow-hidden border-2 border-gray-400" : "hidden"}>
                <Menu />
            </div>

        </div>
    )
}

export default HamburgerMenu;