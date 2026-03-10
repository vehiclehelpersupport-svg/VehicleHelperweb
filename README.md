# 🚗 Vehicle Helper

> India's most trusted 24/7 roadside assistance and vehicle emergency services platform.
> Payments secured by **PhonePe**.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat&logo=react-router)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-264de4?style=flat&logo=css3)

---

## ✨ Features

- **24/7 Roadside Assistance** — towing, emergency repair, battery jump start, nearby mechanic
- **3-step service wizard** — select service → fill details → confirmed with ETA
- **PhonePe payment integration** — secure, post-service payments
- **Real-time tracking UI** — live helper location card on hero section
- **Full authentication UI** — Login & Register pages with form validation
- **Legal compliance** — Privacy Policy, Terms & Conditions, Refund Policy
- **Mobile-first responsive** — works on all screen sizes
- **Modern dark hero** — Uber/Ola inspired design language

---

## 🖥️ Pages

| Route | Page |
|---|---|
| `/` | Home — Hero, Services, How It Works, Testimonials, CTA |
| `/about` | About — Mission, Stats, Values, PhonePe section |
| `/contact` | Contact — Form with validation + emergency panel |
| `/login` | Login — Split-panel with feature sidebar |
| `/register` | Register — Full form with T&C checkbox |
| `/request-service` | Request Service — 3-step wizard |
| `/privacy-policy` | Privacy Policy |
| `/terms-and-conditions` | Terms & Conditions |
| `/refund-policy` | Refund Policy |

---

## 🎨 Theme

| Token | Value |
|---|---|
| Primary | `#33CCCC` |
| Secondary | `#29A3A3` |
| Gradient | `linear-gradient(135deg, #33CCCC, #29A3A3)` |

---

## 🛠️ Tech Stack

- **React 18** + **Vite 7**
- **React Router v6** — `createBrowserRouter` with nested layouts
- **CSS Modules** — scoped, zero-collision styles
- **react-icons** — Feather icon set
- **Inter** — Google Fonts

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Button/          # 5 variants (primary, outline, ghost, dark, white)
│   ├── ServiceCard/     # Animated hover card
│   ├── Navbar/          # Transparent → frosted-glass scroll navbar
│   ├── Footer/          # 4-column grid with legal links
│   ├── Hero/            # Dark hero with live tracking card
│   ├── ServiceSection/  # 6-service grid
│   ├── HowItWorks/      # 4-step process
│   └── CTASection/      # Gradient call-to-action
├── layouts/
│   └── MainLayout/      # Navbar + Footer wrapper, scroll-to-top
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Contact/
│   ├── Login/
│   ├── Register/
│   ├── RequestService/
│   ├── PrivacyPolicy/
│   ├── TermsAndConditions/
│   └── RefundPolicy/
├── routes/              # createBrowserRouter config
└── theme/               # Design tokens (JS + CSS variables)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/vehicle-helper.git
cd vehicle-helper

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## 💳 PhonePe Payment Gateway

This project is built for **PhonePe payment gateway verification**. The platform demonstrates:

- Secure post-service payment flow (no advance charges)
- PhonePe branding on auth pages, service wizard, and footer
- Refund policy aligned with PhonePe dispute resolution
- RBI-compliant payment messaging

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

- Email: hello@muthura.in
- Phone: +91 98765 43210
- Location: Mumbai, Maharashtra, India
