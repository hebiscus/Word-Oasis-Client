import DefaultButton from "../defButton";
import "./footer.scss";


function Footer() {
    return (
        <div id="footer">
            <div className="newsletter-box">
                <h2>Sign up to my newsletter:</h2>
                <form method="POST" action="">
                    <input type="email" placeholder="Enter your email"></input>
                    <DefaultButton>Subscribe</DefaultButton>
                </form>
                <p>For more literary inspiration</p>
            </div>
            <div className="footerInfo">
                <p>Word Oasis</p>
                <p>Your place to dive into word's refinement</p>
            </div>
            <div className="footerLinks">
                <a>About me</a>
                <a>Resources</a>
                <a>Social</a>
                <a>Legal</a>
                <a>Press</a>
                <a>News</a>
                <a>Contact</a>
                <a>LinkedIn</a>
                <a>Privacy</a>
            </div>
        </div>
    )
}

export default Footer;