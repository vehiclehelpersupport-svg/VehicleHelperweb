# Vehicle Helper – Setup Guide

## 1. Test Email Forwarding (hello@muthura.in)

1. From another email (e.g. Gmail), send a test email to **hello@muthura.in**
2. Check your Gmail inbox — the forwarded email should arrive
3. If it doesn’t, check Namecheap → Domain List → Muthura.in → Email Forwarding

---

## 2. Update Your Address

Edit **`src/config.js`** and set your address as per your PAN card:

```js
address: 'Your full address, City - Pincode, State, India',
```

---

## 3. Backend (MongoDB + Auth)

### First-time setup

```bash
cd server
npm install
```

### Create `.env` (if not present)

Copy from example and fill in:

```bash
cp .env.example .env
```

Edit `server/.env`:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your-secret-key
```

**Security:** If your MongoDB password was ever shared, change it in MongoDB Atlas (Database Access → Edit user → Edit password).

### Run backend

```bash
npm run server
```

Backend runs at `http://localhost:5000`.

---

## 4. Run Frontend

In a **new terminal**:

```bash
npm run dev
```

Frontend runs at `http://localhost:5173`.

---

## 5. Sign Up / Sign In

- **Register:** Create account with name, email, phone, password
- **Login:** Sign in with email and password
- User data is stored in MongoDB (`vehiclehelper` database, `users` collection)

---

## Address for Individual / PAN

For PhonePe verification as an individual:

- Use the **address from your PAN card** (residential address)
- No business address is required
- Update `src/config.js` with your full address
