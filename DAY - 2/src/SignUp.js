// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import the CSS file

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Perform sign-up operation (e.g., API call)
    const userData = { email }; // Example user data
    // Simulate successful sign-up and navigate to home
    navigate('/home');
  };

  return (
    <div className="signup-background">
      <div className="container">
        <h1 className="animated-heading">
          <span className="highlight">S</span>ign 
          <span className="highlight"> U</span>p
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
          <label>New Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className="primary-button" onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
