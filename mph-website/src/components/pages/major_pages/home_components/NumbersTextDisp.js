import { useSpring, animated, config } from 'react-spring'
import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';


const TextDisp = () => {

    return (
        <div className="w-[100%] px-[15vw] py-[10%] flex flex-row gap-[10vw] justify-start items-center rounded-xl h-[100%]">
            <div className="flex basis-1/2 flex-col justify-start">
                <div className="font-poppins font-black lg:text-[4.3vw] text-[44px]">
                    Our numbers that speak
                </div>
                <div className="pb-[5%] font-lato lg:text-[1.3vw] text-[14px] leading-[4.5vw] text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis fermentum nisi, eget tincidunt justo euismod ac. Sed faucibus risus justo, a finibus tortor condimentum non. Praesent vel nisl placerat, tincidunt odio in, viverra risus. Duis maximus blandit ultrices.
                </div>
            </div>
            <div className="basis-1/2 flex grid flex-col font-poppins lg:text-[4.3vw] text-[44px] font-black text-sand gap-y-[5vw] whitespace-nowrap">
                <div className="flex flex-row gap-x-[3vw]">
                    <div className="flex flex-col grow items-center">
                        <div className='flex flex-row'>
                            $
                            <Number number={200} />
                            +
                        </div>
                        <div className="text-slate-600 lg:text-[1.3vw] text-[14px]">Funds Raised</div>
                        
                    </div>

                    <div className="flex flex-col grow items-center">
                        <div className='flex flex-row'>
                            <Number number={4000} />
                            +
                        </div>
                        <div className="text-slate-600 lg:text-[1.3vw] text-[14px]">Happy Donators</div>
                        
                    </div>
                    
                </div>
                <div className="bg-sand lg:w-[30vw] w-[300px] grow h-[1px]"></div>
                <div className="flex flex-row gap-x-[3vw]">
                    <div className="flex flex-col grow items-center">
                        <div className='flex flex-row'>
                            <Number number={95} />
                            K+
                        </div>
                        <div className="text-slate-600 lg:text-[1.3vw] text-[14px]">Members Worldwide</div>
                        
                    </div>

                    <div className="flex flex-col grow items-center">
                        <div className='flex flex-row'>
                            <Number number={100} />
                            +
                        </div>
                        <div className="text-slate-600 lg:text-[1.3vw] text-[14px]">People Helped</div>
                        
                    </div>
                </div>
                <div className="bg-sand lg:w-[30vw] grow h-[1px]"></div>
            </div>
        </div>
    );
}



function Number(props) {
    
    const [inView, setAppear] = useState(false);

    const handleAppear = () => {
        if (inView === false)
            setAppear(prev => !prev)
    }

    const { number } = useSpring({
        reset: inView,
        reverse: false,
        from: { number: 0 },
        number: props.number,
        delay: 100,
        config: config.molasses,
    })

    return (
    
        <div className="flex flex-row ">
            <VisibilitySensor onChange={() => handleAppear()}>
                <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
            </VisibilitySensor>
        </div>
    
    )
}

export default TextDisp;