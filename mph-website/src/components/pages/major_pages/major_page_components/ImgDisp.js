import React from 'react';
import vendorImage from '../../../images/ngopic3.png'
import {Link} from "react-router-dom"

const ImgDisp = () =>
{
    return (
        <div className="transform relative px-[10vw] flex justify-start items-center rounded-xl h-[100%]">
            <div className="flex relative flex-col w-[67%] justify-start px-[3%]">
                <div className="font-poppins font-black text-[5vw]">
                    Who We Are
                </div>
                <div className="py-[5%] font-poppins font-black text-[2.7vw]">
                    Mahila Prabodhini Foundation
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
            <div className="flex relative justify-center items-center shadow-2xl rounded-xl">
                <img className="rounded-xl" src={vendorImage} id="vendor" alt="Gram Bazaar Vendor"/>
            </div>
        </div>
    )
}

export default ImgDisp;