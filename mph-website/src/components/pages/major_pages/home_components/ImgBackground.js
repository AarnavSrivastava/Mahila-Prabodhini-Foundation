import { Link } from "react-router-dom";

const ImgBackground = () => {
    return (
        <div className="w-[100%] h-screen bg-center bg-ngopic-2 bg-cover bg-no-repeat flex justify-start items-center">
            <div className="flex flex-col justify-start mx-[20vw] gap-[1vw] flex-wrap">
                <div className="flex flex-wrap items-center justify-center w-[23%] bg-black-transparent font-poppins font-black text-white lg:text-[1.3vw] text-[12px] p-[1vw]">
                    Together, we can
                </div>
                <div className="bg-black-transparent font-poppins font-black text-white lg:text-[3.5vw] text-[30px] p-[1vw]">
                    Part of being a person is about helping others.
                </div>
                <Link className="flex flex-wrap w-[25%] mt-[2vw] font-poppins lg:text-[1.2vw] text-[12px] tracking-widest font-extrabold px-[1.8vw] py-[1vw] justify-center items-center transition hover:-translate-y-1 hover:scale-100 text-[#831843] ease-in-out delay-[10ms] bg-white hover:text-orange-200 hover:bg-[#831843] duration-300" to="/donate">
                    DONATE NOW
                </Link>
            </div>
        </div>
    )
}

export default ImgBackground;