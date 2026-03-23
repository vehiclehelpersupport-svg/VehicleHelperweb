import styles from './Pricing.module.css';

const emergencyServices = [
  { name: 'Battery Jump Start', price: 'Rs. 199' },
  { name: 'Puncture Repair', price: 'Rs. 149' },
  { name: 'Fuel Delivery', price: 'Rs. 99 + fuel cost' },
  { name: 'Emergency Breakdown Help', price: 'Rs. 249' },
];

const mechanicServices = [
  { name: 'Mechanic Visit (inspection)', price: 'Rs. 199' },
  { name: 'General Service', price: 'Rs. 299' },
  { name: 'Oil Change', price: 'Rs. 499 (excluding oil cost)' },
];

const heavyServices = [
  { name: 'Towing (base 3 km)', price: 'Rs. 499' },
  { name: 'After 3 km towing', price: 'Rs. 20/km' },
];

const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <section className={styles.pricing__hero}>
        <div className={styles.pricing__heroBg} />
        <div className={`container ${styles.pricing__heroInner}`}>
          <span className={styles.pricing__eyebrow}>Pricing Policy</span>
          <h1 className={styles.pricing__title}>RoadSideFix Service Pricing</h1>
          <p className={styles.pricing__subtitle}>
            Transparent and standardized pricing for roadside assistance services.
          </p>
        </div>
      </section>

      <section className={styles.pricing__body}>
        <div className="container">
          <div className={styles.pricing__notice}>
            <p>
              <strong>Note:</strong> Final charges may change based on service area/location,
              vehicle type, towing distance, on-site mechanical work complexity, spare parts or
              consumables used (for example, engine oil or fuel), and late-night/emergency timing
              where applicable. The final payable amount will be shown before payment confirmation.
            </p>
          </div>

          <div className={styles.pricing__formula}>
            <h2>Core Formula</h2>
            <p>Total Price = Base Price + Distance Charge + Extra Service Cost</p>
          </div>

          <div className={styles.pricing__grid}>
            <article className={styles.pricing__card}>
              <h3>Emergency Services</h3>
              <ul>
                {emergencyServices.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </li>
                ))}
              </ul>
            </article>

            <article className={styles.pricing__card}>
              <h3>Mechanic Services</h3>
              <ul>
                {mechanicServices.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </li>
                ))}
              </ul>
            </article>

            <article className={styles.pricing__card}>
              <h3>Heavy Services</h3>
              <ul>
                {heavyServices.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className={styles.pricing__split}>
            <article className={styles.pricing__panel}>
              <h3>Distance Charges</h3>
              <ul>
                <li>First 2 km: FREE</li>
                <li>After 2 km: Rs. 10/km</li>
              </ul>
            </article>
            <article className={styles.pricing__panel}>
              <h3>Example Calculation</h3>
              <p>Battery Jump Start at 5 km distance:</p>
              <ul>
                <li>Base Price: Rs. 199</li>
                <li>Distance Fee: (5 - 2) x Rs. 10 = Rs. 30</li>
                <li><strong>Total: Rs. 229</strong></li>
              </ul>
            </article>
          </div>

          <div className={styles.pricing__split}>
            <article className={styles.pricing__panel}>
              <h3>Business Model</h3>
              <ul>
                <li>Platform commission: 20%</li>
                <li>Example: User pays Rs. 250 -&gt; Platform: Rs. 50, Mechanic: Rs. 200</li>
              </ul>
            </article>
            <article className={styles.pricing__panel}>
              <h3>Offers</h3>
              <ul>
                <li>First Booking: Rs. 50 OFF</li>
                <li>Referral Offer: Rs. 100 OFF</li>
                <li>Night Charge (optional later): +Rs. 50</li>
              </ul>
            </article>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Pricing;
