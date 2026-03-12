import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import Button from '../../components/Button/Button';
import { useAuth } from '../../context/AuthContext';
import { login } from '../../api/auth';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const { login: setAuth } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';
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
      const data = await login({ email: form.email, password: form.password });
      setAuth(data);
      navigate('/');
    } catch (err) {
      setErrors({ api: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.auth}>
      <div className={styles.auth__left}>
        <div className={styles.auth__leftContent}>
          <Link to="/" className={styles.auth__logo}>
            <img src="/image.png" alt="Vehicle Helper" className={styles.auth__logoImg} />
            Vehicle<span className={styles.auth__logoAccent}>Helper</span>
          </Link>
          <h2 className={styles.auth__leftTitle}>
            Your 24/7 Vehicle Emergency Platform
          </h2>
          <p className={styles.auth__leftText}>
            Get roadside assistance, towing, and emergency repairs instantly.
            Payments secured via Cashfree.
          </p>
          <div className={styles.auth__features}>
            <div className={styles.auth__feature}>✅ Verified Professionals</div>
            <div className={styles.auth__feature}>🔒 Cashfree Secured Payments</div>
            <div className={styles.auth__feature}>📍 Real-time Tracking</div>
            <div className={styles.auth__feature}>⚡ Under 15-min Response</div>
          </div>
        </div>
      </div>

      <div className={styles.auth__right}>
        <div className={styles.auth__card}>
          <div className={styles.auth__header}>
            <h1 className={styles.auth__title}>Welcome Back</h1>
            <p className={styles.auth__subtitle}>Sign in to your account</p>
          </div>

          <form className={styles.auth__form} onSubmit={handleSubmit} noValidate>
            <div className={styles.auth__field}>
              <label className={styles.auth__label} htmlFor="email">Email Address</label>
              <div className={styles.auth__inputWrap}>
                <FiMail className={styles.auth__inputIcon} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`${styles.auth__input} ${errors.email ? styles['auth__input--error'] : ''}`}
                />
              </div>
              {errors.email && <span className={styles.auth__error}>{errors.email}</span>}
            </div>

            <div className={styles.auth__field}>
              <div className={styles.auth__labelRow}>
                <label className={styles.auth__label} htmlFor="password">Password</label>
                <a href="#" className={styles.auth__forgot}>Forgot password?</a>
              </div>
              <div className={styles.auth__inputWrap}>
                <FiLock className={styles.auth__inputIcon} />
                <input
                  id="password"
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Enter your password"
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

            {errors.api && <span className={styles.auth__error}>{errors.api}</span>}
            <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          <p className={styles.auth__switch}>
            Don&apos;t have an account?{' '}
            <Link to="/register" className={styles.auth__switchLink}>Create one free</Link>
          </p>

          <div className={styles.auth__divider}><span>Secured by</span></div>
          <div className={styles.auth__phonepeBadge}>💳 Cashfree Payment Gateway</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
