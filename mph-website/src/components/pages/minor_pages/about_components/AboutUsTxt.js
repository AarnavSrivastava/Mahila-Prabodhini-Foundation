const TxtDisp = () =>
{
    return (
        <div className="px-[5vw] flex relative flex-col justify-start">
            <div className="font-poppins font-black lg:text-[4.3vw] text-[44px] pt-[5%] pb-[2.5%]">
                Who We Are
            </div>
            <div className="bg-magenta grow h-[1px]" />

            <div className="grid grid-cols-2 gap-[6vw] justify-center">
                <div className="pt-[2.5%] pb-[5%] font-poppins font-black lg:text-[1.4vw] text-[15px] leading-[4.5vw] text-magenta">
                    We are a team of change-makers who believe that every helping hand can help a person and create a better future for them
                </div>

                <div className="flex flex-col">
                    <div className="pt-[2.5%] pb-[5%] font-lato lg:text-[1.3vw] text-[14px] leading-[4.5vw] text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis fermentum nisi, eget tincidunt justo euismod ac. Sed faucibus risus justo, a finibus tortor condimentum non. Praesent vel nisl placerat, tincidunt odio in, viverra risus. Duis maximus blandit ultrices.
                    </div>
                    <div className="pt-[2.5%] pb-[5%] font-lato lg:text-[1.3vw] text-[14px] leading-[4.5vw] text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis fermentum nisi, eget tincidunt justo euismod ac. Sed faucibus risus justo, a finibus tortor condimentum non. Praesent vel nisl placerat, tincidunt odio in, viverra risus. Duis maximus blandit ultrices.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TxtDisp;