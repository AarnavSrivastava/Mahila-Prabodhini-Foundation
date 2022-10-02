import { Link } from "react-router-dom";

const DonateDisp = () => {
    return (
        <div className="flex flex-col w-[100%] bg-sand justify-center items-center pt-[3vw] pb-[5vw] gap-[1vw]">
            <div className="font-opensans font-black text-white lg:text-[1.3vw] text-[14px]">GIVE US A HAND</div>
            <div className="font-opensans font-black text-white text-[1.8vw]">Join us in creating hope and opportunity for thousands of women</div>
            <Link className="flex xl:text-[16px] font-opensans text-[1.2vw] tracking-widest font-bold lg:px-[2vw] lg:py-[1vw] px-[30px] py-[12px] justify-center items-center transition hover:-translate-y-1 hover:scale-100 text-[#831843] ease-in-out delay-[10ms] bg-white hover:text-orange-200 hover:bg-[#831843] duration-300" to="/donate">
                DONATE
            </Link>
        </div>
    )
}

export default DonateDisp;