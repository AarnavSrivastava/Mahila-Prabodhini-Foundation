import React from 'react';
import ImgDisp from './major_page_components/ImgDisp';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="flex flex-col items-center py-[5vw] gap-[5vw]">
                <ImgDisp />
                <div className="transform relative px-[10vw] flex justify-start items-center rounded-xl h-[100%]">
                    <div className="flex relative flex-col justify-start px-[3%]">
                        <div className="font-poppins font-black text-[5vw] py-[10%]">
                            What we do
                        </div>
                        <div className="pb-[5%] font-lato text-[1.5vw] text-gray-500 leading-[3vw]">
                            The Mahila Prabodhini Foundation is a socio-economic grass root level organization committed to
                            improving the standard of life of rural poor, particularly the vulnerable classes by imbibing
                            confidence, capability, commitment, and skill to overcome gloomy situations on their own.
                        </div>
                        <div>
                            <Link to="/aboutus" className="text-[1.2vw] tracking-widest font-bold px-[1.8vw] py-[1.2vw] xl:px-[24px] xl:py-[12px] transition hover:-translate-y-1 hover:scale-100 ease-in-out delay-[10ms] bg-cream hover:text-orange-200 hover:bg-[#831843] duration-300">
                                READ MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;