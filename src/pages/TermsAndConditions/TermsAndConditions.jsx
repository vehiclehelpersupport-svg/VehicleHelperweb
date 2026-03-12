import styles from '../Legal.module.css';

const TermsAndConditions = () => {
  return (
    <div className={styles.legal}>
      <section className={styles.legal__hero}>
        <div className={styles.legal__heroBg} />
        <div className={`container ${styles.legal__heroInner}`}>
          <span className={styles.legal__eyebrow}>Legal</span>
          <h1 className={styles.legal__title}>Terms &amp; Conditions</h1>
          <p className={styles.legal__subtitle}>Last updated: March 1, 2026</p>
        </div>
      </section>

      <section className={styles.legal__body}>
        <div className="container">
          <div className={styles.legal__grid}>
            <aside className={styles.legal__nav}>
              <p className={styles.legal__navTitle}>Contents</p>
              <ul>
                <li><a href="#acceptance">Acceptance</a></li>
                <li><a href="#platform">Platform Usage</a></li>
                <li><a href="#accounts">Accounts</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#payments">Payments</a></li>
                <li><a href="#provider">Service Providers</a></li>
                <li><a href="#liability">Liability</a></li>
                <li><a href="#termination">Termination</a></li>
                <li><a href="#law">Governing Law</a></li>
              </ul>
            </aside>

            <div className={styles.legal__content}>
              <div className={styles.legal__intro}>
                <p>
                  By accessing or using the Vehicle Helper platform, you agree to be bound by these
                  Terms and Conditions. Please read them carefully before using our services.
                </p>
              </div>

              <section id="acceptance" className={styles.legal__section}>
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By registering an account, requesting a service, or otherwise using Vehicle Helper,
                  you acknowledge that you have read, understood, and agree to be bound by these Terms
                  and our Privacy Policy. If you do not agree, you must not use the platform.
                </p>
                <p>
                  These terms apply to all users including customers, service providers, and visitors.
                  Vehicle Helper is operated by an individual sole proprietor.
                </p>
              </section>

              <section id="platform" className={styles.legal__section}>
                <h2>2. Platform Usage Rules</h2>
                <p>You agree to use Vehicle Helper only for lawful purposes. You must not:</p>
                <ul>
                  <li>Provide false or misleading information during registration or service requests</li>
                  <li>Attempt to manipulate ratings, reviews, or pricing</li>
                  <li>Use the platform for any illegal or unauthorized purpose</li>
                  <li>Reverse engineer, decompile, or extract source code from the platform</li>
                  <li>Transmit any viruses, malware, or harmful code</li>
                  <li>Harass, threaten, or abuse other users or service providers</li>
                  <li>Create multiple accounts to circumvent restrictions or bans</li>
                  <li>Use automated bots or scrapers without written permission</li>
                </ul>
                <p>
                  Vehicle Helper reserves the right to suspend or terminate accounts that violate these rules.
                </p>
              </section>

              <section id="accounts" className={styles.legal__section}>
                <h2>3. User Accounts</h2>
                <p>
                  You must be at least 18 years old to create an account. You are responsible for:
                </p>
                <ul>
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Immediately notifying us of any unauthorized account access</li>
                  <li>Ensuring your contact information remains accurate and up-to-date</li>
                </ul>
                <p>
                  Each person may only maintain one active account. Accounts are non-transferable.
                </p>
              </section>

              <section id="services" className={styles.legal__section}>
                <h2>4. Services</h2>
                <p>
                  Vehicle Helper is a technology platform that connects users with independent
                  roadside service providers. We do not directly provide vehicle repair or towing services.
                </p>
                <ul>
                  <li>Service availability depends on provider availability in your area</li>
                  <li>Response times are estimates and may vary due to traffic, weather, or demand</li>
                  <li>Vehicle Helper does not guarantee the availability of any specific service at any time</li>
                  <li>The quality of service is the responsibility of the individual service provider</li>
                </ul>
              </section>

              <section id="payments" className={styles.legal__section}>
                <h2>5. Payments</h2>
                <p>
                  All payments on Vehicle Helper are processed through Cashfree, a licensed payment
                  aggregator regulated by the Reserve Bank of India (RBI).
                </p>
                <ul>
                  <li>Payment is due only after service completion, unless otherwise stated</li>
                  <li>Service charges include platform fees, provider fees, and applicable GST</li>
                  <li>Pricing is displayed transparently before you confirm a service request</li>
                  <li>Vehicle Helper does not store your payment credentials</li>
                  <li>In case of payment disputes, contact us within 7 days of the transaction</li>
                </ul>
              </section>

              <section id="provider" className={styles.legal__section}>
                <h2>6. Service Provider Responsibility</h2>
                <p>
                  Service providers on Vehicle Helper are independent contractors, not employees.
                  Vehicle Helper acts solely as an intermediary.
                </p>
                <ul>
                  <li>Providers are responsible for their tools, vehicles, and professional conduct</li>
                  <li>All providers undergo identity verification before listing on the platform</li>
                  <li>Vehicle Helper does not endorse or warrant any specific provider&apos;s work quality</li>
                  <li>Providers must comply with all applicable laws and safety regulations</li>
                  <li>Any damage caused by a provider during service must be raised within 48 hours</li>
                </ul>
              </section>

              <section id="liability" className={styles.legal__section}>
                <h2>7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by Indian law, Vehicle Helper shall not be liable for:
                </p>
                <ul>
                  <li>Any indirect, incidental, or consequential damages</li>
                  <li>Loss of revenue, data, or goodwill arising from platform use</li>
                  <li>Service delays caused by circumstances beyond our control</li>
                  <li>Actions or omissions of independent service providers</li>
                  <li>Technical interruptions, maintenance, or platform downtime</li>
                </ul>
                <p>
                  Our maximum aggregate liability shall not exceed the amount paid by you for the
                  specific service in dispute.
                </p>
              </section>

              <section id="termination" className={styles.legal__section}>
                <h2>8. Account Termination</h2>
                <p>
                  Vehicle Helper may suspend or terminate your account without prior notice if:
                </p>
                <ul>
                  <li>You violate any provision of these Terms</li>
                  <li>We receive credible reports of fraudulent or abusive behavior</li>
                  <li>Your account shows suspicious or unauthorized activity</li>
                </ul>
                <p>
                  You may delete your account at any time from your profile settings. Account deletion
                  requests are processed within 30 days.
                </p>
              </section>

              <section id="law" className={styles.legal__section}>
                <h2>9. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of India. Any disputes arising from these
                  Terms or your use of Vehicle Helper shall be subject to the exclusive jurisdiction
                  of the courts in Tirunelveli, Tamil Nadu.
                </p>
                <p>
                  For questions about these Terms, contact us at{' '}
                  <a href="mailto:hello@muthura.in">hello@muthura.in</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
