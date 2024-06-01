import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css'; // Custom CSS for Sidebar

function Sidebar() {
    return (
        <aside className="sidebar">
            <Link to="/create-camera" className="sidebar-link">Connect Camera</Link>
            <Link to="/create-user" className="sidebar-link">Create User</Link>
            <Link to="/manage-users" className="sidebar-link">Manage Users</Link>
            <Link to="/stats" className="sidebar-link">View Stats</Link>
        </aside>
    );
}

export default Sidebar;
