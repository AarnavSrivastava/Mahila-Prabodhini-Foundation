import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IconContext } from "react-icons"
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi"
import Popup from 'reactjs-popup';
import './Popup.css'


const ContactForm = () => {
    const form = useRef();

    const [successful, setSuccessful] = useState(null);

    const [badge1, setBadge1] = useState("border-slate-200 transition ease-in-out focus:bg-slate-100");
    const [badge2, setBadge2] = useState("border-slate-200 transition ease-in-out focus:bg-slate-100");
    const [badge3, setBadge3] = useState("border-slate-200 transition ease-in-out focus:bg-slate-100");
    const [badge4, setBadge4] = useState("border-slate-200 transition ease-in-out focus:bg-slate-100");

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

        if (first_name === "")
        {
            setBadge1("border-rose-500")
            setSuccessful(null);
        }
        else
        {
            setBadge1("border-slate-200")
        }

        if (last_name === "")
        {
            setBadge2("border-rose-500")
            setSuccessful(null);
        }
        else
        {
            setBadge2("border-slate-200")
        }

        if (!validEmail.test(email))
        {
            setBadge3("border-rose-500")
            setSuccessful(null);
        }
        else
        {
            setBadge3("border-slate-200")
        }

        if (message === "")
        {
            setBadge4("border-rose-500")
            setSuccessful(null);
        }
        else
        {
            setBadge4("border-slate-200")
        }

        if (first_name !== "" && last_name !== "" && validEmail.test(email) && message !== "")
        {
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                setSuccessful(true);
            }, (error) => {
                setSuccessful(false);
            });

            e.target.reset();
        }
    };

    return (
        <div className="w-screen flex flex-row mb-[10vw] justify-center px-[8vw] gap-[12vw]">
            <div className="basis-0 grow flex flex-col items-start justify-start font-opensans font-light text-slate-500 lg:text-[1vw] text-[10px]">
                <div className="font-poppins font-black text-[3vw] text-black">Get In Touch</div>
                <div className="mt-[4vw] mb-[2vw] flex flex-row gap-[0.5vw] items-center">
                    <IconContext.Provider
                        value={{ color: 'purple' }}
                    >
                        <FiMapPin className="w-[5vw]" />
                    </IconContext.Provider>
                    Raja Vijaypur Kothi, Civil Lines, Mirzapur, Uttar Pradesh
                </div>
                <div className="my-[2vw] flex flex-row gap-[0.5vw] justify-start items-center">
                    <IconContext.Provider
                        value={{ color: 'purple' }}
                    >
                        <FiMail className="w-[5vw]" />
                    </IconContext.Provider>
                    prabodhini.mpf@gmail.com
                </div>
                <div className="mt-[2vw] flex flex-row gap-[0.5vw] items-center ">
                    <IconContext.Provider
                        value={{ color: 'purple' }}
                    >
                        <FiPhone className="w-[5vw]" />
                    </IconContext.Provider>
                    05442 257 221
                </div>
            </div>

            <div className="basis-0 grow flex flex-col">
                <div className="font-poppins font-black lg:text-[3vw] text-[30px] mb-[2vw]">Message Us</div>
                <form ref={form} id="contact_form" onSubmit={sendEmail} className="flex flex-col relative items-start font-opensans font-light gap-[2vh] lg:text-[1.5vw] text-[16px]">
                    <div className="relative grow grid grid-cols-2 gap-[2vw]">
                        <input onChange={e => setFirstName(e.target.value)} type="text" name="first_name" placeholder="First Name" className={"border p-[1vw] " + badge1}/>
                        <input onChange={e => setLastName(e.target.value)} type="text" name="last_name" placeholder="Last Name" className={"border p-[1vw] " + badge2}/>
                        {badge1 === "border-rose-500" && <p className="px-[0.4vw] absolute -translate-x-[0.1vw] -translate-y-[0.6vw] text-red-500 bg-white text-[0.8vw] italic">Please enter a first name</p>}
                        {badge2 === "border-rose-500" && <p className="px-[0.4vw] absolute translate-x-[18.9vw] -translate-y-[0.6vw] text-red-500 bg-white text-[0.8vw] italic">Please enter a last name</p>}
                    </div>
                    <div className="relative w-[100%]">      
                        <input onChange={e => setEmail(e.target.value)} type="email" name="reply_to" placeholder="Email" className={"w-[100%] border p-[1vw] " + badge3}/>
                        {badge3 === "border-rose-500" && <p className="px-[0.4vw] text-red-500 absolute -translate-x-[0.1vw] -translate-y-[5vw] bg-white text-[0.8vw] italic">Please enter an email address</p>}
                    </div>
                    <div className="relative w-[100%]">
                        <textarea onChange={e => setMessage(e.target.value)} type="text" name="message" placeholder="Message" className={"w-[100%] border p-[1vw] " + badge4} rows="10"/>
                        {badge4 === "border-rose-500" && <p className="px-[0.4vw] absolute -translate-x-[0.1vw] -translate-y-[25.8vw] text-red-500 bg-white text-[0.8vw] italic">Please enter a message</p>}
                    </div>
                    
                    <Popup position="right bottom" closeOnDocumentClick className="flex flex-col" trigger={<button type="submit" className="border xl:text-[16px] font-opensans text-[1.2vw] tracking-widest font-bold px-[1.8vw] py-[1vw] xl:px-[24px] xl:py-[12px] justify-center items-center transition hover:-translate-y-1 hover:scale-100 text-magenta ease-in-out delay-[10ms] bg-white hover:text-orange-200 hover:bg-magenta duration-300">SUBMIT</button>}>
                        {(successful) && <div className="flex flex-row justify-center items-center gap-[1vw] border-2 border-black text-black text-[1vw] rounded-md p-[1vw] ">
                            Email Sent!
                        </div>}
                        {(!successful) && <div className="flex flex-row justify-center items-center gap-[1vw] border-2 border-red-600 text-red-600 text-[1vw] rounded-md p-[1vw] ">
                            An error occurred in sending the email - try again later
                        </div>}
                    </Popup>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;