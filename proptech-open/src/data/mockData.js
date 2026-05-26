// =====================================================
//  PropSpace — Mock Data
// =====================================================

const CENTERS = [
  { id: 'hsr', name: 'HSR Layout', city: 'Bangalore', floors: 4, seats: 380, occupied: 318, revenue: 1420000 },
  { id: 'koramangala', name: 'Koramangala', city: 'Bangalore', floors: 3, seats: 310, occupied: 244, revenue: 1180000 },
  { id: 'whitefield', name: 'Whitefield', city: 'Bangalore', floors: 3, seats: 290, occupied: 228, revenue: 930000 },
  { id: 'indiranagar', name: 'Indiranagar', city: 'Bangalore', floors: 2, seats: 260, occupied: 214, revenue: 730000 }
];

const CLIENTS = [
  { id: 1, company: 'Razorpay India', center: 'HSR Layout', seats: 12, plan: 'Private Office', mrr: 380000, joined: 'May 24, 2026', renewal: 'May 24, 2027', status: 'active', contact: 'Vikram Shah', email: 'vikram@razorpay.com' },
  { id: 2, company: 'Cloudtail India', center: 'Whitefield', seats: 18, plan: 'Dedicated Desk', mrr: 240000, joined: 'Jun 1, 2025', renewal: 'Jun 1, 2026', status: 'renewal', contact: 'Meera Nair', email: 'meera@cloudtail.com' },
  { id: 3, company: 'Swiggy Design Hub', center: 'HSR Layout', seats: 8, plan: 'Flexible Desk', mrr: 92000, joined: 'Jul 7, 2025', renewal: 'Jun 7, 2026', status: 'renewal', contact: 'Aryan Gupta', email: 'aryan@swiggy.com' },
  { id: 4, company: 'Bounce Infinity', center: 'Koramangala', seats: 9, plan: 'Private Office', mrr: 140000, joined: 'May 20, 2026', renewal: 'May 20, 2027', status: 'active', contact: 'Sneha Reddy', email: 'sneha@bounce.in' },
  { id: 5, company: 'Meesho Analytics', center: 'Koramangala', seats: 5, plan: 'Hot Desk', mrr: 55000, joined: 'Dec 12, 2025', renewal: 'Jun 12, 2026', status: 'renewal', contact: 'Rahul Jain', email: 'rahul@meesho.com' },
  { id: 6, company: 'Nykaa Tech', center: 'Indiranagar', seats: 6, plan: 'Dedicated Desk', mrr: 72000, joined: 'Mar 3, 2026', renewal: 'Mar 3, 2027', status: 'active', contact: 'Pooja Singh', email: 'pooja@nykaa.com' },
  { id: 7, company: 'PhonePe Design', center: 'Whitefield', seats: 14, plan: 'Private Office', mrr: 220000, joined: 'May 18, 2026', renewal: 'May 18, 2027', status: 'onboarding', contact: 'Dev Kumar', email: 'dev@phonepe.com' },
  { id: 8, company: 'OYO Rooms Tech', center: 'HSR Layout', seats: 22, plan: 'Enterprise Floor', mrr: 580000, joined: 'Jan 15, 2026', renewal: 'Jan 15, 2027', status: 'active', contact: 'Ankit Sharma', email: 'ankit@oyorooms.com' },
  { id: 9, company: 'Lenskart Digital', center: 'Indiranagar', seats: 7, plan: 'Dedicated Desk', mrr: 84000, joined: 'Feb 10, 2026', renewal: 'Feb 10, 2027', status: 'active', contact: 'Riya Mehta', email: 'riya@lenskart.com' },
  { id: 10, company: 'Urban Company', center: 'Koramangala', seats: 10, plan: 'Private Office', mrr: 160000, joined: 'Apr 5, 2026', renewal: 'Apr 5, 2027', status: 'active', contact: 'Nikhil Das', email: 'nikhil@urbancompany.com' }
];

