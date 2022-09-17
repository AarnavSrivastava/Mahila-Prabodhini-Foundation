import Logo from '../logo.svg';

const HomeLink = () => {
    return (
        <div className="flex group flex-row justify-start items-center gap-[0.5vw] my-[1vw]">
            <img className="xl:w-[40px] w-[3vw] min-w-[28px]" src={Logo} id="logo" alt="logo"/>
            <div className="xl:text-[22px] text-white lg:text-[1.7vw] flex-row group font-poppins font-light tracking-tight">
                <TextSpans />
            </div>
        </div>
    )
}

const TextSpans = () => {
    return (
        <div>
            <span className="transition ease-in-out duration-[150ms] group-hover:text-orange-200">M</span>
            <span className="transition ease-in-out duration-[200ms] group-hover:text-orange-200">a</span>
            <span className="transition ease-in-out duration-[250ms] group-hover:text-orange-200">h</span>
            <span className="transition ease-in-out duration-[300ms] group-hover:text-orange-200">i</span>
            <span className="transition ease-in-out duration-[350ms] group-hover:text-orange-200">l</span>
            <span className="transition ease-in-out duration-[400ms] group-hover:text-orange-200">a</span>
            <span>&nbsp;</span>
            <span className="transition ease-in-out duration-[450ms] group-hover:text-orange-200">P</span>
            <span className="transition ease-in-out duration-[500ms] group-hover:text-orange-200">r</span>
            <span className="transition ease-in-out duration-[550ms] group-hover:text-orange-200">a</span>
            <span className="transition ease-in-out duration-[600ms] group-hover:text-orange-200">b</span>
            <span className="transition ease-in-out duration-[650ms] group-hover:text-orange-200">o</span>
            <span className="transition ease-in-out duration-[700ms] group-hover:text-orange-200">d</span>
            <span className="transition ease-in-out duration-[750ms] group-hover:text-orange-200">h</span>
            <span className="transition ease-in-out duration-[800ms] group-hover:text-orange-200">i</span>
            <span className="transition ease-in-out duration-[850ms] group-hover:text-orange-200">n</span>
            <span className="transition ease-in-out duration-[900ms] group-hover:text-orange-200">i</span>
            <span>&nbsp;</span>
            <span className="transition ease-in-out duration-[950ms] group-hover:text-orange-200">F</span>
            <span className="transition ease-in-out duration-[1000ms] group-hover:text-orange-200">o</span>
            <span className="transition ease-in-out duration-[1050ms] group-hover:text-orange-200">u</span>
            <span className="transition ease-in-out duration-[1100ms] group-hover:text-orange-200">n</span>
            <span className="transition ease-in-out duration-[1150ms] group-hover:text-orange-200">d</span>
            <span className="transition ease-in-out duration-[1200ms] group-hover:text-orange-200">a</span>
            <span className="transition ease-in-out duration-[1250ms] group-hover:text-orange-200">t</span>
            <span className="transition ease-in-out duration-[1300ms] group-hover:text-orange-200">i</span>
            <span className="transition ease-in-out duration-[1350ms] group-hover:text-orange-200">o</span>
            <span className="transition ease-in-out duration-[1400ms] group-hover:text-orange-200">n</span>
        </div>
    )
}

export default HomeLink;