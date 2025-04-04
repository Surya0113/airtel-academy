// components/AccountFeatures/AccountFeatures.jsx
import React from 'react';
import styles from './AccountFeatures.module.css';

const AccountFeatures = ({ language }) => {
  const features = {
    en: [
      {
        title: "Savings Account",
        benefits: ["4% interest", "Zero balance", "Free debit card", "UPI enabled"]
      },
      {
        title: "Current Account",
        benefits: ["For businesses", "Unlimited transactions", "Cashback", "Dedicated manager"]
      }
    ],
    hi: [
      {
        title: "बचत खाता",
        benefits: ["4% ब्याज", "जीरो बैलेंस", "मुफ्त डेबिट कार्ड", "UPI सक्षम"]
      },
      {
        title: "चालू खाता",
        benefits: ["व्यवसायों के लिए", "असीमित लेनदेन", "कैशबैक", "समर्पित प्रबंधक"]
      }
    ]
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        {language === 'en' ? 'Account Features' : 'खाता सुविधाएँ'}
      </h2>
      <div className={styles.container}>
        {features[language].map((feature, index) => (
          <div key={feature.title} className={styles.featureCard}>
            {index === 0 && (
              <div className={styles.popularBadge}>
                {language === 'en' ? 'Most Popular' : 'सबसे लोकप्रिय'}
              </div>
            )}
            <h3>{feature.title}</h3>
            <ul>
              {feature.benefits.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
            <button className={styles.learnMoreBtn}>
              {language === 'en' ? 'Learn More' : 'और जानें'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccountFeatures;