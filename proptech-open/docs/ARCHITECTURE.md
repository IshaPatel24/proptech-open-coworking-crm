# PropSpace — Architecture Document

## System Overview

PropSpace is a **multi-tenant SaaS platform** for coworking space operators managing multiple branch locations. It provides a unified CRM + ERP experience covering the full client lifecycle from lead acquisition through billing and renewal.

---

## Core Architecture: Multi-Tenant Model

```
┌─────────────────────────────────────────────────────────┐
│                     PROPSPACE PLATFORM                   │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Operator │  │ Operator │  │ Operator │   (Tenants)  │
│  │    A     │  │    B     │  │    C     │              │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘              │
│       │              │              │                    │
│  ┌────▼──────────────▼──────────────▼─────────────┐    │
│  │           Multi-Tenant API Layer                │    │
│  │        (Row-Level Security per tenant)          │    │
│  └─────────────────────┬───────────────────────────┘    │
│                        │                                 │
│  ┌─────────────────────▼───────────────────────────┐    │
│  │              PostgreSQL Database                 │    │
│  │  tenants → centers → floors → seats → bookings  │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

---

## Database Schema (Core Tables)

```sql
-- Multi-tenancy root
tenants         (id, name, plan, created_at)
centers         (id, tenant_id, name, city, address, floors, total_seats)
users           (id, tenant_id, name, email, role, center_id)

-- CRM
leads           (id, tenant_id, center_id, company, contact, email, phone,
                 stage, seats_needed, mrr_expected, created_at, updated_at)
clients         (id, tenant_id, center_id, company, contact, email,
                 plan_type, seats, mrr, start_date, renewal_date, status)
proposals       (id, tenant_id, lead_id, version, total_value, status, sent_at)

-- Floors & Seats
floors          (id, center_id, number, name, total_seats)
seats           (id, floor_id, zone, seat_number, type, status, client_id, member_name)
conference_rooms(id, center_id, name, capacity, amenities)
room_bookings   (id, room_id, user_id, client_id, start_time, end_time, title, status)

-- Visitors
visitors        (id, center_id, name, phone, host_name, company,
                 check_in, check_out, type, status)

-- Finance
invoices        (id, tenant_id, client_id, amount, due_date, paid_date, status)
payments        (id, invoice_id, amount, method, gateway_ref, paid_at)

-- Ops
tickets         (id, center_id, title, category, priority, status,
                 assigned_to, created_at, resolved_at)
tasks           (id, tenant_id, assigned_to, title, due_date, status, linked_to)
```

---

## Module Architecture

### 1. CRM Layer
```
Lead Capture → Stage Tracking → Proposal Generation → 
Agreement → Client Onboarding → Seat Assignment → Renewal Tracking
```

### 2. Operations Layer
```
Visitor Check-in (QR/Manual) → Floor Map (real-time) → 
Room Booking → Ticket Creation → Resolution Tracking
```

### 3. Finance Layer
```
Seat Assignment → Auto Invoice Generation → 
Payment Gateway (Razorpay) → Collection Tracking → 
Revenue Reporting → Renewal Alerts
```

---

## Key Technology Decisions

### Interactive Floor Map
- **SVG-based** seat grid with zone grouping
- Real-time status via WebSocket (occupied/available/maintenance)
- Click-to-assign and click-to-view tenant info
- Future: Canvas-based drag-drop floor editor

### Multi-Center Dashboard
- Aggregated KPIs across all centers with per-center drill-down
- Center switcher applies filter context globally

### Notification & Reminder Engine
```
Cron Job → Check renewals_due ≤ 30 days →
  → Send WhatsApp (Twilio/WATI)
  → Send Email (SendGrid)
  → Create in-app notification
  → Create task for sales rep
```

### RBAC (Role-Based Access Control)
| Role | Access |
|---|---|
| Admin | All modules, all centers |
| Center Manager | All modules for assigned center |
| Sales Executive | CRM: Leads, Clients, Proposals |
| Finance | Billing, Invoices, Revenue |
| Community Lead | Visitors, Bookings, Tickets |
| Operations | Floor Map, Maintenance Tickets |

---

## API Design (REST)

```
GET    /api/centers                    → all centers for tenant
GET    /api/centers/:id/dashboard      → center KPIs
GET    /api/leads                      → pipeline with filters
POST   /api/leads                      → create lead
PATCH  /api/leads/:id/stage            → move pipeline stage
GET    /api/clients                    → client list
POST   /api/clients                    → onboard client
GET    /api/floors/:id/seats           → seat map data
POST   /api/seats/:id/assign           → assign seat
GET    /api/rooms/:id/availability     → slot availability
POST   /api/bookings                   → create booking
GET    /api/visitors/today             → today's check-ins
POST   /api/visitors/checkin           → walk-in check-in
GET    /api/invoices                   → invoice list
POST   /api/invoices/generate          → generate invoice
GET    /api/renewals/upcoming          → renewals ≤ 30 days
POST   /api/tickets                    → create ticket
```

---

## Deployment Architecture

```
User Browser
     │
     ▼
Vercel Edge (Next.js Frontend)
     │
     ▼
Railway / Render (Node.js API)
     │
     ├──► PostgreSQL (Supabase / Railway)
     ├──► Redis (session cache, rate limiting)
     ├──► Razorpay API (payments & subscriptions)
     ├──► SendGrid (email notifications)
     ├──► WATI / Twilio (WhatsApp alerts)
     └──► Firebase FCM (push notifications)
```

---

## Security Considerations

- **Row-Level Security** in PostgreSQL — tenants can never access each other's data
- **JWT Auth** with short expiry + refresh tokens
- **RBAC middleware** on every API endpoint
- **Input sanitization** via Zod schema validation
- **Rate limiting** on public endpoints (visitor check-in QR)
- **Audit log** for all financial and access events
