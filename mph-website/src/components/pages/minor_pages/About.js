import React from 'react';
import TxtDisp from './minor_page_components/AboutUsTxt.js'
import ImgGridDisp from './minor_page_components/ImgGridDisp.js';

const About = () => {
    return (
        <div className="flex flex-col w-screen items-center bg-inherit">
            <div className="font-lato font-bold text-white h-[30%] md:text-[2.8vw] text-[22px] pt-[4%] pb-[6%] px-[11%] flex justify-center tracking-wider bg-background-blue w-screen">
                About Us
            </div>
            <TxtDisp />
            <ImgGridDisp />
        </div>
    )
}

export default About;