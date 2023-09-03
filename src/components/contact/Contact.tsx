

function Contact() {
    return (
        <>
            <p>
                If you'd like to reach out, whether it be work or just casual chat related, I'm available on several platforms:
            </p>
            <div className="contact-links">
                <div className="github-link-box">
                    <img src="../github-logo.png" alt="discord logo"/>
                    <a>Github: https://github.com/hebiscus</a>
                </div>
                <div className="linkedin-link-box">
                    <img src="../linkedin-logo.png" />
                    <a>Linkedin: https://www.linkedin.com/in/katarzyna-gasiorek/</a>
                </div>
                <div className="discord-link-box">
                    <img src="../discord-logo.png" />
                    <span>Discord: hebiscus.</span>
                </div>
            </div>
        </>
    )
}

export default Contact;