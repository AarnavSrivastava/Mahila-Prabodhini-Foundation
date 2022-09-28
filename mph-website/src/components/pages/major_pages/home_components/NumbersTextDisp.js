const TextDisp = () => {
    return (
        <div className="px-[15vw] py-[10%] flex flex-row gap-[10vw] justify-start items-center rounded-xl h-[100%]">
            <div className="flex basis-1/2 flex-col justify-start">
                <div className="font-poppins font-black lg:text-[4.3vw] text-[44px]">
                    Our numbers that speak
                </div>
                <div className="pb-[5%] font-lato lg:text-[1.3vw] text-[14px] leading-[4.5vw] text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis fermentum nisi, eget tincidunt justo euismod ac. Sed faucibus risus justo, a finibus tortor condimentum non. Praesent vel nisl placerat, tincidunt odio in, viverra risus. Duis maximus blandit ultrices.
                </div>
            </div>
            <div className="flex grid flex-col font-poppins lg:text-[4.3vw] text-[44px] font-black text-sand gap-y-[5vw] whitespace-nowrap">
                <div className="flex flex-row gap-x-[3vw]">
                    <div className="flex flex-col grow items-center">
                        $28
                        <div className="text-slate-600 lg:text-[1.3vw] text-[14px]">Funds Raised</div>
                        
                    </div>

                    <div className="flex flex-col grow items-center">
                        4000+
                        <div className="text-slate-600 lg:text-[1.3vw] text-[14px]">Happy Donators</div>
                        
                    </div>
                    
                </div>
                <div className="bg-sand w-[100%] grow h-[1px]"></div>
                <div className="flex flex-row gap-x-[3vw]">
                    <div className="flex flex-col grow items-center">
                        95K+
                        <div className="text-slate-600 lg:text-[1.3vw] text-[14px]">Members Worldwide</div>
                        
                    </div>

                    <div className="flex flex-col grow items-center">
                        100+
                        <div className="text-slate-600 lg:text-[1.3vw] text-[14px]">People Helped</div>
                        
                    </div>
                </div>
                <div className="bg-sand w-[100%] grow h-[1px]"></div>
            </div>
        </div>
    );
}

export default TextDisp;