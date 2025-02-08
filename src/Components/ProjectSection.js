
import './ComponentStyles.css'


export function ProjectSectionRight({ image, title, text, link }) {
    return (
        <div>
            <h2 className="project-title">{title}</h2>
            <div className="section">
                <img src={image} alt={title} className="project-image" />
                <div className="project-content right">
                    <p className="paragraph">{text}</p>
                    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>
            </div>
        </div>
    );
}

export function ProjectSectionLeft({ image, title, text, link }) {
    return (
        <div>
            <h2 className="project-title">{title}</h2>
            <div className="section">
                <div className="project-content left">
                    <p className="paragraph">{text}</p>
                    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>
                <img src={image} alt={title} className="project-image" />
            </div>
        </div>
    );
}