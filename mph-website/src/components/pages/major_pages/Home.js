import React from 'react';
import ImgDisp from './major_page_components/ImgDisp';
import HomeTextDisp from './major_page_components/HomeTextDisp';

const Home = () => {
    return (
        <div>
            <div className="flex flex-col items-center py-[5vw] gap-[5vw]">
                <ImgDisp />
                <HomeTextDisp />
            </div>

        </div>
    )
}

export default Home;