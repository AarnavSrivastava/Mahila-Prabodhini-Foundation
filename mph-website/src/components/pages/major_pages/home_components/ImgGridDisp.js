import ngopic1 from '../../../images/ngopic1.png'
import ngopic5 from '../../../images/ngopic5.png'
import ngopic6 from '../../../images/ngopic6.png'

const ImgGridDisp = () => {
    return (
        <div className="grid grid-flow-col gap-[1.5vw] px-[10vw] pb-[10%]">
            <img className="grow" src={ngopic1} id="vendor" alt="Gram Bazaar Vendor"/>
            <img className="grow" src={ngopic5} id="vendor" alt="Gram Bazaar Vendor"/>
            <img className="grow" src={ngopic6} id="vendor" alt="Gram Bazaar Vendor"/>
        </div>
    )
}

export default ImgGridDisp;