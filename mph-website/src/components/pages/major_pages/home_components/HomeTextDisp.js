import { Link } from 'react-router-dom';

const HomeTextDisp = () => {
    return (
        <div className="transform bg-[#FFF5F5] relative px-[10vw] flex flex-col justify-start items-center ">
            <div className="py-[10%] px-[5vw] flex relative flex-col justify-start">
                <div className="font-poppins font-black lg:text-[4.3vw] text-[44px] pt-[5%] pb-[2.5%]">
                    What We Do
                </div>
                <div className="bg-slate-300 grow h-[1px]" />
                <div className="pt-[2.5%] pb-[5%] font-lato lg:text-[1.3vw] text-[14px] leading-[4.5vw] text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis fermentum nisi, eget tincidunt justo euismod ac. Sed faucibus risus justo, a finibus tortor condimentum non. Praesent vel nisl placerat, tincidunt odio in, viverra risus. Duis maximus blandit ultrices. Sed dapibus lacus vitae nunc condimentum vehicula. Donec at risus cursus lectus condimentum facilisis. Fusce nec lacus ut est placerat elementum.
                </div>
                <div>
                    <Link to="/aboutus" className="lg:text-[1vw] font-opensans font-bold text-[0.6em] leading-[4.5vw] tracking-widest px-[1.8vw] py-[1.2vw] xl:px-[24px] xl:py-[12px] transition hover:-translate-y-1 hover:scale-100 ease-in-out delay-[10ms] bg-cream hover:text-orange-200 hover:bg-[#831843] duration-300">
                        READ MORE
                    </Link>
                </div>
            </div>

            <div className="my-[10%] grid grid-cols-4 grid-flow-row auto-rows-fr font-poppins font-black text-white md:text-[1.5vw] text-[12px] leading-[3vw] shadow-2xl">
                <div className="flex flex-col px-[2vw] py-[2vw] bg-[#B16987]">
                    Education
                    <div className="py-[4vw] font-lato font-light text-white md:text-[1.3vw] text-[10px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis fermentum nisi, eget tincidunt justo euismod ac.
                    </div>
                    <div className="bg-white mt-[2vw] mb-[5vw] w-[4vw] h-[0.6vw]" />
                </div>

                <div className="flex flex-col px-[2vw] py-[2vw] bg-[#A55174]">
                    Livelihood
                    <div className="py-[4vw] font-lato font-light text-white md:text-[1.3vw] text-[10px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis fermentum nisi, eget tincidunt justo euismod ac.
                    </div>
                    <div className="bg-white mt-[2vw] mb-[5vw] w-[4vw] h-[0.6vw]" />
                </div>

                <div className="flex flex-col px-[2vw] py-[2vw] bg-[#A34067]">
                    Hygenic Food
                    <div className="py-[4vw] font-lato font-light text-white md:text-[1.3vw] text-[10px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis fermentum nisi, eget tincidunt justo euismod ac.
                    </div>
                    <div className="bg-white mt-[2vw] mb-[5vw] w-[4vw] h-[0.6vw]" />
                </div>

                <div className="flex flex-col px-[2vw] py-[2vw] bg-[#831843]">
                    Service Entrepreneur
                    <div className="py-[4vw] font-lato font-light text-white md:text-[1.3vw] text-[10px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis fermentum nisi, eget tincidunt justo euismod ac.
                    </div>
                    <div className="bg-white mt-[2vw] mb-[5vw] w-[4vw] h-[0.6vw]" />
                </div>
            </div>
        </div>
    );
}

export default HomeTextDisp;