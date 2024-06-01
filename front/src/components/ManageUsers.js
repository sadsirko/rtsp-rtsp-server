// ManageUsers.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ManageUsers() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('http://localhost:8080/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('There was an error fetching the users!', error);
            }
        }
        fetchUsers();
    }, []);

    const handleEdit = (userId) => {
        navigate(`/edit-user/${userId}`);
    };

    const handleDelete = async (userId) => {
        try {
            await axios.delete(`http://localhost:8080/api/users/${userId}`);
            setUsers(users.filter(user => user.userId !== userId));
        } catch (error) {
            console.error("There was an error deleting the user!", error);
        }
    };

    return (
        <div className="container">
            {users.map(user => (
                <div key={user.userId} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{user.userLogin}</h5>
                        <div className="btn-group">
                            <button className="btn btn-primary" onClick={() => handleEdit(user.userId)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => handleDelete(user.userId)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ManageUsers;
