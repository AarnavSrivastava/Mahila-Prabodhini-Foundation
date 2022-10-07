import React from 'react';

import ngopic1 from '../../../images/ngopic1.png'
import ngopic2 from '../../../images/ngopic2.png'
import ngopic4 from '../../../images/ngopic4.png'
import ngopic5 from '../../../images/ngopic5.png'
import ngopic6 from '../../../images/ngopic6.png'
import ngopic7 from '../../../images/ngopic7.png'

const ImgGridDisp = () =>
{
    return (
        <div className="grid grid-cols-4 gap-x-[1.5%] gap-y-[2.5%] px-[10vw] pb-[10%]">
            <img className="col-span-2 w-[100%] h-[100%]" src={ngopic2} id="vendor" alt="Vendors 1"/>
            <img className="w-[100%] h-[100%]" src={ngopic1} id="vendor" alt="Vendors 2"/>
            <img className="w-[100%] h-[100%]" src={ngopic5} id="vendor" alt="Vendors 3"/>
            <img className="w-[100%] h-[100%]" src={ngopic6} id="vendor" alt="Vendors 4"/>
            <img className="w-[100%] h-[100%]" src={ngopic7} id="vendor" alt="Vendors 5"/>
            <img className="col-span-2 w-[100%] h-[100%]" src={ngopic4} id="vendor" alt="Vendors 6"/>
        </div>
    )
}

export default ImgGridDisp;