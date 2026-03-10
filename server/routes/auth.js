import { Router } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production';

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const phoneClean = String(phone || '').replace(/\s/g, '');

    if (!name || !email || !phone || !password) {
      return res.status(400).json({ error: 'Name, email, phone and password are required' });
    }
    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }
    if (!/^[6-9]\d{9}$/.test(phoneClean)) {
      return res.status(400).json({ error: 'Enter valid 10-digit Indian mobile number' });
    }

    const existing = await User.findOne({ $or: [{ email: email.toLowerCase().trim() }, { phone: phoneClean }] });
    if (existing) {
      return res.status(400).json({ error: existing.email === email.toLowerCase().trim() ? 'Email already registered' : 'Phone number already registered' });
    }

    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phoneClean,
      password,
    });
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    return res.status(201).json({
      user: { id: user._id, name: user.name, email: user.email, phone: user.phone },
      token,
    });
  } catch (err) {
    console.error('Register error:', err);
    const message = err.code === 11000 ? 'Email or phone already registered' : (err.message || 'Registration failed');
    return res.status(500).json({ error: message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    return res.json({
      user: { id: user._id, name: user.name, email: user.email, phone: user.phone },
      token,
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Login failed' });
  }
});

export default router;
