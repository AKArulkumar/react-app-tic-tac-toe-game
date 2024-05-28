

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './loginpage';
import IndexPage from './indexpage';
import RegistrationPage from './registerpage';
import Game from './Game';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegistrationPage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;