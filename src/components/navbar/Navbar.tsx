import { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    return (
        <div className="navbar-box">
            <h1>Word Oasis</h1>
            <nav>
                <button className="navbar-button" onClick={() => setSidebar(true)}>
                    <img src="../menu-icon.svg" className="navbar-icon" alt="" role="img"></img>
                </button>
                {sidebar && 
                <nav className="sidebar">
                    <div className="sidebar-wrap">
                        <button onClick={() => setSidebar(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="2.3em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        </button>
                        <ul className="sidebar-links">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/posts">All posts</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </ul>
                    </div>
                </nav>}
                <ul className="navigation-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/posts">All posts</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
