import React from 'react';
import vendorImage from '../../../images/ngopic3.png'

const ImgDisp = () =>
{
    return (
        <div className="transform relative w-[78%] translate-y-[-15%] flex justify-start bg-[#F3FEFF] rounded-xl">
            <div className="flex relative justify-center items-center w-[33%] h-[100%] shadow-lg bg-white rounded-xl">
                <img className="m-[3%] w-[93%] h-[93%] rounded-xl" src={vendorImage} id="vendor" alt="Gram Bazaar Vendor"/>
            </div>
            <div className="flex relative flex-col w-[67%] h-[100%] justify-start px-[3%]">
                <div className="pt-[5%] font-merriweather font-bold text-[2.7vw]">
                    Mahila Prabodhini Foundation
                </div>
                <div className="font-lato text-[1.5vw] leading-[3vw]">
                    The Mahila Prabodhini Foundation is a socio-economic grass root level organization committed to
                    improving the standard of life of rural poor, particularly the vulnerable classes by imbibing
                    confidence, capability, commitment, and skill to overcome gloomy situations on their own.
                    Prabodhini firmly believes the sustainable development of any individual or community can be
                    only achieved by making them self-reliant, confident, and socio-economically independent.
                </div>
            </div>
        </div>
    )
}

export default ImgDisp;