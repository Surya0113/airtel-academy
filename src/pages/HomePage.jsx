import React from 'react';
import Header from '../components/Header/Header.jsx';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import QuickActions from '../components/QuickActions/QuickActions.jsx';
import AccountFeatures from '../components/AccountFeatures/AccountFeatures.jsx';
import BusinessSolutions from '../components/BusinessSolutions/BusinessSolutions';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Footer from '../components/Footer/Footer.jsx';

const HomePage = ({ darkMode, toggleDarkMode, language, setLanguage }) => {
  return (
    <>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <HeroBanner language={language} />
        <QuickActions language={language} />
        <AccountFeatures language={language} />
        <BusinessSolutions language={language} />
        <Testimonials language={language} />
      </main>
      <Footer language={language} />
    </>
  );
};

export default HomePage;