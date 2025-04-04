// components/BusinessSolutions/BusinessSolutions.jsx
import React, { useState } from 'react';
import styles from './BusinessSolutions.module.css';

const BusinessSolutions = ({ language }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = {
    en: ["Merchant Payments", "Working Capital", "Business Tools"],
    hi: ["व्यापारी भुगतान", "कार्यशील पूंजी", "व्यवसाय उपकरण"]
  };
  
  const tabContents = {
    en: [
      {
        title: "Accept All Payments",
        description: "Take UPI, cards, wallets and more with 1% cashback on transactions",
        features: ["QR Code", "Payment Links", "POS Device"]
      },
      {
        title: "Business Loans",
        description: "Quick working capital loans with minimal documentation",
        features: ["Up to ₹10 lakhs", "24hr approval", "Flexible repayment"]
      },
      {
        title: "Business Tools",
        description: "Everything you need to manage and grow your business",
        features: ["Invoicing", "Inventory", "Tax Calculator"]
      }
    ],
    hi: [
      {
        title: "सभी भुगतान स्वीकार करें",
        description: "UPI, कार्ड, वॉलेट और अधिक 1% कैशबैक के साथ",
        features: ["QR कोड", "भुगतान लिंक", "POS डिवाइस"]
      },
      {
        title: "व्यवसाय ऋण",
        description: "न्यूनतम दस्तावेज़ीकरण के साथ त्वरित कार्यशील पूंजी ऋण",
        features: ["₹10 लाख तक", "24 घंटे में अनुमोदन", "लचीला पुनर्भुगतान"]
      },
      {
        title: "व्यवसाय उपकरण",
        description: "अपने व्यवसाय को प्रबंधित करने और बढ़ाने के लिए आवश्यक सभी चीज़ें",
        features: ["इनवॉइसिंग", "इन्वेंटरी", "टैक्स कैलकुलेटर"]
      }
    ]
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        {language === 'en' ? 'Business Solutions' : 'व्यवसाय समाधान'}
      </h2>
      <div className={styles.tabContainer}>
        <div className={styles.tabs}>
          {tabs[language].map((tab, index) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.tabContent}>
          <h3>{tabContents[language][activeTab].title}</h3>
          <p>{tabContents[language][activeTab].description}</p>
          <ul className={styles.features}>
            {tabContents[language][activeTab].features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <button className={styles.ctaButton}>
            {language === 'en' ? 'Get Started' : 'शुरू करें'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;