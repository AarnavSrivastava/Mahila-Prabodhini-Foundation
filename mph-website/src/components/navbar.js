import React from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import Logo from './logo.svg';

const Navbar = () =>
{
    return (
        <nav className="flex flex-row w-screen sticky top-0 z-50 justify-between items-center bg-white-transparent py-[1.5%] px-[5%] gap-[5%]">
            <Link to="/" className ="flex group flex-row justify-start items-center basis-0 grow gap-[0.5vw]">
                <img className="group-hover:animate-spin w-[8%]" src={Logo} id="logo" alt="logo"/>
                <div className="flex flex-row group font-lato font-bold text-[1.8vw]">
                    <span className="transition ease-in-out duration-[150ms] group-hover:text-defpink">M</span>
                    <span className="transition ease-in-out duration-[200ms] group-hover:text-defpink">a</span>
                    <span className="transition ease-in-out duration-[250ms] group-hover:text-defpink">h</span>
                    <span className="transition ease-in-out duration-[300ms] group-hover:text-defpink">i</span>
                    <span className="transition ease-in-out duration-[350ms] group-hover:text-defpink">l</span>
                    <span className="transition ease-in-out duration-[400ms] group-hover:text-defpink">a</span>
                    <span>&nbsp;</span>
                    <span className="transition ease-in-out duration-[450ms] group-hover:text-defpink">P</span>
                    <span className="transition ease-in-out duration-[500ms] group-hover:text-defpink">r</span>
                    <span className="transition ease-in-out duration-[550ms] group-hover:text-defpink">a</span>
                    <span className="transition ease-in-out duration-[600ms] group-hover:text-defpink">b</span>
                    <span className="transition ease-in-out duration-[650ms] group-hover:text-defpink">o</span>
                    <span className="transition ease-in-out duration-[700ms] group-hover:text-defpink">d</span>
                    <span className="transition ease-in-out duration-[750ms] group-hover:text-defpink">h</span>
                    <span className="transition ease-in-out duration-[800ms] group-hover:text-defpink">i</span>
                    <span className="transition ease-in-out duration-[850ms] group-hover:text-defpink">n</span>
                    <span className="transition ease-in-out duration-[900ms] group-hover:text-defpink">i</span>
                    <span>&nbsp;</span>
                    <span className="transition ease-in-out duration-[950ms] group-hover:text-defpink">F</span>
                    <span className="transition ease-in-out duration-[1000ms] group-hover:text-defpink">o</span>
                    <span className="transition ease-in-out duration-[1050ms] group-hover:text-defpink">u</span>
                    <span className="transition ease-in-out duration-[1100ms] group-hover:text-defpink">n</span>
                    <span className="transition ease-in-out duration-[1150ms] group-hover:text-defpink">d</span>
                    <span className="transition ease-in-out duration-[1200ms] group-hover:text-defpink">a</span>
                    <span className="transition ease-in-out duration-[1250ms] group-hover:text-defpink">t</span>
                    <span className="transition ease-in-out duration-[1300ms] group-hover:text-defpink">i</span>
                    <span className="transition ease-in-out duration-[1350ms] group-hover:text-defpink">o</span>
                    <span className="transition ease-in-out duration-[1400ms] group-hover:text-defpink">n</span>
                </div>
            </Link>
            <ul className="basis-0 grow flex justify-center flex-row gap-[1.3vw]">
                <CustomLink to="/aboutus">About Us</CustomLink>
                <CustomLink to="/events">Events</CustomLink>
                <CustomLink to="/contactus">Contact Us</CustomLink>
            </ul>

            <ul className="flex basis-0 grow flex-row gap-5 font-opensans font-bold text-[1.2vw] h-[2.8vw]">
            {/* flex w-[100%] h-[2.5vw] justify-center items-center border-2 border-defpink rounded-md text-white bg-defpink hover:text-defpink hover:bg-white */}
                <Link className="flex px-[1vw] w-[100%] justify-center items-center transition rounded-md text-white border-2 border-defpink ease-in-out delay-10 bg-defpink hover:bg-white hover:text-defpink duration-300" to="/login">
                    LOGIN
                </Link>
                <Link className="flex px-[1vw] w-[100%] justify-center items-center transition rounded-md text-defpink border-2 border-defpink ease-in-out delay-10 bg-white hover:bg-defpink hover:text-white duration-300" to="/signup">
                    SIGN UP
                </Link>
                <Link className="flex px-[1vw] w-[100%] justify-center items-center transition rounded-md border-2 border-[#158ba8] rounded-md text-[#158ba8] ease-in-out delay-10 bg-white hover:text-white hover:bg-[#158ba8] duration-300" to="/donate">
                    DONATE
                </Link>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children })
{
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className="flex font-lato font-black text-[1.4vw]">
            <Link to={to} className={"transition ease-in-out duration-150 hover:text-pink-400 hover:font-medium " + (isActive ? "text-defpink" : "") + " duration-300"}>{children}</Link>
        </li>
    )
} 

export default Navbar;