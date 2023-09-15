import DefaultButton from "../defButton";
import "./footer.scss";


function Footer() {
    
    function handleNewsletter(event: React.FormEvent) {
        event.preventDefault();
    }

    return (
        <div id="footer">
            <div className="newsletter-box">
                <hr className="breakline"></hr>
                <span>Sign up to my newsletter:</span>
                <form onSubmit={handleNewsletter} className="newsletter-form">
                    <input type="email" placeholder="Enter your email"></input>
                    <DefaultButton btnType="submit">Subscribe</DefaultButton>
                </form>
                <span>For more literary inspiration</span>
            </div>
            <div className="footerInfo">
                <span>Word Oasis</span>
                <p>Your place to dive into word's refinement</p>
            </div>
            <div className="footerLinks">
                <table>
                    <thead>
                        <tr>
                            <td><a>About me</a></td>
                            <td><a>Social</a></td>
                            <td><a>Legal</a></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a>Press</a></td>
                            <td><a>Github</a></td>
                            <td><a>Terms</a></td>
                        </tr>
                        <tr>
                            <td><a>News</a></td>
                            <td><a>LinkedIn</a></td>
                            <td><a>Privacy</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Footer;