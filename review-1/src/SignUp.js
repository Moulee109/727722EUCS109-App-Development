import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css'; 
import { useAuth } from './AuthContext';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const setUser = useAuth();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/users');
      const users = await response.json();
      const existingUser = users.find(u => u.email === email);

      if (existingUser) {
        setError('Email already in use');
        navigate('/login');
        return;
      }

      await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, role: 'user' })
      });
      setUser("user");
      navigate("/Dashboard");
    } catch (err) {
      // setError('An error occurred');
    }
  };

  return (
    <div className="signup-background">
      <div className="container1">
        <h1>Sign Up</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            className='button1'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={password}
            className='button1'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            className='button1'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
