// EditUser.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState('');
    const [roleId, setRoleId] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/users/${id}`);
                setUserLogin(response.data.userLogin);
                setRoleId(response.data.roleId);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };
        fetchUser();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/users/${id}`, { userLogin, roleId: parseInt(roleId) });
            alert('User updated successfully!');
            navigate('/manage-users');
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user!');
        }
    };

    return (
        <div className="form-container">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Login:</label>
                    <input
                        type="text"
                        value={userLogin}
                        onChange={(e) => setUserLogin(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Role ID:</label>
                    <input
                        type="number"
                        value={roleId}
                        onChange={(e) => setRoleId(e.target.value)}
                    />
                </div>
                <button type="submit">Update User</button>
            </form>
        </div>
    );
}

export default EditUser;
