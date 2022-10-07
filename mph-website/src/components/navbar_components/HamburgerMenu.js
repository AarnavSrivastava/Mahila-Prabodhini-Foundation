import {  useLocation } from "react-router-dom";
import hamburgericon from './hamburgericon.svg';
import { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring'

import Menu from './navbar_components_components/Menu.js'

const HamburgerMenu = (props) => {
    const [open, setOpen] = useState(false);
    
    const transition = useTransition(open, {
        from: { x:200 },
        enter:{ x:-120 },
        leave:{ x:200 },
    })
    

    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location]);

    return (
        <div className="flex justify-center items-center rounded-full md:hidden w-[35px] h-[35px] border-2 border-slate-300 overflow-x-hidden">
            <button onClick={ () => setOpen(prev => !prev) }>
                <img className="" src={hamburgericon} id="hamburger" alt="hamburger"/>
            </button>

            {transition((style, item) =>
                item ? <animated.div style={style} className="absolute top-[55px] w-[250px] translate-x-[-45%] bg-white rounded-md p-4 overflow-hidden border-2 border-gray-400 drop-shadow-2xl"> <Menu /> </animated.div> : ''
            )}
                

        </div>
    )
}


export default HamburgerMenu;