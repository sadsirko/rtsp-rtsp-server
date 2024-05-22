import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Custom CSS for Header

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="headerButton"><Link to="/profile">Profile</Link></div>
                <div className="headerButton"><Link to="/logout">Logout</Link></div>
            </nav>
        </header>
    );
}

export default Header;
