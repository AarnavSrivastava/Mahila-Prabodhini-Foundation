import React from 'react';
import {Link} from "react-router-dom";

const BottomLinks = () =>
{
    return (
        <div>
            <div className="flex flex-row flex-wrap w-screen justify-start bg-background-blue">
                <ul className="grid px-[11%] py-[4%] gap-[0.6vh]">
                    <div className="font-lato font-bold text-white text-[1.05vw] pb-[2%]">My Account</div>
                    <div className="pt-[1%] h-[0.5vh] w-[4vw] bg-defpink"></div>
                    <div className="pt-[10px] font-lato text-[0.9vw] text-white">Help us change the lives of people around the world</div>
                    <div className="pt-[30px] flex justify-start items-center">
                        <Link className="transition ease-in-out duration-150 flex w-[40%] h-[7vh] font-opensans font-bold text-[0.7vw] justify-center items-center border-2 border-defpink rounded-md text-white bg-defpink hover:text-defpink hover:bg-white duration-450" to="/signup">
                            JOIN US NOW
                        </Link>
                    </div>
                </ul>

                <ul className="grid flex-wrap px-[11%] py-[4%] gap-[0.6vh]">
                    <div className="font-lato font-bold text-white text-[1.05vw] pb-[4%]">Quick Links</div>
                    <div className="pt-[2.5%] h-[0.5vh] w-[4vw] bg-defpink"></div>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/events">Events</CustomLink>
                    <CustomLink to="/tac">Terms and Conditions</CustomLink>
                    <CustomLink to="/priv">Privacy Policy</CustomLink>
                </ul>
                
                <ul className="grid flex-wrap px-[11%] py-[4%] gap-[0.6vh]">
                    <div className="font-lato font-bold text-white text-[1.05vw]">Support Us</div>
                    <div className="h-[0.5vh] w-[4vw] bg-defpink"></div>
                    <CustomLink to="/donate">Donate</CustomLink>
                    <CustomLink to="/aboutus">About Us</CustomLink>
                    <CustomLink to="/contactus">Contact Us</CustomLink>
                </ul>
            </div>

            <div className="flex justify-center bg-[#0F1C35] font-lato text-white text-[0.7vw]">© Copyright 2022 | dummywebsite.com | All right reserved.</div>
        </div>
    );
}

function CustomLink({ to, children })
{
    return (
        <li>
            <Link to={to} className="transition ease-in-out duration-150 font-lato text-[0.9vw] text-white hover:text-defpink duration-300">{children}</Link>
        </li>
    )
} 

export default BottomLinks;