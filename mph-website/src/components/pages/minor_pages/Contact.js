import ContactForm from "./contact_components/ContactForm";
import ImgBackground from "./contact_components/ImgBackground";

const Contact = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-[5vw]">
                <ImgBackground />
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;