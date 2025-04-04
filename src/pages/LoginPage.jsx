// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../components/Login/Login.module.css';

const LoginPage = ({ language, darkMode }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Login to Your Account",
      usernameLabel: "Mobile Number/User ID",
      passwordLabel: "Password",
      rememberMe: "Remember me",
      forgotPassword: "Forgot Password?",
      loginBtn: "Login",
      noAccount: "Don't have an account?",
      signUp: "Sign Up",
      errors: {
        username: "Please enter a valid mobile number or user ID",
        password: "Password must be at least 6 characters"
      }
    },
    hi: {
      title: "अपने खाते में लॉग इन करें",
      usernameLabel: "मोबाइल नंबर/यूज़र आईडी",
      passwordLabel: "पासवर्ड",
      rememberMe: "मुझे याद रखें",
      forgotPassword: "पासवर्ड भूल गए?",
      loginBtn: "लॉग इन",
      noAccount: "खाता नहीं है?",
      signUp: "साइन अप करें",
      errors: {
        username: "कृपया एक वैध मोबाइल नंबर या यूज़र आईडी दर्ज करें",
        password: "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए"
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!credentials.username.trim() || 
        (credentials.username.length < 10 && !credentials.username.includes('@'))) {
      newErrors.username = content[language].errors.username;
    }
    
    if (!credentials.password || credentials.password.length < 6) {
      newErrors.password = content[language].errors.password;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // On successful login:
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${styles.loginContainer} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <img 
            src="/images/zcv.png" 
            alt="Airtel Payments Bank" 
            className={styles.logo}
          />
          <h2>{content[language].title}</h2>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="username">{content[language].usernameLabel}</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              className={errors.username ? styles.errorInput : ''}
              placeholder={language === 'en' ? 'e.g. 9876543210' : 'जैसे 9876543210'}
            />
            {errors.username && <span className={styles.errorText}>{errors.username}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password">{content[language].passwordLabel}</label>
            <div className={styles.passwordInput}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className={errors.password ? styles.errorInput : ''}
              />
              <button
                type="button"
                className={styles.showPasswordBtn}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 
                  (language === 'en' ? 'Hide password' : 'पासवर्ड छिपाएं') : 
                  (language === 'en' ? 'Show password' : 'पासवर्ड दिखाएं')}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && <span className={styles.errorText}>{errors.password}</span>}
          </div>
          
          <div className={styles.rememberForgot}>
            <label className={styles.rememberMe}>
              <input type="checkbox" />
              <span>{content[language].rememberMe}</span>
            </label>
            <Link to="/forgot-password" className={styles.forgotPassword}>
              {content[language].forgotPassword}
            </Link>
          </div>
          
          <button 
            type="submit" 
            className={styles.loginButton}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className={styles.spinner}></span>
            ) : (
              content[language].loginBtn
            )}
          </button>
        </form>
        
        <div className={styles.signupLink}>
          <p>{content[language].noAccount}</p>
          <Link to="/signup" className={styles.signupButton}>
            {content[language].signUp}
          </Link>
        </div>
      </div>
      
      <div className={styles.loginGraphics}>
        <img 
          src={darkMode ? 
            "/images/zcv.png" : 
            "/images/alogo.png"} 
          alt="Banking illustration"
        />
      </div>
    </div>
  );
};

export default LoginPage;