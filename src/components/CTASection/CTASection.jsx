import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import Button from '../Button/Button';
import { siteConfig } from '../../config';
import styles from './CTASection.module.css';

const CTASection = () => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.cta__card}>
          <div className={styles.cta__glow} />
          <div className={styles.cta__content}>
            <span className={styles.cta__eyebrow}>Ready to Get Help?</span>
            <h2 className={styles.cta__title}>
              Request Vehicle Help Now
            </h2>
            <p className={styles.cta__subtitle}>
              Available 24/7 across {siteConfig.stats.cities} cities. Secure payments via Cashfree.
              Average response time under {siteConfig.stats.avgResponse}.
            </p>

            <div className={styles.cta__actions}>
              <Link to="/request-service">
                <Button variant="white" size="xl" icon={<FiArrowRight />}>
                  Request Help Now
                </Button>
              </Link>
              <a href="tel:+919047754194">
                <Button variant="outline" size="xl" icon={<FiPhone />}>
                  Call Now
                </Button>
              </a>
            </div>

            <div className={styles.cta__trust}>
              <span>🔒 Secured by Cashfree</span>
              <span>⭐ 4.9/5 Rating</span>
              <span>✅ Verified Professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
