import { siteConfig } from '../../config';
import styles from './TrustSection.module.css';

const TrustSection = () => {
  return (
    <section className={styles.trust}>
      <div className="container">
        <div className={styles.trust__header}>
          <span className={styles.trust__eyebrow}>Why Choose Us</span>
          <h2 className={styles.trust__title}>
            Safe, Fast &amp; <span className={styles.trust__titleAccent}>Transparent</span>
          </h2>
        </div>

        <div className={styles.trust__grid}>
          {[
            { icon: '🚀', title: 'Fast Response', desc: 'We connect you to the nearest available professional quickly.' },
            { icon: '💳', title: 'Cashfree Payments', desc: 'Pay only after service is done. Fully secured via Cashfree.' },
            { icon: '🔒', title: 'Safe & Verified', desc: 'Service professionals are verified before they are listed.' },
          ].map((item) => (
            <div key={item.title} className={styles.trust__card}>
              <div className={styles.trust__cardIcon}>{item.icon}</div>
              <h3 className={styles.trust__cardTitle}>{item.title}</h3>
              <p className={styles.trust__text}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.trust__partners}>
          <p className={styles.trust__partnersLabel}>Payment Partner</p>
          <div className={styles.trust__phonepe}>
            <span className={styles.trust__phonepeIcon}>💳</span>
            <span>Cashfree</span>
            <span className={styles.trust__phonepeBadge}>Verified Gateway</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
