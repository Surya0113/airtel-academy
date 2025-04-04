// components/HeroBanner/HeroBanner.jsx
import React from 'react';
import styles from './HeroBanner.module.css';

const HeroBanner = ({ language }) => {
  const content = {
    en: {
      title: "Banking for Everyone, Everywhere",
      subtitle: "Zero-balance accounts | Instant UPI | 24/7 Support",
      cta1: "Open Account Now",
      cta2: "Explore Features →"
    },
    hi: {
      title: "सभी के लिए बैंकिंग, हर जगह",
      subtitle: "जीरो-बैलेंस अकाउंट | तुरंत UPI | 24/7 सहायता",
      cta1: "अभी अकाउंट खोलें",
      cta2: "फीचर्स देखें →"
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>{content[language].title}</h1>
        <p>{content[language].subtitle}</p>
        <div className={styles.ctaContainer}>
          <button className={styles.primaryCta}>{content[language].cta1}</button>
          <button className={styles.secondaryCta}>{content[language].cta2}</button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img 
          src="/images/hero-phone.png" 
          alt={content[language].title}
        />
      </div>
    </section>
  );
};

export default HeroBanner;