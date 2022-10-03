import logo from '../../../randomLogo.svg';

const Carousel = () => {

    return (
        <div className="flex flex-col bg-gray-100 w-[100%] py-[9vw] justify-center items-center">
            <div className="font-black text-black font-opensans lg:text-[1.2vw] text-[14px]">
                OUR PARTNERS
            </div>
            <ul className="flex flex-row mt-[2vw]">
                <img className="w-[18vw] py-[3vw] px-[3vw] border-2 border-r-0" src={logo} id="logo" alt="generic logo"/>
                <img className="w-[18vw] py-[3vw] px-[3vw] border-2 border-r-0" src={logo} id="logo" alt="generic logo"/>
                <img className="w-[18vw] py-[3vw] px-[3vw] border-2 border-r-0" src={logo} id="logo" alt="generic logo"/>
                <img className="w-[18vw] py-[3vw] px-[3vw] border-2 border-r-0" src={logo} id="logo" alt="generic logo"/>
                <img className="w-[18vw] py-[3vw] px-[3vw] border-2" src={logo} id="logo" alt="generic logo"/>
            </ul>
        </div>
    )
}

export default Carousel; 