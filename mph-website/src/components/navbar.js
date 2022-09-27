import {Link, useMatch, useResolvedPath} from "react-router-dom";
import HomeLink from './navbar_components/logo_homelink.js';
import HamburgerMenu from './navbar_components/HamburgerMenu.js';
import React from 'react'

const Navbar = () =>
{

    return (
        <nav className="flex wrap flex-row w-screen sticky top-0 z-50 justify-between items-center bg-background-blue-transparent px-[6%] min-h-[60px]">
            <Link to="/">
                <HomeLink />
            </Link>
            

            <ul className="hidden md:flex flex-row gap-5 font-lato items-center xl:my-[15px] my-[1.2vw] min-h-[40px]">
                <ul className="hidden md:flex justify-center flex-row gap-[1.3vw]">
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/aboutus">About</CustomLink>
                    <CustomLink to="/events">Events</CustomLink>
                    <CustomLink to="/contactus">Contact</CustomLink>
                </ul>

                <li>
                    <Link className="flex xl:text-[16px] font-opensans text-[1.2vw] tracking-widest font-bold px-[1.8vw] py-[1vw] xl:px-[24px] xl:py-[12px] justify-center items-center transition hover:-translate-y-1 hover:scale-100 text-[#831843] ease-in-out delay-[10ms] bg-white hover:text-orange-200 hover:bg-[#831843] duration-300" to="/donate">
                        DONATE
                    </Link>
                </li>
            </ul>
            <HamburgerMenu/>
        </nav>
    )
}

function CustomLink({ to, children })
{
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className="flex font-medium text-[16px] xl:text-[20px] text-[1.6vw]">
            <Link to={to} className={"transition text-white ease-in-out hover:-translate-y-1 hover:scale-100 duration-[125ms] hover:text-orange-300 hover:font-medium " + (isActive ? "text-orange-200" : "") + " duration-125"}>{children}</Link>
        </li>
    )
} 

export default Navbar;