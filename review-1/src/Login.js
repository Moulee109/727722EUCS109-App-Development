import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useAuth } from './AuthContext';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {setUser} = useAuth();
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/admins');
      const admins = await response.json();
      const admin = admins.find(a => a.email === email && a.password === password);
      if (admin) {
        localStorage.setItem('user', JSON.stringify(admin));
        setUser('admin')
        console.log(admin);
        navigate('/dashboard');
        return;
      }

      const usersResponse = await fetch('http://localhost:5000/users');
      const users = await usersResponse.json();

      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setUser('user')
        navigate('/dashboard');
        return;
      }

      setError('Invalid credentials');
    } catch (err) {
      setError('An error occurred');
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-background">
      <div className="container21">
        <div className="left21">
          <p className="monash-heading21">Sign in</p>
          <p>to access Inventory</p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button onClick={handleLogin} className="primary-button21">
            Login
          </button>
          <div className="signup-container">
            <p>
              Don't have an account?{' '}
              <span className="secondary-small" onClick={handleSignup} style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}>
                Signup
              </span>
            </p>
          </div>
        </div>
        <div className="right21">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzoeBdl1rocMv8k8rSDjSxoW_QO4-jZz5dMA&s"
            width="350"
            height="450"
            alt="Login illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
