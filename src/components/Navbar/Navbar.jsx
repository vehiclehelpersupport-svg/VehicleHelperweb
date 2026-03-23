import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../Button/Button';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/#services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Request Help', path: '/request-service' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleServicesClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles['navbar--scrolled'] : ''}`}>
      <div className={`container ${styles.navbar__inner}`}>
        <Link to="/" className={styles.navbar__logo}>
          <img src="/image.png" alt="Vehicle Helper" className={styles.navbar__logoImg} />
          <span className={styles.navbar__logoText}>
            Vehicle<span className={styles.navbar__logoAccent}>Helper</span>
          </span>
        </Link>

        <nav className={`${styles.navbar__nav} ${isOpen ? styles['navbar__nav--open'] : ''}`}>
          {navLinks.map((link) => (
            link.path === '/#services' ? (
              <a
                key={link.path}
                href="/#services"
                className={styles.navbar__link}
                onClick={handleServicesClick}
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `${styles.navbar__link} ${isActive ? styles['navbar__link--active'] : ''}`
                }
              >
                {link.label}
              </NavLink>
            )
          ))}

        </nav>

        <button
          className={styles.navbar__toggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div
          className={styles.navbar__overlay}
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
