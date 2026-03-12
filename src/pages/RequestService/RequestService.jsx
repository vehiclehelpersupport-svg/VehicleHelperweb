import { useState } from 'react';
import { FiMapPin, FiTruck, FiTool, FiPhone, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import Button from '../../components/Button/Button';
import styles from './RequestService.module.css';

const serviceTypes = [
  { id: 'roadside', icon: '🚨', label: 'Roadside Assistance', desc: 'Flat tire, fuel, battery' },
  { id: 'towing', icon: '🚛', label: 'Vehicle Towing', desc: 'Safe tow to garage' },
  { id: 'repair', icon: '🔧', label: 'Emergency Repair', desc: 'On-spot mechanic' },
  { id: 'mechanic', icon: '📍', label: 'Nearby Mechanic', desc: 'Find mechanics near you' },
  { id: 'battery', icon: '🔋', label: 'Battery Jump Start', desc: 'Dead battery rescue' },
  { id: 'insurance', icon: '🛡️', label: 'Insurance Assistance', desc: 'Claim support' },
];

const vehicleTypes = ['Car', 'Motorcycle', 'SUV', 'Truck', 'Auto Rickshaw', 'Bus', 'Other'];

const RequestService = () => {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState('');
  const [form, setForm] = useState({
    name: '', phone: '', vehicleType: '', vehicleNumber: '', location: '', notes: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim()) errs.phone = 'Phone is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone)) errs.phone = 'Enter valid 10-digit number';
    if (!form.vehicleType) errs.vehicleType = 'Select vehicle type';
    if (!form.vehicleNumber.trim()) errs.vehicleNumber = 'Vehicle number is required';
    if (!form.location.trim()) errs.location = 'Location is required';
    return errs;
  };

  const handleNext = () => {
    if (!selected) return;
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  return (
    <div className={styles.req}>
      {/* Hero */}
      <section className={styles.req__hero}>
        <div className={styles.req__heroBg} />
        <div className={`container ${styles.req__heroInner}`}>
          <span className={styles.req__eyebrow}>24/7 Emergency Service</span>
          <h1 className={styles.req__title}>
            Request <span className={styles.req__titleAccent}>Vehicle Help</span>
          </h1>
          <p className={styles.req__subtitle}>
            Help is on the way. Average response time: <strong>under 15 minutes</strong>.
          </p>

          {/* Process overview - helps users understand */}
          <div className={styles.req__process}>
            <div className={styles.req__processStep}>
              <span className={styles.req__processNum}>1</span>
              <span>Choose Service</span>
            </div>
            <div className={styles.req__processArrow}>→</div>
            <div className={styles.req__processStep}>
              <span className={styles.req__processNum}>2</span>
              <span>Your Details</span>
            </div>
            <div className={styles.req__processArrow}>→</div>
            <div className={styles.req__processStep}>
              <span className={styles.req__processNum}>3</span>
              <span>Confirmed</span>
            </div>
          </div>

          {/* Step indicator for mobile */}
          <p className={styles.req__stepIndicator}>Step {step} of 3</p>

          {/* Progress */}
          <div className={styles.req__progress}>
            {['Choose Service', 'Your Details', 'Confirmed'].map((label, i) => (
              <div key={label} className={styles.req__progressItem}>
                <div className={`${styles.req__progressDot} ${step > i ? styles['req__progressDot--done'] : ''} ${step === i + 1 ? styles['req__progressDot--active'] : ''}`}>
                  {step > i + 1 ? '✓' : i + 1}
                </div>
                <span className={`${styles.req__progressLabel} ${step === i + 1 ? styles['req__progressLabel--active'] : ''}`}>{label}</span>
                {i < 2 && <div className={`${styles.req__progressLine} ${step > i + 1 ? styles['req__progressLine--done'] : ''}`} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.req__body}>
        <div className="container">
          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className={styles.req__step}>
              <h2 className={styles.req__stepTitle}>Select Service Type</h2>
              <div className={styles.req__serviceGrid}>
                {serviceTypes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`${styles.req__serviceCard} ${selected === s.id ? styles['req__serviceCard--active'] : ''}`}
                    onClick={() => setSelected(s.id)}
                  >
                    <span className={styles.req__serviceIcon}>{s.icon}</span>
                    <span className={styles.req__serviceLabel}>{s.label}</span>
                    <span className={styles.req__serviceDesc}>{s.desc}</span>
                  </button>
                ))}
              </div>
              {!selected && (
                <p className={styles.req__selectHint}>
                  <FiAlertCircle /> Please select a service to continue
                </p>
              )}
              <div className={styles.req__btnRow}>
                <Button variant="primary" size="lg" onClick={handleNext} disabled={!selected}>
                  Continue →
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Details Form */}
          {step === 2 && (
            <div className={styles.req__step}>
              <button className={styles.req__back} onClick={() => setStep(1)}>← Back</button>
              <h2 className={styles.req__stepTitle}>Details</h2>
              <p className={styles.req__stepDesc}>Enter your details and vehicle info. Payment via Cashfree after service.</p>
              <div className={styles.req__formCard}>
                <form className={styles.req__form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.req__formRow}>
                    <div className={styles.req__field}>
                      <label className={styles.req__label} htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" placeholder="Rahul Sharma" value={form.name} onChange={handleChange} className={`${styles.req__input} ${errors.name ? styles['req__input--error'] : ''}`} />
                      {errors.name && <span className={styles.req__error}>{errors.name}</span>}
                    </div>
                    <div className={styles.req__field}>
                      <label className={styles.req__label} htmlFor="phone">Mobile Number *</label>
                      <input id="phone" name="phone" type="tel" placeholder="9047754194" value={form.phone} onChange={handleChange} className={`${styles.req__input} ${errors.phone ? styles['req__input--error'] : ''}`} />
                      {errors.phone && <span className={styles.req__error}>{errors.phone}</span>}
                    </div>
                  </div>

                  <div className={styles.req__formRow}>
                    <div className={styles.req__field}>
                      <label className={styles.req__label} htmlFor="vehicleType">Vehicle Type *</label>
                      <select id="vehicleType" name="vehicleType" value={form.vehicleType} onChange={handleChange} className={`${styles.req__input} ${errors.vehicleType ? styles['req__input--error'] : ''}`}>
                        <option value="">Select vehicle type</option>
                        {vehicleTypes.map((v) => <option key={v} value={v}>{v}</option>)}
                      </select>
                      {errors.vehicleType && <span className={styles.req__error}>{errors.vehicleType}</span>}
                    </div>
                    <div className={styles.req__field}>
                      <label className={styles.req__label} htmlFor="vehicleNumber">Vehicle Number *</label>
                      <input id="vehicleNumber" name="vehicleNumber" type="text" placeholder="MH 01 AB 1234" value={form.vehicleNumber} onChange={handleChange} className={`${styles.req__input} ${errors.vehicleNumber ? styles['req__input--error'] : ''}`} />
                      {errors.vehicleNumber && <span className={styles.req__error}>{errors.vehicleNumber}</span>}
                    </div>
                  </div>

                  <div className={styles.req__field}>
                    <label className={styles.req__label} htmlFor="location">Current Location *</label>
                    <div className={styles.req__inputWrap}>
                      <FiMapPin className={styles.req__inputIcon} />
                      <input id="location" name="location" type="text" placeholder="Enter your current location or landmark" value={form.location} onChange={handleChange} className={`${styles.req__input} ${styles.req__inputPadded} ${errors.location ? styles['req__input--error'] : ''}`} />
                    </div>
                    {errors.location && <span className={styles.req__error}>{errors.location}</span>}
                  </div>

                  <div className={styles.req__field}>
                    <label className={styles.req__label} htmlFor="notes">Additional Notes (optional)</label>
                    <textarea id="notes" name="notes" rows={3} placeholder="Describe your situation..." value={form.notes} onChange={handleChange} className={`${styles.req__input} ${styles.req__textarea}`} />
                  </div>

                  <div className={styles.req__paymentNotice}>
                    <span>💜</span>
                    <p>Payment will be collected via <strong>Cashfree</strong> after service completion. No advance payment required.</p>
                  </div>

                  <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading} icon={loading ? null : <FiTruck />}>
                    {loading ? 'Finding Nearest Helper...' : 'Request Help Now'}
                  </Button>
                </form>
              </div>
            </div>
          )}

          {/* Step 3: Confirmed */}
          {step === 3 && (
            <div className={styles.req__confirmed}>
              <div className={styles.req__confirmedIcon}>
                <FiCheckCircle />
              </div>
              <h2 className={styles.req__confirmedTitle}>Help is On the Way!</h2>
              <p className={styles.req__confirmedText}>
                Your request has been confirmed. A verified professional is heading towards your location.
              </p>
              <div className={styles.req__confirmedDetails}>
                <div className={styles.req__confirmedDetail}>
                  <span>Service</span>
                  <strong>{serviceTypes.find((s) => s.id === selected)?.label}</strong>
                </div>
                <div className={styles.req__confirmedDetail}>
                  <span>ETA</span>
                  <strong className={styles.req__eta}>12–18 minutes</strong>
                </div>
                <div className={styles.req__confirmedDetail}>
                  <span>Payment</span>
                  <strong>After service via Cashfree</strong>
                </div>
              </div>
              <div className={styles.req__confirmedActions}>
                <a href="tel:+919047754194">
                  <Button variant="primary" size="lg" icon={<FiPhone />}>
                    Call Support
                  </Button>
                </a>
                <Button variant="outline" size="lg" onClick={() => { setStep(1); setSelected(''); setForm({ name: '', phone: '', vehicleType: '', vehicleNumber: '', location: '', notes: '' }); }}>
                  New Request
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default RequestService;
