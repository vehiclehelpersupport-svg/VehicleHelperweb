import styles from '../Legal.module.css';

const RefundPolicy = () => {
  return (
    <div className={styles.legal}>
      <section className={styles.legal__hero}>
        <div className={styles.legal__heroBg} />
        <div className={`container ${styles.legal__heroInner}`}>
          <span className={styles.legal__eyebrow}>Legal</span>
          <h1 className={styles.legal__title}>Refund Policy</h1>
          <p className={styles.legal__subtitle}>Last updated: March 1, 2026</p>
        </div>
      </section>

      <section className={styles.legal__body}>
        <div className="container">
          <div className={styles.legal__grid}>
            <aside className={styles.legal__nav}>
              <p className={styles.legal__navTitle}>Contents</p>
              <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#cancellation">Cancellation Policy</a></li>
                <li><a href="#before">Before Confirmation</a></li>
                <li><a href="#after">After Service Started</a></li>
                <li><a href="#process">Refund Process</a></li>
                <li><a href="#timeline">Timelines</a></li>
                <li><a href="#disputes">Disputes</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </aside>

            <div className={styles.legal__content}>
              <div className={styles.legal__intro}>
                <p>
                  Vehicle Helper is committed to transparent and fair refund practices. All payments
                  are processed via <strong>Cashfree</strong> and are subject to this Refund Policy
                  and Cashfree&apos;s own terms.
                </p>
              </div>

              <section id="overview" className={styles.legal__section}>
                <h2>1. Overview</h2>
                <p>
                  Our refund policy is designed to be fair to both customers and service providers.
                  Since Vehicle Helper connects you with independent service professionals, refunds
                  are evaluated on a case-by-case basis with the customer&apos;s interest as our priority.
                </p>
                <p>
                  <strong>Important:</strong> Vehicle Helper does not collect advance payment.
                  You are charged only after a service is completed. This minimizes refund disputes significantly.
                </p>
              </section>

              <section id="cancellation" className={styles.legal__section}>
                <h2>2. Cancellation Policy</h2>
                <h3>Customer Cancellations</h3>
                <ul>
                  <li><strong>Before provider assignment:</strong> You may cancel your service request at any time with no charge. Full refund (if any amount was charged) will be processed automatically.</li>
                  <li><strong>After provider is assigned but before arrival:</strong> You may cancel, but a small platform fee may apply. The assigned provider will be notified immediately.</li>
                  <li><strong>After provider has arrived:</strong> Cancellation is not permitted once the service professional is at your location and ready to begin work.</li>
                </ul>
                <h3>Provider Cancellations</h3>
                <ul>
                  <li>If a provider cancels after accepting your request, you will receive a full refund (if charged) and a new provider will be assigned automatically.</li>
                  <li>Vehicle Helper does not penalize customers for provider-initiated cancellations.</li>
                </ul>
                <h3>Platform Cancellations</h3>
                <ul>
                  <li>Vehicle Helper may cancel a request if no service provider is available in your area within a reasonable time.</li>
                  <li>In such cases, a full refund is issued immediately and you will be notified via SMS/email.</li>
                </ul>
                <p>
                  To cancel a request, use the <strong>My Requests</strong> section in your account or call us at{' '}
                  <a href="tel:+919047754194">+91 90477 54194</a>.
                </p>
              </section>

              <section id="before" className={styles.legal__section}>
                <h2>3. Refund Before Service Confirmation</h2>
                <p>
                  You are eligible for a <strong>full refund</strong> in the following scenarios:
                </p>
                <ul>
                  <li>You cancel your service request before a provider accepts it</li>
                  <li>No service provider is available and your request expires automatically</li>
                  <li>The assigned provider cancels the request before arriving at your location</li>
                  <li>Vehicle Helper cancels the request due to technical error on our side</li>
                  <li>Duplicate payment was charged due to a system error</li>
                </ul>
                <p>
                  In all these cases, any charged amount will be refunded within 5–7 business days
                  to your original payment source via Cashfree.
                </p>
              </section>

              <section id="after" className={styles.legal__section}>
                <h2>4. Refund After Service Has Started</h2>
                <p>
                  Once a service provider has arrived at your location and begun the service,
                  <strong> no refund will be issued</strong> for the following reasons:
                </p>
                <ul>
                  <li>Change of mind after service has commenced</li>
                  <li>Dissatisfaction with pricing that was agreed upon before booking</li>
                  <li>Service completed successfully but user decides they did not need it</li>
                  <li>User was not present at the provided location when the provider arrived</li>
                </ul>
                <h3>Partial Refund Exceptions</h3>
                <p>A partial refund <em>may</em> be considered if:</p>
                <ul>
                  <li>Only a portion of the agreed service was completed</li>
                  <li>The provider charged for work that was not performed or agreed upon</li>
                  <li>There is documented evidence of provider misconduct or fraud</li>
                </ul>
                <p>
                  Partial refund eligibility is assessed by Vehicle Helper&apos;s support team after
                  reviewing evidence submitted by both parties.
                </p>
              </section>

              <section id="process" className={styles.legal__section}>
                <h2>5. How to Request a Refund</h2>
                <p>To submit a refund request:</p>
                <ul>
                  <li>Log in to your Vehicle Helper account</li>
                  <li>Navigate to <strong>My Requests → View Order → Request Refund</strong></li>
                  <li>Select a refund reason and provide supporting details</li>
                  <li>Submit any relevant photos or screenshots as evidence</li>
                  <li>Our team will respond within <strong>24–48 hours</strong></li>
                </ul>
                <p>
                  Alternatively, contact us at{' '}
                  <a href="mailto:hello@muthura.in">hello@muthura.in</a>{' '}
                  or call +91 90477 54194.
                </p>
              </section>

              <section id="timeline" className={styles.legal__section}>
                <h2>6. Refund Timelines</h2>
                <ul>
                  <li><strong>Approved refunds</strong> are processed within 3–5 business days</li>
                  <li><strong>Cashfree wallet refunds</strong> are credited as per Cashfree&apos;s processing time</li>
                  <li><strong>Bank account/UPI refunds</strong> may take 5–7 business days depending on your bank</li>
                  <li>Refund disputes escalated to Cashfree follow their resolution policy</li>
                </ul>
              </section>

              <section id="disputes" className={styles.legal__section}>
                <h2>7. Dispute Resolution</h2>
                <p>
                  If you are dissatisfied with our refund decision, you may escalate the matter through:
                </p>
                <ul>
                  <li>Vehicle Helper Escalation Team: <a href="mailto:hello@muthura.in">hello@muthura.in</a></li>
                  <li>Cashfree Dispute Resolution (for payment-related issues)</li>
                  <li>National Consumer Helpline: 1800-11-4000 (India)</li>
                </ul>
                <p>
                  All disputes are governed by the laws of India under the Consumer Protection Act, 2019.
                </p>
              </section>

              <section id="contact" className={styles.legal__section}>
                <h2>8. Contact Us</h2>
                <p>For refund queries or assistance:</p>
                <div className={styles.legal__contactBox}>
                  <p><strong>Customer Support / Owner</strong></p>
                  <p>Vehicle Helper (Individual / Sole Proprietor)</p>
                  <p>Email: <a href="mailto:hello@muthura.in">hello@muthura.in</a></p>
                  <p>Phone: +91 90477 54194 (available 24/7)</p>
                  <p>Response time: within 24 hours</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