const LEADS = [
  { id: 1, company: 'Freshworks Inc', stage: 'new', seats: 12, center: 'Koramangala', mrr: 140000, priority: 'hot', contact: 'Prashant K.' },
  { id: 2, company: 'InMobi Bangalore', stage: 'new', seats: 8, center: 'HSR Layout', mrr: 88000, priority: 'normal', contact: 'Tejal M.' },
  { id: 3, company: 'Unacademy', stage: 'new', seats: 20, center: 'Whitefield', mrr: 210000, priority: 'normal', contact: 'Gaurav S.' },
  { id: 4, company: 'Navi Technologies', stage: 'new', seats: 6, center: 'Any', mrr: 58000, priority: 'normal', contact: 'Smita R.' },
  { id: 5, company: 'Razorpay Data', stage: 'visit', seats: 30, center: 'HSR Layout', mrr: 320000, priority: 'hot', contact: 'Deepak A.' },
  { id: 6, company: 'Licious Foods', stage: 'visit', seats: 10, center: 'Koramangala', mrr: 110000, priority: 'normal', contact: 'Kavita P.' },
  { id: 7, company: 'CRED Bengaluru', stage: 'proposal', seats: 40, center: 'HSR Layout', mrr: 480000, priority: 'hot', contact: 'Kunal B.' },
  { id: 8, company: 'Ola Electric', stage: 'proposal', seats: 25, center: 'Whitefield', mrr: 290000, priority: 'normal', contact: 'Bhavna T.' },
  { id: 9, company: 'Zepto Bengaluru', stage: 'proposal', seats: 15, center: 'Koramangala', mrr: 170000, priority: 'normal', contact: 'Rohan V.' },
  { id: 10, company: 'PhonePe Design', stage: 'agreement', seats: 14, center: 'Whitefield', mrr: 220000, priority: 'hot', contact: 'Dev K.' },
  { id: 11, company: 'Swiggy Instamart', stage: 'agreement', seats: 12, center: 'HSR Layout', mrr: 160000, priority: 'normal', contact: 'Aryan G.' },
  { id: 12, company: 'Razorpay India', stage: 'won', seats: 12, center: 'HSR Layout', mrr: 380000, priority: 'hot', contact: 'Vikram S.' },
  { id: 13, company: 'Bounce Infinity', stage: 'won', seats: 9, center: 'Koramangala', mrr: 140000, priority: 'normal', contact: 'Sneha R.' }
];

const VISITORS = [
  { id: 1, name: 'Ananya Sharma', host: 'Razorpay India', center: 'HSR Layout', time: '09:42 AM', purpose: 'Meeting', status: 'in', initials: 'AS', color: '#4f8ef7' },
  { id: 2, name: 'Ravi Kumar', host: 'OYO Rooms Tech', center: 'Koramangala', time: '10:15 AM', purpose: 'Interview', status: 'in', initials: 'RK', color: '#22c98a' },
  { id: 3, name: 'Divya Menon', host: 'Site Visit', center: 'HSR Layout', time: 'Pending', purpose: 'Site Visit', status: 'pending', initials: 'DM', color: '#f04b6a' },
  { id: 4, name: 'Priya Mehta', host: 'Training Session', center: 'Whitefield', time: '08:30 AM', purpose: 'Training', status: 'out', outTime: '12:00 PM', initials: 'PM', color: '#f59e0b' },
  { id: 5, name: 'Siddharth N.', host: 'Nykaa Tech', center: 'Indiranagar', time: '02:00 PM', purpose: 'Pre-booked', status: 'scheduled', initials: 'SN', color: '#7b5cf5' },
  { id: 6, name: 'Kavita Patel', host: 'Day Pass', center: 'HSR Layout', time: '09:00 AM', purpose: 'Day Pass', status: 'in', initials: 'KP', color: '#14b8b8' }
];

const TICKETS = [
  { id: 'T-041', title: 'AC not working — Floor 2', priority: 'critical', center: 'Indiranagar', assigned: 'Maintenance Team', raised: '2 hours ago', category: 'Maintenance', status: 'open' },
  { id: 'T-039', title: 'Projector bulb replacement — Summit Room', priority: 'medium', center: 'HSR Layout', assigned: 'Ops Team', raised: '1 day ago', category: 'Maintenance', status: 'open' },
  { id: 'T-038', title: 'WiFi drop on 4th floor', priority: 'high', center: 'Koramangala', assigned: 'IT Team', raised: '1 day ago', category: 'IT / Network', status: 'open' },
  { id: 'T-037', title: 'Printer out of paper — Zone A', priority: 'low', center: 'Whitefield', assigned: 'Admin', raised: '3 hours ago', category: 'Admin / Ops', status: 'open' },
  { id: 'T-036', title: 'Locker key missing for L-24', priority: 'low', center: 'HSR Layout', assigned: 'Community Lead', raised: '5 hours ago', category: 'Admin / Ops', status: 'open' },
  { id: 'T-035', title: 'Coffee machine not dispensing', priority: 'medium', center: 'Koramangala', assigned: 'Housekeeping', raised: '2 days ago', category: 'Housekeeping', status: 'resolved' },
  { id: 'T-034', title: 'Door access card malfunction — B2', priority: 'high', center: 'Whitefield', assigned: 'IT Team', raised: '3 days ago', category: 'IT / Network', status: 'resolved' }
];

