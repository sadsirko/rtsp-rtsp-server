import React from 'react';
import CameraList from './CameraList';
import Header from './Header';
import Sidebar from './Sidebar';
import './MainPage.css';

function MainPage() {
    return (
        <div className="main-container">
            <Header />
            <div className="content-container">
                <Sidebar />
                <div className="main-content">
                    <CameraList />
                </div>
            </div>
        </div>
    );
}

export default MainPage;
