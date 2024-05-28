/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./css/loginpage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(`Username: ${username}, Password: ${password}`);
    navigate('/game');
  }

  return (
    <section className="container">
      <div className="login-container">
        <div className="circle circle-one"></div>
        <div className="form-container">
          <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
          <h1 className="opacity">LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="USERNAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="opacity">SUBMIT</button>
          </form>
          <div className="register-forget opacity">
            <Link to="/registerpage">REGISTER</Link>
            <Link to="/forgot-password">FORGOT PASSWORD</Link>
          </div>
        </div>
        <div className="circle circle-two"></div>
      </div>
      <div className="theme-btn-container"></div>
    </section>
  );
}

export default LoginPage;
