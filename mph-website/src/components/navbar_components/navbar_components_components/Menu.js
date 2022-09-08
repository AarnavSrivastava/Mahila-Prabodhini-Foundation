import { useState } from 'react';
import caret from './caret.svg';
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-router-dom";

import './DropDownMenu.css';

export default function Menu()
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
                <li className={props.liClass + " w-[215px]"}>
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