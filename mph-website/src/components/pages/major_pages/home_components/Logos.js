import logo from '../../../randomLogo.svg';

const Carousel = () => {

    return (
        <div className="flex flex-col bg-gray-100 w-[100%] py-[4vw] justify-center items-center">
            <div className="font-black font-opensans lg:text-[1.3vw] text-[14px]">
                OUR PARTNERS
            </div>
            <ul className="flex flex-row gap-[2vw]">
                <img className="w-[100%] py-[]" src={logo} id="logo" alt="generic logo"/>
                <img className="w-[1--]" src={logo} id="logo" alt="generic logo"/>
                <img className="w-[15vw]" src={logo} id="logo" alt="generic logo"/>
                <img className="w-[15vw]" src={logo} id="logo" alt="generic logo"/>
                <img className="w-[15vw]" src={logo} id="logo" alt="generic logo"/>
            </ul>
        </div>
    )
}

export default Carousel; 