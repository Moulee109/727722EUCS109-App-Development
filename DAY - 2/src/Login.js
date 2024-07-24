import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-background">
      <div className="container">
        <h1 className="animated-heading">
          <span className="highlight">L</span>ogin
        </h1>
        <div className="input-container">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className="primary-button">Login</button>
        <p></p>
        <p></p>
        <div className="signup-container">
          <button className="secondary-small" onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
