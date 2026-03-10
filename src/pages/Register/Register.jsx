import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiPhone, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { siteConfig } from '../../config';
import Button from '../../components/Button/Button';
import { useAuth } from '../../context/AuthContext';
import { register } from '../../api/auth';
import styles from '../Login/Login.module.css';
import regStyles from './Register.module.css';

const Register = () => {
  const navigate = useNavigate();
  const { login: setAuth } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.phone.trim()) errs.phone = 'Phone is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone)) errs.phone = 'Enter valid 10-digit mobile number';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 8) errs.password = 'Minimum 8 characters';
    if (form.password !== form.confirm) errs.confirm = 'Passwords do not match';
    if (!agreed) errs.agreed = 'Please accept the terms to continue';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setErrors({});
    try {
      const data = await register({
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
      });
      setAuth(data);
      navigate('/');
    } catch (err) {
      setErrors({ api: err.message });
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { id: 'name', name: 'name', type: 'text', label: 'Full Name', placeholder: 'Rahul Sharma', icon: <FiUser /> },
    { id: 'email', name: 'email', type: 'email', label: 'Email Address', placeholder: 'rahul@example.com', icon: <FiMail /> },
    { id: 'phone', name: 'phone', type: 'tel', label: 'Mobile Number', placeholder: '9047754194', icon: <FiPhone /> },
  ];

  return (
    <div className={styles.auth}>
      <div className={styles.auth__left}>
        <div className={styles.auth__leftContent}>
          <Link to="/" className={styles.auth__logo}>
            <img src="/image.png" alt="Vehicle Helper" className={styles.auth__logoImg} />
            Vehicle<span className={styles.auth__logoAccent}>Helper</span>
          </Link>
          <h2 className={styles.auth__leftTitle}>
            Join {siteConfig.stats.happyDrivers} Drivers Already Protected
          </h2>
          <p className={styles.auth__leftText}>
            Create your free account and get instant access to roadside assistance,
            towing, and emergency repairs.
          </p>
          <div className={styles.auth__features}>
            <div className={styles.auth__feature}>🆓 Free to register</div>
            <div className={styles.auth__feature}>⚡ Instant service access</div>
            <div className={styles.auth__feature}>🔒 Bank-grade security</div>
            <div className={styles.auth__feature}>💜 PhonePe payment protection</div>
          </div>
        </div>
      </div>

      <div className={styles.auth__right}>
        <div className={`${styles.auth__card} ${regStyles.regCard}`}>
          <div className={styles.auth__header}>
            <h1 className={styles.auth__title}>Create Account</h1>
            <p className={styles.auth__subtitle}>Join VehicleHelper for free</p>
          </div>

          <form className={styles.auth__form} onSubmit={handleSubmit} noValidate>
            {fields.map((f) => (
              <div key={f.id} className={styles.auth__field}>
                <label className={styles.auth__label} htmlFor={f.id}>{f.label}</label>
                <div className={styles.auth__inputWrap}>
                  <span className={styles.auth__inputIcon}>{f.icon}</span>
                  <input
                    id={f.id}
                    name={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.name]}
                    onChange={handleChange}
                    className={`${styles.auth__input} ${errors[f.name] ? styles['auth__input--error'] : ''}`}
                  />
                </div>
                {errors[f.name] && <span className={styles.auth__error}>{errors[f.name]}</span>}
              </div>
            ))}

            <div className={regStyles.passRow}>
              <div className={styles.auth__field}>
                <label className={styles.auth__label} htmlFor="password">Password</label>
                <div className={styles.auth__inputWrap}>
                  <FiLock className={styles.auth__inputIcon} />
                  <input
                    id="password"
                    name="password"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Min 8 characters"
                    value={form.password}
                    onChange={handleChange}
                    className={`${styles.auth__input} ${errors.password ? styles['auth__input--error'] : ''}`}
                  />
                  <button type="button" className={styles.auth__eyeBtn} onClick={() => setShowPass(!showPass)}>
                    {showPass ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                {errors.password && <span className={styles.auth__error}>{errors.password}</span>}
              </div>
              <div className={styles.auth__field}>
                <label className={styles.auth__label} htmlFor="confirm">Confirm Password</label>
                <div className={styles.auth__inputWrap}>
                  <FiLock className={styles.auth__inputIcon} />
                  <input
                    id="confirm"
                    name="confirm"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Repeat password"
                    value={form.confirm}
                    onChange={handleChange}
                    className={`${styles.auth__input} ${errors.confirm ? styles['auth__input--error'] : ''}`}
                  />
                </div>
                {errors.confirm && <span className={styles.auth__error}>{errors.confirm}</span>}
              </div>
            </div>

            {errors.api && <span className={styles.auth__error}>{errors.api}</span>}
            <div className={regStyles.agreed}>
              <label className={regStyles.checkLabel}>
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked);
                    if (errors.agreed) setErrors((prev) => ({ ...prev, agreed: '' }));
                  }}
                  className={regStyles.checkbox}
                />
                <span>
                  I agree to the{' '}
                  <Link to="/terms-and-conditions" className={regStyles.checkLink}>Terms &amp; Conditions</Link>
                  {' '}and{' '}
                  <Link to="/privacy-policy" className={regStyles.checkLink}>Privacy Policy</Link>
                </span>
              </label>
              {errors.agreed && <span className={styles.auth__error}>{errors.agreed}</span>}
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Free Account'}
            </Button>
          </form>

          <p className={styles.auth__switch}>
            Already have an account?{' '}
            <Link to="/login" className={styles.auth__switchLink}>Sign in</Link>
          </p>

          <div className={styles.auth__phonepeBadge}>💜 Secured by PhonePe Payment Gateway</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
