import React from 'react';
import ImgDisp from './home_components/ImgDisp';
import HomeTextDisp from './home_components/HomeTextDisp';
import TextDisp from './home_components/NumbersTextDisp';
import ImgGridDisp from './home_components/ImgGridDisp';

const Home = () => {
    return (
        <div>
            <div className="flex flex-col items-center py-[5vw] gap-[5vw]">
                <ImgDisp />
                <HomeTextDisp />
                <TextDisp />
                <ImgGridDisp />
            </div>
        </div>
    )
}

export default Home;