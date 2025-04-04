// components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ language }) => {
  const footerContent = {
    en: {
      links: [
        { title: "Accounts", items: ["Savings", "Current", "Fixed Deposit"] },
        { title: "Services", items: ["UPI", "Bill Payments", "Loans"] },
        { title: "Company", items: ["About Us", "Careers", "Contact"] }
      ],
      copyright: "© 2023 Airtel Payments Bank. All rights reserved."
    },
    hi: {
      links: [
        { title: "खाते", items: ["बचत", "चालू", "सावधि जमा"] },
        { title: "सेवाएं", items: ["UPI", "बिल भुगतान", "ऋण"] },
        { title: "कंपनी", items: ["हमारे बारे में", "करियर", "संपर्क करें"] }
      ],
      copyright: "© 2023 एयरटेल पेमेंट्स बैंक। सर्वाधिकार सुरक्षित।"
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoColumn}>
          <img 
            src="/images/alogo.png" 
            alt="Airtel Payments Bank" 
            className={styles.logo}
          />
          <p className={styles.tagline}>
            {language === 'en' 
              ? "Banking made simple for everyone" 
              : "सभी के लिए सरल बैंकिंग"}
          </p>
        </div>
        
        <div className={styles.linksContainer}>
          {footerContent[language].links.map((column) => (
            <div key={column.title} className={styles.linkColumn}>
              <h4>{column.title}</h4>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.copyright}>
        {footerContent[language].copyright}
      </div>
    </footer>
  );
};

export default Footer;