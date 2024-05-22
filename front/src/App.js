import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import Login from './Login'; // Ensure this points to the correct file where your Login component is defined
import CreateCamera from './CreateCamera'; // CreateCamera component
import EditCamera from './EditCamera'; // EditCamera component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<MainPage />} />
                <Route path="/create-camera" element={<CreateCamera />} />
                <Route path="/edit-camera/:id" element={<EditCamera />} />
            </Routes>
        </Router>
    );
}

export default App;
