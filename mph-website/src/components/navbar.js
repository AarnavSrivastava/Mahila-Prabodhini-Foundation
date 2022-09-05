import React from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import HomeLink from './navbar_components/logo_homelink.js';
import HamburgerMenu from './navbar_components/HamburgerMenu.js';

const Navbar = () =>
{
    return (
        <nav className="flex flex-row w-screen sticky top-0 z-50 justify-between items-center bg-white-transparent px-[4%] gap-[10%]">
            <Link to="/">
                <HomeLink />
            </Link>
            <ul className="hidden md:flex justify-center flex-row gap-[1.3vw] my-[1vw]">
                <CustomLink to="/aboutus">About Us</CustomLink>
                <CustomLink to="/events">Events</CustomLink>
                <CustomLink to="/contactus">Contact Us</CustomLink>
            </ul>

            <ul className="flex-1 hidden md:flex flex-row gap-5 font-opensans font-bold text-[1vw] my-[1vw]">
            {/* flex w-[100%] h-[2.5vw] justify-center items-center border-2 border-defpink rounded-md text-white bg-defpink hover:text-defpink hover:bg-white */}
                <Link className="flex px-[1vw] py-[0.5vw] w-[100%] justify-center items-center transition hover:-translate-y-1 hover:scale-100 rounded-md text-white border-2 border-defpink ease-in-out delay-10 bg-defpink hover:bg-white hover:text-defpink duration-300" to="/login">
                    LOGIN
                </Link>
                <Link className="flex px-[1vw] py-[0.5vw] w-[100%] justify-center items-center transition hover:-translate-y-1 hover:scale-100 rounded-md text-defpink border-2 border-defpink ease-in-out delay-10 bg-white hover:bg-defpink hover:text-white duration-300" to="/signup">
                    SIGN UP
                </Link>
                <Link className="flex px-[1vw] py-[0.5vw] w-[100%] justify-center items-center transition hover:-translate-y-1 hover:scale-100 rounded-md border-2 border-[#158ba8] rounded-md text-[#158ba8] ease-in-out delay-10 bg-white hover:text-white hover:bg-[#158ba8] duration-300" to="/donate">
                    DONATE
                </Link>
            </ul>
            <HamburgerMenu />
        </nav>
    )
}

function CustomLink({ to, children })
{
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className="flex font-lato font-black text-[1.4vw]">
            <Link to={to} className={"transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-[125ms] hover:text-pink-400 hover:font-medium " + (isActive ? "text-defpink" : "") + " duration-125"}>{children}</Link>
        </li>
    )
} 

export default Navbar;