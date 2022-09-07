import { Link, useLocation } from "react-router-dom";
import hamburgericon from './hamburgericon.svg';
import caret from './caret.svg';
import { useState, useEffect } from 'react';

import { CSSTransition } from 'react-transition-group'
import './DropDownMenu.css'

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

            <div className={(open) ? "absolute top-[58px] w-[250px] translate-x-[-45%] bg-white-transparent rounded-md p-4 overflow-hidden border-2 border-gray-400" : "hidden"}>
                <Menu />
            </div>

        </div>
    )
}

function Menu()
{
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropDownTransitionItem(props) {
        return (
            <div className="flex" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <li className={props.liClass + " w-[250px]"}>
                    <button className={"flex justify-between items-center transition rounded-md w-full ease-in-out p-2 hover:bg-gray-200 duration-[150ms] "}>
                        <span>{props.content}</span>
                        <img className="w-[2vw] " src={caret} id="caret" alt="caret"/>
                    </button>
                </li>
            </div>
        )
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }}>
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>

                <ul className="flex flex-col justify-center gap-2">
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/donate">Donate</CustomLink>
                    <CustomLink to="/events">Events</CustomLink>
                    <CustomLink to="/login">Login</CustomLink>
                    <CustomLink to="/signup">Sign Up</CustomLink>
                    <DropDownTransitionItem liClass="font-lato font-black text-[2vw]" goToMenu="more" content="More" />
                </ul>

            </CSSTransition>

            <CSSTransition in={activeMenu === 'more'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>

                <ul>
                    <DropDownTransitionItem liClass="rotate-180" goToMenu="main" />
                    <CustomLink to="/aboutus">About Us</CustomLink>
                    <CustomLink to="/contactus">Contact Us</CustomLink>
                    <CustomLink to="/privacypolicy">Privacy Policy</CustomLink>
                    <CustomLink to="/termsandconditions">Terms and Conditions</CustomLink>
                </ul>

            </CSSTransition>
        </div>
    )
}



function CustomLink({ to, children })
{

    return (
        <li className="flex font-lato font-black text-[2vw]">
            <Link to={to} className={"transition rounded-md w-full ease-in-out p-2 hover:bg-gray-200 duration-[150ms]"}>{children}</Link>
        </li>
    )
}

export default HamburgerMenu;