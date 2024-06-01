import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import MainPage from './MainPage';
import Login from './components/Login'; // Ensure this points to the correct file where your Login component is defined
import CreateCamera from './components/CreateCamera'; // CreateCamera component
import EditCamera from './components/EditSettings';
import CreateUser from "./components/CreateUser";
import ManageUsers from "./components/ManageUsers"; // EditCamera component
import Layout from './components/Layout';
function App() {
    return (
        <Router>
        <Layout>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<MainPage />} />
                <Route path="/create-camera" element={<CreateCamera />} />
                <Route path="/edit-camera/:id" element={<EditCamera />} />
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/manage-users" element={<ManageUsers />} />
            </Routes>
            </Layout>
        </Router>
            );
}

export default App;
