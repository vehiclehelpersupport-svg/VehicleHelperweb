import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield, FiClock, FiMapPin } from 'react-icons/fi';
import Button from '../Button/Button';
import { siteConfig } from '../../config';
import styles from './Hero.module.css';

const stats = [
  { icon: <FiClock />, value: '24/7', label: 'Always Available' },
  { icon: <FiMapPin />, value: siteConfig.stats.cities, label: 'Cities Covered' },
  { icon: <FiShield />, value: '99.8%', label: 'Satisfaction Rate' },
];

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__bg}>
        <div className={styles.hero__gradient} />
        <div className={styles.hero__pattern} />
      </div>

      <div className={`container ${styles.hero__inner}`}>
        <div className={styles.hero__content}>
          <div className={styles.hero__badge}>
            <span className={styles.hero__badgeDot} />
            Trusted by {siteConfig.stats.happyDrivers} Drivers
          </div>

          <h1 className={styles.hero__title}>
            Instant Vehicle Help
            <span className={styles.hero__titleAccent}> When You Need It Most</span>
          </h1>

          <p className={styles.hero__subtitle}>
            24/7 roadside assistance, towing, emergency repairs, and nearby mechanic help —
            all at your fingertips. Payments secured via Cashfree.
          </p>

          <div className={styles.hero__actions}>
            <Link to="/request-service">
              <Button variant="primary" size="xl" icon={<FiArrowRight />}>
                Request Help Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="xl">
                How It Works
              </Button>
            </Link>
          </div>

          <div className={styles.hero__stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.hero__stat}>
                <span className={styles.hero__statIcon}>{stat.icon}</span>
                <div>
                  <span className={styles.hero__statValue}>{stat.value}</span>
                  <span className={styles.hero__statLabel}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.hero__visual}>
          <div className={styles.hero__card}>
            <div className={styles.hero__cardHeader}>
              <div className={styles.hero__cardStatus}>
                <span className={styles.hero__cardDot} />
                Live Tracking Active
              </div>
            </div>
            <div className={styles.hero__cardMap}>
              <div className={styles.hero__mapGrid} />
              <div className={styles.hero__mapPin}>
                <FiMapPin />
                <span>Your Location</span>
              </div>
              <div className={styles.hero__mapHelper}>
                <div className={styles.hero__mapHelperIcon}>🔧</div>
                <span>Helper En Route</span>
                <span className={styles.hero__mapEta}>ETA: {siteConfig.stats.avgResponse}</span>
              </div>
              <div className={styles.hero__mapRoute} />
            </div>
            <div className={styles.hero__cardInfo}>
              <div className={styles.hero__cardHelper}>
                <div className={styles.hero__cardAvatar}>RK</div>
                <div>
                  <p className={styles.hero__cardName}>Rajesh Kumar</p>
                  <p className={styles.hero__cardRole}>Certified Mechanic ⭐ 4.9</p>
                </div>
              </div>
              <div className={styles.hero__cardBadge}>Cashfree Secured</div>
            </div>
          </div>

          <div className={styles.hero__floatCard1}>
            <span>🚗</span>
            <div>
              <p>Towing Service</p>
              <p>Confirmed!</p>
            </div>
          </div>

          <div className={styles.hero__floatCard2}>
            <span>✅</span>
            <div>
              <p>Payment</p>
              <p>Secured via Cashfree</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.hero__wave}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
