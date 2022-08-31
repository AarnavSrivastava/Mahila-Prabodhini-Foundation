import React from 'react';
import ImgDisp from './minor_page_components/AboutUsImgdisp.js'
import TxtDisp from './minor_page_components/AboutUsTxt.js'
import ImgGridDisp from './minor_page_components/AboutUsImgGridDisp.js';

const About = () => {
    return (
        <div className="flex flex-col justify-start w-screen items-center bg-inherit">
            <div className="font-lato font-bold text-white h-[30%] text-[2.8vw] pt-[4%] pb-[6%] px-[11%] tracking-wider bg-background-blue w-screen">About Us</div>
            <ImgDisp />
            <TxtDisp />
            <ImgGridDisp />
        </div>
    )
}

export default About;