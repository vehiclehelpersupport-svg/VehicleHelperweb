import { Link } from 'react-router-dom';
import { FiHeart, FiShield, FiUsers, FiClock } from 'react-icons/fi';
import Button from '../../components/Button/Button';
import { siteConfig } from '../../config';
import styles from './About.module.css';

const values = [
  { icon: <FiShield />, title: 'Safety First', desc: 'Every service provider is background-verified and trained.' },
  { icon: <FiClock />, title: '24/7 Availability', desc: 'We are always available, even on holidays and late nights.' },
  { icon: <FiHeart />, title: 'Customer Care', desc: 'Your satisfaction is our highest priority, always.' },
  { icon: <FiUsers />, title: 'Trusted Network', desc: `${siteConfig.stats.servicePros} verified professionals.` },
];

const About = () => {
  return (
    <div className={styles.about}>
      {/* Hero */}
      <section className={styles.about__hero}>
        <div className={styles.about__heroBg} />
        <div className={`container ${styles.about__heroInner}`}>
          <span className={styles.about__eyebrow}>About Us</span>
          <h1 className={styles.about__title}>
            India&apos;s Most Trusted
            <span className={styles.about__titleAccent}> Vehicle Help Platform</span>
          </h1>
          <p className={styles.about__subtitle}>
            Vehicle Helper connects distressed drivers with verified roadside assistance
            professionals in minutes. Powered by Cashfree for safe, transparent payments.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.about__mission}>
        <div className="container">
          <div className={styles.about__missionGrid}>
            <div className={styles.about__missionContent}>
              <span className={styles.about__eyebrowDark}>Our Mission</span>
              <h2 className={styles.about__sectionTitle}>
                No Driver Should Be Left Stranded
              </h2>
              <p className={styles.about__text}>
                {siteConfig.story.paragraph1}
              </p>
              <p className={styles.about__text}>
                {siteConfig.story.paragraph2}
              </p>
              <Link to="/request-service">
                <Button variant="primary" size="lg">Get Help Now</Button>
              </Link>
            </div>
            <div className={styles.about__missionStats}>
              {[
                { value: siteConfig.stats.happyDrivers, label: 'Happy Drivers' },
                { value: siteConfig.stats.servicePros, label: 'Service Pros' },
                { value: siteConfig.stats.cities, label: 'Cities' },
                { value: siteConfig.stats.avgResponse, label: 'Avg Response' },
              ].map((s) => (
                <div key={s.label} className={styles.about__statCard}>
                  <span className={styles.about__statValue}>{s.value}</span>
                  <span className={styles.about__statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.about__values}>
        <div className="container">
          <div className={styles.about__valuesHeader}>
            <span className={styles.about__eyebrowDark}>What Drives Us</span>
            <h2 className={styles.about__sectionTitle}>Our Core Values</h2>
          </div>
          <div className={styles.about__valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.about__valueCard}>
                <div className={styles.about__valueIcon}>{v.icon}</div>
                <h3 className={styles.about__valueTitle}>{v.title}</h3>
                <p className={styles.about__valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cashfree Section */}
      <section className={styles.about__payment}>
        <div className="container">
          <div className={styles.about__paymentCard}>
            <div className={styles.about__paymentIcon}>💳</div>
            <h2 className={styles.about__paymentTitle}>
              Payments Secured by Cashfree
            </h2>
            <p className={styles.about__paymentText}>
              Vehicle Helper integrates with Cashfree — a trusted payment gateway in India —
              to ensure every transaction is 100% secure, verified, and transparent. You only
              pay after service is completed to your satisfaction.
            </p>
            <div className={styles.about__paymentFeatures}>
              <span>✅ UPI & Cards</span>
              <span>✅ Instant Confirmation</span>
              <span>✅ Refund Protected</span>
              <span>✅ RBI Compliant</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
