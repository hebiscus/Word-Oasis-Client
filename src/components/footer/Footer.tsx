import DefaultButton from "../defButton";

function Footer() {
    return (
        <div id="footer">
            <div className="newsletter-box">
                <h2>Sign up to my newsletter:</h2>
                <form method="POST" action="">
                    <input type="email" placeholder="Enter your email"></input>
                    <DefaultButton>Subscribe</DefaultButton>
                </form>
                <p>for more literary inspiration</p>
            </div>
        </div>
    )
}

export default Footer;