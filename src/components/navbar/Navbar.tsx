import "./navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-box">
            <h1>Word Oasis</h1>
            <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/posts">All posts</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <a href="#footer">Subscribe</a>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;