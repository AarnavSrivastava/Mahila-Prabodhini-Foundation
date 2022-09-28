import React from 'react';
import {Link} from "react-router-dom";

const BottomLinks = () =>
{
    return (
        <div className="hidden md:flex flex-col mt-auto font-lato">
            <div className="flex flex-row flex-wrap justify-between items-center bg-background-blue gap-[5%] py-[4%] px-[8%]">
                <ul className="basis-0 grow grid gap-[5vw]">
                    <div className="font-light font-lato xl:text-[24px] text-[1.8vw] text-white">Help us change the lives of people around the world</div>
                    <div className="flex justify-start items-center">
                        <Link className="flex font-poppins xl:text-[16px] text-[1.2vw] tracking-widest font-extrabold px-[1.8vw] py-[1vw] xl:px-[24px] xl:py-[12px] justify-center items-center transition hover:-translate-y-1 hover:scale-100 text-[#831843] ease-in-out delay-[10ms] bg-white hover:text-orange-200 hover:bg-[#831843] duration-300" to="/donate">
                            DONATE NOW
                        </Link>
                    </div>
                </ul>

                <ul className="basis-0 grow flex flex-col items-center flex-wrap gap-[0.1vw]">
                    <div className="font-semibold text-white xl:text-[16px] text-[1.25vw] pb-[1vw]">Quick Links</div>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/aboutus">About</CustomLink>
                    <CustomLink to="/contactus">Contact</CustomLink>
                    <CustomLink to="/termsandconditions">Terms and Conditions</CustomLink>
                    <CustomLink to="/privacypolicy">Privacy Policy</CustomLink>
                </ul>
            </div>

            <div className="flex justify-center bg-[#0F1C35]  text-white text-[0.7vw]">© Copyright 2022 | dummywebsite.com | All right reserved.</div>
        </div>
    );
}

function CustomLink({ to, children })
{
    return (
        <li>
            <Link to={to} className="transition ease-in-out duration-150 xl:text-[16px] text-[1.2vw] text-white hover:text-orange-200 duration-300">{children}</Link>
        </li>
    )
} 

export default BottomLinks;