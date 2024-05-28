import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    if (password === confirmPassword) {
      // submit registration form
      console.log('Registration form submitted:', { name, email, password });
      // Redirect to login page after successful registration
      navigate('/login'); // Navigate to the login page
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <section className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#eee' }}>
      <div className="card text-black" style={{ borderRadius: '25px', maxWidth: '600px', width: '100%' }}>
        <div className="card-body p-md-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Sign up</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
              <input type="text" className="form-control" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-4">
              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
              <input type="email" className="form-control" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-4">
              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
              <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mb-4">
              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
              <input type="password" className="form-control" placeholder="Repeat your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">Register</button>
            </div>
          </form>
          <div className="mt-3 text-center">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
