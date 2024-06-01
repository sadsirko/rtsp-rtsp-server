import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/CreateUser.css'; // Переконайтеся, що стилі підходять для нових елементів форми

function CreateUser() {
    const [userLogin, setUserLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [roleId, setRoleId] = useState('');
    const [roles, setRoles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchRoles() {
            const response = await axios.get('http://localhost:8080/api/roles');
            setRoles(response.data);
            if (response.data.length > 0) {
                setRoleId(response.data[0].roleId);
            }
        }
        fetchRoles();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Regex to check for alphanumeric characters only
        const validUsername = /^[a-zA-Z0-9]+$/.test(userLogin);
        const validPassword = /^[a-zA-Z0-9]+$/.test(password);

        if (!validUsername || userLogin.length < 4 || userLogin.length > 20) {
            alert('Username must be between 4 and 20 alphanumeric characters.');
            return;
        }
        if (!validPassword || password.length < 8) {
            alert('Password must be at least 8 alphanumeric characters long.');
            return;
        }

        try {
            await axios.post('http://localhost:8080/api/users', { userLogin, password, roleId: parseInt(roleId) });
            alert('User successfully added!');
            navigate('/');
        } catch (error) {
            console.error('Error creating user:', error);
            alert('Failed to create user!');
        }
    };

    return (
        <div className="form-container">
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Login:</label>
                    <input
                        type="text"
                        value={userLogin}
                        onChange={e => setUserLogin(e.target.value)}
                        placeholder="Enter alphanumeric username"
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter alphanumeric password"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"} Password
                    </button>
                </div>
                <div className="form-group">
                    <label>Role:</label>
                    <select value={roleId} onChange={e => setRoleId(e.target.value)}>
                        {roles.map((role) => (
                            <option key={role.roleId} value={role.roleId}>{role.roleName}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Create User</button>
            </form>
        </div>
    );
}


export default CreateUser;
