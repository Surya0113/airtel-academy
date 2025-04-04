// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage.jsx';
import './styles/global.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Router>
        <Routes>
          <Route path="/" element={
            <HomePage 
              darkMode={darkMode} 
              toggleDarkMode={() => setDarkMode(!darkMode)}
              language={language}
              setLanguage={setLanguage}
            />
          } />
          <Route path="/login" element={
            <LoginPage 
              darkMode={darkMode}
              language={language}
            />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;