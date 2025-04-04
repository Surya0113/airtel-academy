// components/Testimonials/Testimonials.jsx
import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = ({ language }) => {
  const testimonials = {
    en: [
      {
        quote: "Airtel Payments Bank made banking so simple for my small business. The UPI payments are instant!",
        author: "Rahul Sharma",
        role: "Small Business Owner"
      },
      {
        quote: "I love the zero balance account feature. Perfect for students like me who don't have regular income.",
        author: "Priya Patel",
        role: "College Student"
      }
    ],
    hi: [
      {
        quote: "एयरटेल पेमेंट्स बैंक ने मेरे छोटे व्यवसाय के लिए बैंकिंग को बहुत सरल बना दिया। UPI भुगतान तत्काल हैं!",
        author: "राहुल शर्मा",
        role: "छोटे व्यवसाय के मालिक"
      },
      {
        quote: "मुझे जीरो बैलेंस अकाउंट सुविधा पसंद है। मेरे जैसे छात्रों के लिए बिल्कुल सही जिनकी नियमित आय नहीं है।",
        author: "प्रिया पटेल",
        role: "कॉलेज की छात्रा"
      }
    ]
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        {language === 'en' ? 'What Our Customers Say' : 'हमारे ग्राहक क्या कहते हैं'}
      </h2>
      <div className={styles.testimonials}>
        {testimonials[language].map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.quote}>"{testimonial.quote}"</div>
            <div className={styles.author}>{testimonial.author}</div>
            <div className={styles.role}>{testimonial.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;