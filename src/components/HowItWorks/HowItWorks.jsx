import styles from './HowItWorks.module.css';

const steps = [
  {
    step: '01',
    icon: '📲',
    title: 'Request Help',
    description:
      'Open the app or website, select your service type, and share your location. It takes under 60 seconds.',
  },
  {
    step: '02',
    icon: '🔍',
    title: 'Find Nearby Provider',
    description:
      'Our system instantly matches you with the nearest verified service provider based on availability and ratings.',
  },
  {
    step: '03',
    icon: '📍',
    title: 'Track Assistance',
    description:
      'Get real-time GPS tracking of your helper. See their ETA and communicate directly through the platform.',
  },
  {
    step: '04',
    icon: '💳',
    title: 'Pay Securely',
    description:
      'Pay only after service completion using Cashfree — a trusted payment gateway in India.',
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.hiw}>
      <div className={styles.hiw__bg} />
      <div className="container">
        <div className={styles.hiw__header}>
          <span className={styles.hiw__eyebrow}>Simple Process</span>
          <h2 className={styles.hiw__title}>
            How <span className={styles.hiw__titleAccent}>Vehicle Helper</span> Works
          </h2>
          <p className={styles.hiw__subtitle}>
            Get back on the road in four simple steps. No app download required.
          </p>
        </div>

        <div className={styles.hiw__steps}>
          {steps.map((item, index) => (
            <div key={item.step} className={styles.hiw__step}>
              {index < steps.length - 1 && (
                <div className={styles.hiw__connector} />
              )}
              <div className={styles.hiw__stepNum}>{item.step}</div>
              <div className={styles.hiw__stepCard}>
                <div className={styles.hiw__stepIcon}>{item.icon}</div>
                <h3 className={styles.hiw__stepTitle}>{item.title}</h3>
                <p className={styles.hiw__stepDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
