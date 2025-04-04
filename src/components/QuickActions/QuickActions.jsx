// components/QuickActions/QuickActions.jsx
import React from 'react';
import styles from './QuickActions.module.css';

const QuickActions = ({ language }) => {
  const actions = {
    en: [
      { icon: '💸', title: 'Send Money', subtitle: 'UPI/NEFT/IMPS' },
      { icon: '📱', title: 'Recharge', subtitle: 'Prepaid/DTH' },
      { icon: '💡', title: 'Pay Bills', subtitle: 'Electricity/Water' },
      { icon: '🏦', title: 'Banking', subtitle: 'Accounts/Deposits' }
    ],
    hi: [
      { icon: '💸', title: 'पैसे भेजें', subtitle: 'UPI/NEFT/IMPS' },
      { icon: '📱', title: 'रिचार्ज', subtitle: 'प्रीपेड/DTH' },
      { icon: '💡', title: 'बिल भरें', subtitle: 'बिजली/पानी' },
      { icon: '🏦', title: 'बैंकिंग', subtitle: 'खाते/जमा' }
    ]
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        {language === 'en' ? 'Quick Actions' : 'त्वरित कार्य'}
      </h2>
      <div className={styles.grid}>
        {actions[language].map((action) => (
          <div key={action.title} className={styles.card}>
            <span className={styles.icon}>{action.icon}</span>
            <h3>{action.title}</h3>
            <p>{action.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;