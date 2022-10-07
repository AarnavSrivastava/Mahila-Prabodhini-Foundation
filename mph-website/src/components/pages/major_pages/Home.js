import React from 'react';
import ImgDisp from './home_components/ImgDisp';
import HomeTextDisp from './home_components/HomeTextDisp';
import TextDisp from './home_components/NumbersTextDisp';
import ImgGridDisp from './home_components/ImgGridDisp';
import Logos from './home_components/Logos';
import ImgBackground from './home_components/ImgBackground';

const Home = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-[5vw]">
                <ImgBackground />
                <ImgDisp />
                <HomeTextDisp />
                <TextDisp />
                <ImgGridDisp />
            </div>
            <Logos />
        </div>
    )
}

export default Home;