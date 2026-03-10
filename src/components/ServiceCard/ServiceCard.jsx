import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ icon, title, description, link = '/request-service' }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__iconWrap}>
        <span className={styles.card__icon}>{icon}</span>
      </div>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__desc}>{description}</p>
      <Link to={link} className={styles.card__link}>
        Request Now <span className={styles.card__arrow}>→</span>
      </Link>
    </div>
  );
};

export default ServiceCard;
