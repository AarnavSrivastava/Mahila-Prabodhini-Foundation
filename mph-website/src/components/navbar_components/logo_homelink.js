import Logo from '../logo.svg';

const HomeLink = () => {
    return (
        <div className="flex group flex-row justify-start items-center gap-[0.5vw] my-[1vw]">
            <img className="group-hover:animate-spin w-[3vw]" src={Logo} id="logo" alt="logo"/>
            <div className="md:text-[1.7vw] text-[16px] flex-row group font-lato font-bold">
                <TextSpans />
            </div>
        </div>
    )
}

const TextSpans = () => {
    return (
        <div>
            <span className="transition ease-in-out duration-[150ms] group-hover:text-defpink">M</span>
            <span className="transition ease-in-out duration-[200ms] group-hover:text-defpink">a</span>
            <span className="transition ease-in-out duration-[250ms] group-hover:text-defpink">h</span>
            <span className="transition ease-in-out duration-[300ms] group-hover:text-defpink">i</span>
            <span className="transition ease-in-out duration-[350ms] group-hover:text-defpink">l</span>
            <span className="transition ease-in-out duration-[400ms] group-hover:text-defpink">a</span>
            <span>&nbsp;</span>
            <span className="transition ease-in-out duration-[450ms] group-hover:text-defpink">P</span>
            <span className="transition ease-in-out duration-[500ms] group-hover:text-defpink">r</span>
            <span className="transition ease-in-out duration-[550ms] group-hover:text-defpink">a</span>
            <span className="transition ease-in-out duration-[600ms] group-hover:text-defpink">b</span>
            <span className="transition ease-in-out duration-[650ms] group-hover:text-defpink">o</span>
            <span className="transition ease-in-out duration-[700ms] group-hover:text-defpink">d</span>
            <span className="transition ease-in-out duration-[750ms] group-hover:text-defpink">h</span>
            <span className="transition ease-in-out duration-[800ms] group-hover:text-defpink">i</span>
            <span className="transition ease-in-out duration-[850ms] group-hover:text-defpink">n</span>
            <span className="transition ease-in-out duration-[900ms] group-hover:text-defpink">i</span>
            <span>&nbsp;</span>
            <span className="transition ease-in-out duration-[950ms] group-hover:text-defpink">F</span>
            <span className="transition ease-in-out duration-[1000ms] group-hover:text-defpink">o</span>
            <span className="transition ease-in-out duration-[1050ms] group-hover:text-defpink">u</span>
            <span className="transition ease-in-out duration-[1100ms] group-hover:text-defpink">n</span>
            <span className="transition ease-in-out duration-[1150ms] group-hover:text-defpink">d</span>
            <span className="transition ease-in-out duration-[1200ms] group-hover:text-defpink">a</span>
            <span className="transition ease-in-out duration-[1250ms] group-hover:text-defpink">t</span>
            <span className="transition ease-in-out duration-[1300ms] group-hover:text-defpink">i</span>
            <span className="transition ease-in-out duration-[1350ms] group-hover:text-defpink">o</span>
            <span className="transition ease-in-out duration-[1400ms] group-hover:text-defpink">n</span>
        </div>
    )
}

export default HomeLink;