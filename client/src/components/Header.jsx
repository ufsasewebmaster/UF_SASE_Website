import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">SASELogo</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/programs">Programs</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/board">Board</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/directory">Directory</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
