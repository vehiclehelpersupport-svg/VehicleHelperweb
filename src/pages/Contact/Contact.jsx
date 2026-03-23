import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import Button from '../../components/Button/Button';
import { siteConfig } from '../../config';
import styles from './Contact.module.css';

const contactInfo = [
  { icon: <FiPhone />, label: 'Phone', value: '+91 90477 54194', href: 'tel:+919047754194' },
  { icon: <FiMail />, label: 'Email', value: 'hello@muthura.in', href: 'mailto:hello@muthura.in' },
  { icon: <FiMapPin />, label: 'Address', value: siteConfig.address, href: null },
  { icon: <FiClock />, label: 'Support Hours', value: '24/7 — Always Available', href: null },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone)) errs.phone = 'Enter valid 10-digit Indian mobile number';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className={styles.contact}>
      {/* Hero */}
      <section className={styles.contact__hero}>
        <div className={styles.contact__heroBg} />
        <div className={`container ${styles.contact__heroInner}`}>
          <span className={styles.contact__eyebrow}>Get In Touch</span>
          <h1 className={styles.contact__title}>
            We&apos;re Here to <span className={styles.contact__titleAccent}>Help</span>
          </h1>
          <p className={styles.contact__subtitle}>
            Have a question, feedback, or need support? Our team responds within 2 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contact__body}>
        <div className="container">
          <div className={styles.contact__grid}>
            {/* Info Panel */}
            <div className={styles.contact__info}>
              <h2 className={styles.contact__infoTitle}>Contact Information</h2>
              <div className={styles.contact__infoList}>
                {contactInfo.map((item) => (
                  <div key={item.label} className={styles.contact__infoItem}>
                    <div className={styles.contact__infoIcon}>{item.icon}</div>
                    <div>
                      <p className={styles.contact__infoLabel}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className={styles.contact__infoValue}>{item.value}</a>
                      ) : (
                        <p className={styles.contact__infoValue}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.contact__emergency}>
                <p className={styles.contact__emergencyTitle}>🚨 Emergency Assistance</p>
                <p className={styles.contact__emergencyText}>
                  Stranded on the road? Don&apos;t use the form — call us directly or use our
                  Request Service feature for immediate help.
                </p>
                <p>Muthu Anushya M</p>
                <a href="tel:+919047754194" className={styles.contact__emergencyPhone}>
                  📞 +91 90477 54194
                </a>
              </div>

              <div className={styles.contact__grievance}>
                <p className={styles.contact__grievanceTitle}>⚖️ Grievance Officer</p>
                <p className={styles.contact__grievanceText}>
                  As per RBI guidelines and the Consumer Protection Act, 2019, you may escalate
                  unresolved complaints to our Grievance Officer.
                </p>
                <div className={styles.contact__grievanceDetails}>
                  <p><strong>Vehicle Helper</strong> (Individual / Sole Proprietor)</p>
                  <p>Muthu Anushya M</p>
                  <p>📧 <a href="mailto:hello@muthura.in">hello@muthura.in</a></p>
                  <p>📞 <a href="tel:+919047754194">+91 90477 54194</a></p>
                  <p>⏱ Response within <strong>48 business hours</strong></p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={styles.contact__formWrap}>
              {submitted ? (
                <div className={styles.contact__success}>
                  <FiCheckCircle className={styles.contact__successIcon} />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will respond within 2 hours.</p>
                  <Button variant="primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className={styles.contact__form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.contact__formRow}>
                    <div className={styles.contact__field}>
                      <label className={styles.contact__label} htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Rahul Sharma"
                        value={form.name}
                        onChange={handleChange}
                        className={`${styles.contact__input} ${errors.name ? styles['contact__input--error'] : ''}`}
                      />
                      {errors.name && <span className={styles.contact__error}>{errors.name}</span>}
                    </div>
                    <div className={styles.contact__field}>
                      <label className={styles.contact__label} htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="rahul@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={`${styles.contact__input} ${errors.email ? styles['contact__input--error'] : ''}`}
                      />
                      {errors.email && <span className={styles.contact__error}>{errors.email}</span>}
                    </div>
                  </div>

                  <div className={styles.contact__field}>
                    <label className={styles.contact__label} htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 9047754194"
                      value={form.phone}
                      onChange={handleChange}
                      className={`${styles.contact__input} ${errors.phone ? styles['contact__input--error'] : ''}`}
                    />
                    {errors.phone && <span className={styles.contact__error}>{errors.phone}</span>}
                  </div>

                  <div className={styles.contact__field}>
                    <label className={styles.contact__label} htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${styles.contact__input} ${styles.contact__textarea} ${errors.message ? styles['contact__input--error'] : ''}`}
                    />
                    {errors.message && <span className={styles.contact__error}>{errors.message}</span>}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={loading}
                    icon={<FiSend />}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
