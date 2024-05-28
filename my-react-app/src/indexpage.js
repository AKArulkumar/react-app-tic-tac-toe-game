import React from 'react';
import { Link } from 'react-router-dom';
import "./css/indexpage.css";

function IndexPage() {
  return (
    <div className="index-page-container">
      <header>
        <h1>Welcome to Tic Tac Toe!</h1>
      </header>
      <main>
        <div className="login-button-container">
          <Link to="/login">
            <button className="login-button">
              <span className="login-text">Login</span>
              <span className="arrow-icon">&rarr;</span>
            </button>
          </Link>
        </div>
      </main>
      <footer>
        <p>Developed by Your Name</p>
      </footer>
    </div>
  );
}

export default IndexPage;