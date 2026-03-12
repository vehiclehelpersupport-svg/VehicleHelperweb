import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { siteConfig } from '../../config';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__inner}`}>
        <div className={styles.footer__grid}>
          {/* Brand Column */}
          <div className={styles.footer__brand}>
            <Link to="/" className={styles.footer__logo}>
              <img src="/image.png" alt="Vehicle Helper" className={styles.footer__logoImg} />
              <span>
                Vehicle<span className={styles.footer__logoAccent}>Helper</span>
              </span>
            </Link>
            <p className={styles.footer__tagline}>
              Your trusted partner for 24/7 roadside assistance and vehicle emergency services across India.
            </p>
            <div className={styles.footer__contact}>
              <a href="tel:+919047754194" className={styles.footer__contactLink}>
                <FiPhone /> +91 90477 54194
              </a>
              <a href="mailto:hello@muthura.in" className={styles.footer__contactLink}>
                <FiMail /> hello@muthura.in
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className={styles.footer__col}>
            <h4 className={styles.footer__heading}>Services</h4>
            <ul className={styles.footer__list}>
              <li><Link to="/request-service">Roadside Assistance</Link></li>
              <li><Link to="/request-service">Vehicle Towing</Link></li>
              <li><Link to="/request-service">Emergency Repair</Link></li>
              <li><Link to="/request-service">Nearby Mechanic</Link></li>
              <li><Link to="/request-service">Battery Jump Start</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className={styles.footer__col}>
            <h4 className={styles.footer__heading}>Company</h4>
            <ul className={styles.footer__list}>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms &amp; Conditions</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.footer__col}>
            <h4 className={styles.footer__heading}>Contact</h4>
            <ul className={styles.footer__contactList}>
              <li>
                <FiPhone />
                <span>+91 90477 54194</span>
              </li>
              <li>
                <FiMail />
                <span>hello@muthura.in</span>
              </li>
              <li>
                <FiMapPin />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
            <div className={styles.footer__paymentBadge}>
              <span>Payments secured by</span>
              <span className={styles.footer__phonepe}>Cashfree</span>
            </div>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>
            © {currentYear} VehicleHelper. All rights reserved.
          </p>
          <div className={styles.footer__legalLinks}>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            <Link to="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
