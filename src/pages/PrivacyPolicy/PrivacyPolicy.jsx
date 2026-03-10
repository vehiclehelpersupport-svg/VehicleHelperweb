import { siteConfig } from '../../config';
import styles from '../Legal.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.legal}>
      <section className={styles.legal__hero}>
        <div className={styles.legal__heroBg} />
        <div className={`container ${styles.legal__heroInner}`}>
          <span className={styles.legal__eyebrow}>Legal</span>
          <h1 className={styles.legal__title}>Privacy Policy</h1>
          <p className={styles.legal__subtitle}>Last updated: March 1, 2026</p>
        </div>
      </section>

      <section className={styles.legal__body}>
        <div className="container">
          <div className={styles.legal__grid}>
            <aside className={styles.legal__nav}>
              <p className={styles.legal__navTitle}>Contents</p>
              <ul>
                <li><a href="#collection">Data We Collect</a></li>
                <li><a href="#usage">How We Use Data</a></li>
                <li><a href="#sharing">Data Sharing</a></li>
                <li><a href="#protection">Data Protection</a></li>
                <li><a href="#rights">Your Rights</a></li>
                <li><a href="#cookies">Cookies</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </aside>

            <div className={styles.legal__content}>
              <div className={styles.legal__intro}>
                <p>
                  Vehicle Helper (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal
                  information and your right to privacy. This Privacy Policy explains how we collect,
                  use, and safeguard your information when you use our platform.
                </p>
              </div>

              <section id="collection" className={styles.legal__section}>
                <h2>1. Data We Collect</h2>
                <p>We collect the following types of information:</p>
                <h3>Personal Identification Data</h3>
                <ul>
                  <li>Full name and contact details (email, phone number)</li>
                  <li>Vehicle registration number and type</li>
                  <li>Profile photograph (optional)</li>
                  <li>Government-issued ID for service providers only</li>
                </ul>
                <h3>Location Data</h3>
                <ul>
                  <li>Real-time GPS location when you request a service</li>
                  <li>Location history for past service requests (kept for 90 days)</li>
                  <li>Approximate location for displaying nearby providers</li>
                </ul>
                <h3>Payment Data</h3>
                <ul>
                  <li>Payment transaction records processed via PhonePe</li>
                  <li>We do <strong>not</strong> store your UPI PIN, bank account, or card details</li>
                  <li>All payment processing is handled by PhonePe under their privacy policy</li>
                </ul>
                <h3>Technical Data</h3>
                <ul>
                  <li>Device type, operating system, and browser information</li>
                  <li>IP address and usage logs</li>
                  <li>App performance data and crash reports</li>
                </ul>
              </section>

              <section id="usage" className={styles.legal__section}>
                <h2>2. How We Use Your Data</h2>
                <p>We use your information for the following purposes:</p>
                <ul>
                  <li><strong>Service Fulfillment:</strong> Connecting you with nearby service providers and tracking assistance in real time</li>
                  <li><strong>Account Management:</strong> Creating and maintaining your user account</li>
                  <li><strong>Payment Processing:</strong> Facilitating secure payments through PhonePe</li>
                  <li><strong>Safety Verification:</strong> Background checks on service providers</li>
                  <li><strong>Customer Support:</strong> Responding to inquiries and resolving disputes</li>
                  <li><strong>Service Improvement:</strong> Analyzing usage patterns to improve our platform</li>
                  <li><strong>Legal Compliance:</strong> Meeting regulatory requirements under Indian law</li>
                </ul>
              </section>

              <section id="sharing" className={styles.legal__section}>
                <h2>3. Data Sharing</h2>
                <p>We share your data only in limited circumstances:</p>
                <ul>
                  <li><strong>Service Providers:</strong> Your name, phone, and location are shared with the assigned service professional to fulfill your request</li>
                  <li><strong>PhonePe:</strong> Transaction data is shared with PhonePe for payment processing</li>
                  <li><strong>Legal Authorities:</strong> When required by law, court order, or government regulation</li>
                  <li><strong>Business Partners:</strong> Only with your explicit consent</li>
                </ul>
                <p>We <strong>never sell</strong> your personal data to third parties for marketing purposes.</p>
              </section>

              <section id="protection" className={styles.legal__section}>
                <h2>4. Data Protection</h2>
                <p>We implement industry-standard security measures including:</p>
                <ul>
                  <li>AES-256 encryption for data at rest</li>
                  <li>TLS 1.3 for data in transit</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Two-factor authentication for admin access</li>
                  <li>GDPR and IT Act 2000 compliance</li>
                </ul>
              </section>

              <section id="rights" className={styles.legal__section}>
                <h2>5. Your Rights</h2>
                <p>Under applicable law, you have the right to:</p>
                <ul>
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate personal data</li>
                  <li><strong>Erasure:</strong> Request deletion of your account and data</li>
                  <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                  <li><strong>Objection:</strong> Opt out of certain data processing activities</li>
                </ul>
                <p>To exercise these rights, contact us at <a href="mailto:hello@muthura.in">hello@muthura.in</a></p>
              </section>

              <section id="cookies" className={styles.legal__section}>
                <h2>6. Cookies</h2>
                <p>
                  We use essential cookies for platform functionality and optional analytics cookies
                  to improve user experience. You can manage cookie preferences through your browser settings.
                </p>
              </section>

              <section id="contact" className={styles.legal__section}>
                <h2>7. Contact Us</h2>
                <p>For privacy-related inquiries:</p>
                <div className={styles.legal__contactBox}>
                  <p><strong>Grievance Officer / Owner</strong></p>
                  <p>Vehicle Helper (Individual / Sole Proprietor)</p>
                  <p>{siteConfig.address}</p>
                  <p>Email: <a href="mailto:hello@muthura.in">hello@muthura.in</a></p>
                  <p>Phone: +91 90477 54194</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
