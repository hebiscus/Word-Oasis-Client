import "./contact.scss";

function Contact() {
    return (
        <div className="contact-main">
            <p>
                If you'd like to reach out, whether it be work or just casual chat related, I'm available on several platforms:
            </p>
            <div className="contact-links">
                <div className="github-link-box">
                    <img src="../github-logo.png" alt="discord logo"/>
                    <a>github.com/hebiscus</a>
                </div>
                <div className="linkedin-link-box">
                    <img src="../linkedin-logo.png" />
                    <a>linkedin.com/in/katarzyna-gasiorek/</a>
                </div>
                <div className="discord-link-box">
                    <img src="../discord-logo.png" />
                    <span>hebiscus.</span>
                    <span>(don't forget about the comma at the end)</span>
                </div>
            </div>
        </div>
    )
}

export default Contact;