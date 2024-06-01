import axios from 'axios';
import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', {
                username,
                password
            }, {
                auth: {
                    username,
                    password
                }
            });
            console.log('Login successful', response.data);
            // Handle login success
        } catch (error) {
            console.error('Login error', error);
            // Handle login error
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
