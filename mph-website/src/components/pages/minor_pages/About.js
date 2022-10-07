import React from 'react';
import TxtDisp from './about_components/AboutUsTxt.js'
import ImgBackground from './about_components/ImgBackground.js';
import ImgGridDisp from './about_components/ImgGridDisp.js';
import Logos from './about_components/Logos.js'
import TxtDisp2 from './about_components/AboutUsTxt2.js';

const About = () => {
    return (
        <div className="flex flex-col w-screen items-center bg-inherit">
            <div className="flex flex-col items-center gap-[5vw]">
                <ImgBackground />
                <TxtDisp />
                <ImgGridDisp />
                <TxtDisp2 />
            </div>
            <Logos />
        </div>
    )
}

export default About;