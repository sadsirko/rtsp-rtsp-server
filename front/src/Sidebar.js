import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Custom CSS for Sidebar

function Sidebar() {
    return (
        <aside className="sidebar">
            <Link to="/create-camera" className="sidebar-link">Create Camera</Link>
            <Link to="/create-user" className="sidebar-link">Create User</Link>
            <Link to="/stats" className="sidebar-link">View Stats</Link>
        </aside>
    );
}

export default Sidebar;
