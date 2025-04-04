// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ darkMode, toggleDarkMode, language, setLanguage, isLoggedIn, onLogout }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img 
            src="/images/alogo.png" 
            alt="Airtel Payments Bank" 
            className={styles.logo}
          />
        </Link>
      </div>
      
      <nav className={styles.nav}>
        {/* Language Toggle */}
        <button 
          className={styles.langToggle}
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          aria-label={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
        >
          {language === 'en' ? 'हिंदी' : 'English'}
        </button>
        
        {/* Dark/Light Mode Toggle */}
        <button 
          className={styles.themeToggle}
          onClick={toggleDarkMode}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        
        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <Link to="/features" className={styles.navLink}>
            {language === 'en' ? 'Features' : 'सुविधाएँ'}
          </Link>
          <Link to="/business" className={styles.navLink}>
            {language === 'en' ? 'Business' : 'व्यवसाय'}
          </Link>
          <Link to="/support" className={styles.navLink}>
            {language === 'en' ? 'Support' : 'सहायता'}
          </Link>
        </div>
        
        {/* User Actions */}
        {isLoggedIn ? (
          <div className={styles.userDropdown}>
            <button className={styles.userButton}>
              <span className={styles.userInitial}>U</span>
            </button>
            <div className={styles.dropdownContent}>
              <Link to="/dashboard" className={styles.dropdownItem}>
                {language === 'en' ? 'Dashboard' : 'डैशबोर्ड'}
              </Link>
              <Link to="/profile" className={styles.dropdownItem}>
                {language === 'en' ? 'Profile' : 'प्रोफ़ाइल'}
              </Link>
              <button 
                onClick={onLogout} 
                className={styles.dropdownItem}
              >
                {language === 'en' ? 'Logout' : 'लॉग आउट'}
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.authButtons}>
            <Link to="/login" className={styles.loginBtn}>
              {language === 'en' ? 'Login' : 'लॉग इन'}
            </Link>
            <Link to="/signup" className={styles.signupBtn}>
              {language === 'en' ? 'Sign Up' : 'साइन अप'}
            </Link>
          </div>
        )}
      </nav>
      
      {/* Mobile Menu Button (hidden on desktop) */}
      <button className={styles.menuButton} aria-label="Menu">
        <span className={styles.menuIcon}></span>
      </button>
    </header>
  );
};

export default Header;