const INVOICES = [
  { id: 'INV-0284', client: 'Razorpay India', center: 'HSR Layout', amount: 380000, status: 'paid', date: 'May 1, 2026' },
  { id: 'INV-0283', client: 'OYO Rooms Tech', center: 'HSR Layout', amount: 580000, status: 'paid', date: 'May 1, 2026' },
  { id: 'INV-0282', client: 'Cloudtail India', center: 'Whitefield', amount: 240000, status: 'pending', date: 'May 5, 2026' },
  { id: 'INV-0281', client: 'PhonePe Design', center: 'Whitefield', amount: 220000, status: 'sent', date: 'May 18, 2026' },
  { id: 'INV-0280', client: 'Meesho Analytics', center: 'Koramangala', amount: 55000, status: 'overdue', date: 'Apr 12, 2026' },
  { id: 'INV-0279', client: 'Nykaa Tech', center: 'Indiranagar', amount: 72000, status: 'paid', date: 'May 3, 2026' },
  { id: 'INV-0278', client: 'Bounce Infinity', center: 'Koramangala', amount: 140000, status: 'paid', date: 'May 20, 2026' }
];

const TEAM = [
  { id: 1, name: 'Rohan Malhotra', role: 'Center Head', center: 'All Centers', initials: 'RM', color: 'linear-gradient(135deg,#4f8ef7,#7b5cf5)', badge: 'Admin', badgeClass: 'purple' },
  { id: 2, name: 'Shreya Kapoor', role: 'Community Lead', center: 'HSR Layout', initials: 'SK', color: '#22c98a', badge: 'Manager', badgeClass: 'green' },
  { id: 3, name: 'Arjun Joshi', role: 'Sales Executive', center: 'Koramangala', initials: 'AJ', color: '#f59e0b', badge: 'Sales', badgeClass: 'amber' },
  { id: 4, name: 'Pooja Dixit', role: 'Finance Manager', center: 'All Centers', initials: 'PD', color: '#14b8b8', badge: 'Finance', badgeClass: 'teal' },
  { id: 5, name: 'Varun Rao', role: 'Operations', center: 'Whitefield', initials: 'VR', color: '#f04b6a', badge: 'Ops', badgeClass: 'blue' },
  { id: 6, name: 'Anita Verma', role: 'Community Lead', center: 'Indiranagar', initials: 'AV', color: '#7b5cf5', badge: 'Manager', badgeClass: 'purple' }
];

const TASKS = [
  { id: 1, title: 'Follow up: CRED proposal', due: 'Today', assigned: 'Arjun Joshi', priority: 'amber', status: 'open' },
  { id: 2, title: 'Send Cloudtail renewal contract', due: 'Overdue', assigned: 'Rohan Malhotra', priority: 'red', status: 'open' },
  { id: 3, title: 'Onboard PhonePe Design team', due: 'Tomorrow', assigned: 'Shreya Kapoor', priority: 'blue', status: 'open' },
  { id: 4, title: 'Razorpay KYC verification', due: 'Done', assigned: 'Pooja Dixit', priority: 'green', status: 'done' },
  { id: 5, title: 'Update floor map — Whitefield Floor 2', due: 'Jun 1', assigned: 'Varun Rao', priority: 'blue', status: 'open' },
  { id: 6, title: 'Prepare May revenue report', due: 'Jun 2', assigned: 'Pooja Dixit', priority: 'blue', status: 'open' }
];

const ROOMS = [
  { id: 'skyline', name: '🏛 Skyline', capacity: 12, center: 'HSR Layout', slots: ['booked','booked','mine','','booked','block','','booked',''] },
  { id: 'horizon', name: '🌅 Horizon', capacity: 8, center: 'HSR Layout', slots: ['booked','','','booked','','','booked','','amber'] },
  { id: 'summit', name: '🏔 Summit', capacity: 6, center: 'HSR Layout', slots: ['','','booked','booked','booked','','','booked',''] },
  { id: 'garden', name: '🌿 Garden', capacity: 4, center: 'HSR Layout', slots: ['','','','amber','','booked','booked','',''] }
];

const PROPOSALS = [
  { id: 'PROP-012', client: 'CRED Bengaluru', seats: 40, plan: 'Enterprise Floor', mrr: 480000, version: 'v2', status: 'negotiating', sent: 'May 20, 2026' },
  { id: 'PROP-011', client: 'Ola Electric', seats: 25, plan: 'Private Office', mrr: 290000, version: 'v1', status: 'awaiting', sent: 'May 18, 2026' },
  { id: 'PROP-010', client: 'Zepto Bengaluru', seats: 15, plan: 'Dedicated Desk', mrr: 170000, version: 'v1', status: 'counter', sent: 'May 15, 2026' },
  { id: 'PROP-009', client: 'Freshworks Inc', seats: 12, plan: 'Private Office', mrr: 140000, version: 'v1', status: 'draft', sent: '—' },
  { id: 'PROP-008', client: 'PhonePe Design', seats: 14, plan: 'Private Office', mrr: 220000, version: 'v3', status: 'accepted', sent: 'May 16, 2026' }
];

window.APP_DATA = { CENTERS, CLIENTS, LEADS, VISITORS, TICKETS, INVOICES, TEAM, TASKS, ROOMS, PROPOSALS };
