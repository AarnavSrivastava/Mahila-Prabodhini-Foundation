import React from 'react';
import vendorImage from '../../../images/ngopic3.png'
import {Link} from "react-router-dom"

const ImgDisp = () =>
{
    return (
        <div className="transform relative px-[15vw] flex flex-row gap-[15vw] justify-start items-center rounded-xl h-[100%]">
            <div className="flex basis-1/2 relative flex-col justify-start">
                <div className="font-poppins font-black lg:text-[4.3vw] text-[44px]">
                    Who We Are
                </div>
                <div className="py-[5%] font-poppins font-black lg:text-[2vw] text-[20px]">
                    The Mahila Prabodhini Foundation
                </div>
                <div className="pb-[5%] font-lato lg:text-[1.3vw] text-[14px] leading-[40px] text-gray-500">
                    The Mahila Prabodhini Foundation is a socio-economic grass root level organization committed to
                    improving the standard of life of rural poor, particularly the vulnerable classes by imbibing
                    confidence, capability, commitment, and skill to overcome gloomy situations on their own.
                </div>
                <div>
                    <Link to="/aboutus" className="lg:text-[1vw] text-[10px] tracking-widest font-bold px-[1.8vw] py-[1.2vw] xl:px-[24px] xl:py-[12px] transition hover:-translate-y-1 hover:scale-100 ease-in-out delay-[10ms] bg-cream hover:text-orange-200 hover:bg-[#831843] duration-300">
                        READ MORE
                    </Link>
                </div>
            </div>
            <div className="flex grow flex-wrap justify-center items-center shadow-2xl rounded-xl">
                <img className="rounded-xl object-cover" src={vendorImage} id="vendor" alt="Gram Bazaar Vendor"/>
            </div>
        </div>
    )
}

export default ImgDisp;