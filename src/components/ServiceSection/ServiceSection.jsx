import ServiceCard from '../ServiceCard/ServiceCard';
import styles from './ServiceSection.module.css';

const services = [
  {
    icon: '🚨',
    title: 'Battery Jump Start',
    price: 'Starting at Rs. 199',
    description:
      'Quick dead-battery rescue by verified professionals at your location.',
  },
  {
    icon: '🛞',
    title: 'Puncture Repair',
    price: 'Starting at Rs. 149',
    description:
      'On-road puncture support to get you moving safely without towing.',
  },
  {
    icon: '⛽',
    title: 'Fuel Delivery',
    price: 'Starting at Rs. 99 + fuel cost',
    description:
      'Fast emergency fuel drop with transparent billing for fuel quantity.',
  },
  {
    icon: '🚨',
    title: 'Breakdown Help',
    price: 'Starting at Rs. 249',
    description:
      'Immediate emergency assistance for sudden roadside breakdowns.',
  },
  {
    icon: '🔧',
    title: 'Mechanic Visit',
    price: 'Starting at Rs. 199',
    description:
      'Professional inspection and issue diagnosis at your current location.',
  },
  {
    icon: '🚛',
    title: 'Vehicle Towing',
    price: 'Starting at Rs. 499',
    description:
      'Includes base 3 km towing, then fixed per-km charges for extra distance.',
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.services__header}>
          <span className={styles.services__eyebrow}>What We Offer</span>
          <h2 className={styles.services__title}>
            Complete Vehicle Help <span className={styles.services__titleAccent}>Services</span>
          </h2>
          <p className={styles.services__subtitle}>
            Services starting from Rs. 149 with no hidden charges. First 2 km is free, then
            a simple fixed per-km fee.
          </p>
        </div>

        <div className={styles.services__grid}>
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
