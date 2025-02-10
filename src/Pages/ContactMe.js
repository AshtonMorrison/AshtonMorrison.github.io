
import Resume from '../Resume.pdf'
import ContactForm from '../Components/ContactForm.js'

export default function ContactMe(){
    return (
        <div className="container">
            <p className = 'paragraph'>Place Holder. Place Holder. Place Holder. Place Holder. Place Holder. Place Holder. 
                Place Holder. Place Holder. Place Holder. Place Holder. Place Holder. Place Holder. Place Holder. </p>

                <div className="section links">
                    <a className="contact-link" href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>

                    <a className="contact-link" href={"https://github.com/AshtonMorrison"} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>

                <ContactForm />
        </div>

    )
}