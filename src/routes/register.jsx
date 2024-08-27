import React, { useState } from 'react';
import './register.css';
import './media.css';

const LoginPage = () => {
  const [accountType, setAccountType] = useState('staff');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a login check
    if (id === 'correctId' && password === 'correctPassword') {
      setError('');
      // Proceed with login
      console.log('Logged in successfully:', { accountType, id, password });
    } else {
      setError('Please check your Password and ID');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
       
        <h1>WeaYaa-Intranet</h1>
        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            <span className="error-text">{error}</span>
            <button className="error-close" onClick={() => setError('')}>✖</button>
          </div>
        )}
        <h2>Enter Your Account</h2>
        <p>Welcome Back, Please enter Your details</p>
        <div className="account-type">
          <button
            className={accountType === 'staff' ? 'active' : ''}
            onClick={() => handleAccountTypeChange('staff')}
          >
            Staff Account
          </button>
          <button
            className={accountType === 'master' ? 'active' : ''}
            onClick={() => handleAccountTypeChange('master')}
          >
            Master Account
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            WeaYaa ID
            <input type="text" value={id} onChange={handleIdChange} />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button type="submit">Continue</button>
        </form>
        <p className="lorem-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
