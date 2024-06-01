// Layout.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../css/Layout.css'; // Додано імпорт CSS

const Layout = ({ children }) => (
    <div>
        <Header className="header-main" />
        <div className="main-container">

            <div className="content-container">
                <Sidebar />
        <div className="main-content">
            {children}
        </div>
        </div>
        </div>
    </div>
);

export default Layout;
