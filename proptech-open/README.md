# PropSpace — Coworking CRM + ERP Platform

> **PropTechOpen Hackathon · Code #01**
> A unified multi-center Coworking CRM + ERP platform solving real operational bottlenecks for coworking space operators.

---

## 🚀 Live Demo

Open `index.html` in your browser — no build step required.

---

## 📦 Project Structure

```
proptech-open/
├── index.html                  ← Main entry point
├── README.md
├── docs/
│   └── ARCHITECTURE.md         ← System design & tech stack
└── src/
    ├── styles/
    │   └── main.css            ← Full design system & styles
    ├── data/
    │   └── mockData.js         ← Mock data (centers, clients, leads…)
    └── components/
        ├── panels.js           ← All 12 panel HTML renderers
        └── app.js              ← Navigation, modals, toast, seat map
```

---

## ✨ Features — 12 Modules

| Module | Description |
|---|---|
| 📊 **Dashboard** | KPIs, revenue by center, live activity, visitor & room summaries |
| 🗺️ **Floor Map** | Interactive seat grid — occupied / available / hot-desk / maintenance |
| 🎯 **Lead Pipeline** | Kanban CRM: Inquiry → Visit → Proposal → Agreement → Won |
| 👥 **Clients** | Searchable directory with plan, MRR, renewal date, status |
| 🔄 **Renewals** | Urgency tracker with days-left badges and reminder actions |
| 📋 **Proposals** | Quotation & proposal status management |
| 🚪 **Visitor Mgmt** | Smart check-in: walk-in, pre-booked, day-pass, out tracking |
| 📅 **Room Booking** | Hourly slot view across all rooms — Free / Booked / On Hold |
| 💰 **Finance** | Invoice tracker, revenue trend, collection rate, billing |
| 🎫 **Tickets** | Issue tracker with priority, SLA stats, category breakdown |
| 🏗️ **Team & Tasks** | RBAC team list, task board with urgency |
| ⚙️ **Settings** | Center config, integrations (Razorpay, Slack, Zoho), RBAC |

---

## 🎨 Tech Stack (Prototype)

- **Frontend:** Vanilla HTML5, CSS3 (CSS Variables, Grid, Flexbox), ES6 JavaScript
- **Fonts:** DM Sans + Space Grotesk (Google Fonts)
- **No dependencies / no build step** — open `index.html` and go

## 🏗️ Production Stack (Recommended)

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router) + Tailwind CSS |
| Backend | Node.js + Express / Fastify |
| Database | PostgreSQL + Prisma ORM (multi-tenant, row-level security) |
| Auth | Clerk / NextAuth with RBAC |
| Real-time | Supabase Realtime / Socket.io |
| Billing | Razorpay Subscriptions API |
| Floor Maps | SVG / Canvas with react-konva |
| Notifications | Firebase FCM / OneSignal |
| Deployment | Vercel (frontend) + Railway (backend) |

---

## 🏃 Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/proptech-open-coworking-crm.git
cd proptech-open-coworking-crm

# Open directly in browser (no server needed)
open index.html

# Or serve locally
npx serve .
# → http://localhost:3000
```

---

## 📐 Evaluation Criteria Addressed

| Criteria | How We Address It |
|---|---|
| **Problem Solving** | Unifies 6+ fragmented tools (spreadsheets, WhatsApp, booking tools) into one platform |
| **Innovation** | Interactive floor map, Kanban CRM, real-time occupancy, multi-center dashboard |
| **Technical Execution** | Clean component architecture, modular JS, responsive CSS design system |
| **Product Thinking** | 12 modules covering full operator lifecycle: lead → client → renewal → finance |
| **UI/UX** | Dark-mode design system, contextual badges, toast notifications, modal forms |
| **Real-World Impact** | Targets ₹4.5L/mo revenue leakage from missed renewals & booking gaps |

---

## 🗺️ Roadmap (Post-MVP)

- [ ] Multi-tenant PostgreSQL with per-center row-level security
- [ ] Razorpay subscription billing integration
- [ ] WhatsApp & email renewal reminders (automated)
- [ ] Real-time seat availability via WebSockets
- [ ] Mobile app (React Native)
- [ ] AI-powered occupancy forecasting
- [ ] Website CMS for operator's public listing page

---

## 👥 Team

Built for **PropTechOpen Hackathon 2026**

---

## 📄 License

MIT — free to use, modify, and deploy.
