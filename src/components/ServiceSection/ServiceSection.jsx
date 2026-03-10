import ServiceCard from '../ServiceCard/ServiceCard';
import styles from './ServiceSection.module.css';

const services = [
  {
    icon: '🚨',
    title: 'Roadside Assistance',
    description:
      'Stuck on the road? Our certified professionals reach you within minutes. Flat tires, fuel delivery, or any emergency — we have got you covered.',
  },
  {
    icon: '🚛',
    title: 'Vehicle Towing',
    description:
      'Safe and reliable towing service for all vehicle types. From motorcycles to heavy-duty trucks, we transport your vehicle with care.',
  },
  {
    icon: '🔧',
    title: 'Emergency Repair',
    description:
      'On-the-spot engine diagnostics and repairs by our trained mechanics. Get back on the road without waiting for a tow.',
  },
  {
    icon: '📍',
    title: 'Nearby Mechanic Help',
    description:
      'Find verified, top-rated mechanics near you instantly. Compare ratings, prices, and availability before booking.',
  },
  {
    icon: '🔋',
    title: 'Battery Jump Start',
    description:
      'Dead battery? Our technicians arrive with professional jump-start equipment to get your vehicle running in no time.',
  },
  {
    icon: '🛡️',
    title: 'Insurance Assistance',
    description:
      'Need help with insurance claims after an accident? Our support team guides you through the entire process seamlessly.',
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
            From emergency roadside assistance to routine mechanic referrals —
            every service is available 24/7 with secure PhonePe payments.
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
