import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'; // Завантаження CSS для Header

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="headerButton right"><Link to="/">Home</Link></div> {/* Додано кнопку Home */}
                <div className="headerButton right"><Link to="/profile">Profile</Link></div>
                <div className="headerButton right"><Link to="/logout">Logout</Link></div>
            </nav>
        </header>
    );
}

export default Header;
