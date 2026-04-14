import styles from '../Legal.module.css';

const DeleteAccount = () => {
  return (
    <div className={styles.legal}>
      <section className={styles.legal__hero}>
        <div className={styles.legal__heroBg} />
        <div className={`container ${styles.legal__heroInner}`}>
          <span className={styles.legal__eyebrow}>Legal</span>
          <h1 className={styles.legal__title}>Delete Account Request</h1>
          <p className={styles.legal__subtitle}>RoadSideFix Helper</p>
        </div>
      </section>

      <section className={styles.legal__body}>
        <div className="container">
          <div className={styles.legal__content}>
            <section className={styles.legal__section}>
              <h2>How to request account deletion</h2>
              <p>If you want to delete your account and associated data, contact us at:</p>
              <div className={styles.legal__contactBox}>
                <p>Email: <a href="mailto:hello@muthura.in">hello@muthura.in</a></p>
                <p>Subject: Delete My Account (RoadSideFix Helper)</p>
                <p>Include: Your registered phone number</p>
              </div>
            </section>

            <section className={styles.legal__section}>
              <h2>What gets deleted</h2>
              <ul>
                <li>Profile information (name, phone number, and account details)</li>
                <li>Uploaded documents and photos linked to your account</li>
                <li>Notification identifiers linked to your account</li>
              </ul>
            </section>

            <section className={styles.legal__section}>
              <h2>What may be retained and for how long</h2>
              <ul>
                <li>Payment and transaction records may be retained as required by law for tax, fraud-prevention, and dispute-resolution purposes</li>
                <li>Basic audit and security logs may be retained for up to 90 days</li>
              </ul>
            </section>

            <section className={styles.legal__section}>
              <h2>Deletion processing timeline</h2>
              <p>
                We process deletion requests within 7 working days after verifying account ownership.
              </p>
              <p>
                Partial deletion without deleting the account is currently not supported.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeleteAccount;
