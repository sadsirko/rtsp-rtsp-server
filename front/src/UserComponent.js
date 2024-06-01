import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await axios.get('/api/users');
        setUsers(response.data);
    };

    const updateUser = async (user) => {
        const response = await axios.put(`/api/users/${user.userId}`, user);
        fetchUsers(); // Перезавантажити дані після оновлення
    };

    return (
        <div>
            {users.map(user => (
                <div key={user.userId}>
                        <p>{user.userLogin}</p>
                        <button onClick={() => updateUser({ ...user, userLogin: 'NewLogin' })}>Update Login</button>
                </div>
            ))}
                </div>
                );
            };

export default UsersComponent;
