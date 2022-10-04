import ContactForm from "./contact_components/ContactForm";
import ImgBackground from "./contact_components/ImgBackground";

const Contact = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-[5vw]">
                <ImgBackground />
                <div className="grow">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact;