
import Resume from '../Resume.pdf'
import ContactForm from '../Components/ContactForm.js'

export default function ContactMe(){
    return (
        <div className="container">
            <p className = 'paragraph'>Well, I'm surprised you actually want to get in touch. If that's the case, you came to the 
                right page! Listed below are a few important links. One of which is my resume, which holds my email and phone number,
                and the other 2 are my GitHub and LinkedIn profiles. If you want to quickly reach out to me, however, feel free to use 
                the contact form below. I'll get back to you as soon as I can!
            </p>

                <div className="section links">
                    <a className="contact-link" href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>

                    <a className="contact-link" href={"https://github.com/AshtonMorrison"} target="_blank" rel="noopener noreferrer">GitHub</a>

                    {/*Place Holder is Github as I don't have a LinkedIn account yet*/}
                    <a className="contact-link" href={"https://github.com/AshtonMorrison"} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>

                <ContactForm />
        </div>

    )
}