function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/login', { username, password });
            console.log('Login successful:', response.data);
            navigate('/dashboard');  // Adjust this as necessary to point to the user's landing page post-login
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed!');
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"} Password
                    </button>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
