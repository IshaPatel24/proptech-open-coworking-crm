// =====================================================
//  PropSpace — Panel HTML Generators
// =====================================================

function fmtMoney(n) {
  if (n >= 100000) return '₹' + (n / 100000).toFixed(1) + 'L';
  if (n >= 1000) return '₹' + Math.round(n / 1000) + 'K';
  return '₹' + n;
}

function statusBadge(s) {
  const map = {
    active: 'green', renewal: 'amber', onboarding: 'blue',
    paid: 'green', pending: 'amber', sent: 'blue', overdue: 'red',
    open: 'red', resolved: 'green', in: 'green', out: 'amber',
    scheduled: 'purple', 'day pass': 'teal',
    negotiating: 'amber', awaiting: 'blue', counter: 'red', draft: 'gray', accepted: 'green',
    critical: 'red', high: 'red', medium: 'amber', low: 'blue',
    won: 'green', new: 'gray', visit: 'blue', proposal: 'amber', agreement: 'green'
  };
  const labels = {
    active: 'Active', renewal: 'Renewal Due', onboarding: 'Onboarding',
    paid: 'Paid', pending: 'Pending', sent: 'Sent', overdue: 'Overdue',
    open: 'Open', resolved: 'Resolved', in: 'In', out: 'Out',
    scheduled: 'Scheduled', 'day pass': 'Day Pass',
    negotiating: 'Negotiating', awaiting: 'Awaiting', counter: 'Counter-offer', draft: 'Draft', accepted: 'Accepted',
    critical: 'Critical', high: 'High', medium: 'Medium', low: 'Low'
  };
  return `<span class="badge ${map[s] || 'gray'}">${labels[s] || s}</span>`;
}

// ===================== DASHBOARD =====================
function renderDashboard() {
  return `
  <div class="stats-grid">
    <div class="stat-card blue"><div class="stat-label">Total Occupancy</div><div class="stat-value">81%</div><div class="stat-delta up">↑ 6% vs last month</div><div class="stat-icon">🏢</div></div>
    <div class="stat-card green"><div class="stat-label">Monthly Revenue</div><div class="stat-value">₹42.6L</div><div class="stat-delta up">↑ ₹3.1L vs April</div><div class="stat-icon">💰</div></div>
    <div class="stat-card amber"><div class="stat-label">Active Clients</div><div class="stat-value">238</div><div class="stat-delta up">↑ 14 this month</div><div class="stat-icon">👥</div></div>
    <div class="stat-card purple"><div class="stat-label">Pending Renewals</div><div class="stat-value">18</div><div class="stat-delta down">3 due this week</div><div class="stat-icon">🔄</div></div>
  </div>
  <div class="grid2">
    <div class="card">
      <div class="card-head"><span class="card-title">Revenue by Center</span><span class="text-xs text-muted">May 2026</span></div>
      <div class="card-body">
        ${APP_DATA.CENTERS.map(c => `
          <div style="margin-bottom:10px">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-sm fw500">${c.name}</span>
              <span class="ml-auto text-sm" style="color:var(--green);font-weight:600">${fmtMoney(c.revenue)}</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:${Math.round(c.revenue/1500000*100)}%;background:var(--accent)"></div></div>
          </div>`).join('')}
        <div style="display:flex;gap:10px;margin-top:14px">
          <div class="mini-stat" style="flex:1"><div class="label">Seats Total</div><div class="value">1,240</div></div>
          <div class="mini-stat" style="flex:1"><div class="label">Occupied</div><div class="value" style="color:var(--accent)">1,004</div></div>
          <div class="mini-stat" style="flex:1"><div class="label">Available</div><div class="value" style="color:var(--green)">236</div></div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-head"><span class="card-title">Live Activity</span><span class="badge green">● Live</span></div>
      <div class="card-body">
        <div class="timeline-item"><div class="timeline-icon" style="background:rgba(34,201,138,0.15);color:var(--green)">✓</div><div class="timeline-body"><div class="timeline-title">Razorpay India onboarded</div><div class="timeline-sub">12 seats · HSR Layout · 2 min ago</div></div></div>
        <div class="timeline-item"><div class="timeline-icon" style="background:rgba(79,142,247,0.15);color:var(--accent)">📅</div><div class="timeline-body"><div class="timeline-title">Conf Room Skyline booked</div><div class="timeline-sub">Koramangala · 10:00–11:00 · Shreya K.</div></div></div>
        <div class="timeline-item"><div class="timeline-icon" style="background:rgba(245,158,11,0.15);color:var(--amber)">⚠️</div><div class="timeline-body"><div class="timeline-title">Renewal due: Cloudtail India</div><div class="timeline-sub">Whitefield · Expires Jun 1 · ₹2.4L/mo</div></div></div>
        <div class="timeline-item"><div class="timeline-icon" style="background:rgba(123,92,245,0.15);color:var(--accent2)">🚪</div><div class="timeline-body"><div class="timeline-title">Walk-in: Ananya Sharma</div><div class="timeline-sub">HSR Layout · 09:42 AM · Registered</div></div></div>
        <div class="timeline-item"><div class="timeline-icon" style="background:rgba(240,75,106,0.15);color:var(--red)">🎫</div><div class="timeline-body"><div class="timeline-title">Ticket #T-041 escalated</div><div class="timeline-sub">AC not working · Indiranagar Floor 2</div></div></div>
      </div>
    </div>
  </div>
  <div class="grid3">
    <div class="card">
      <div class="card-head"><span class="card-title">Today's Visitors</span><span class="text-xs text-muted">14 check-ins</span></div>
      <div class="card-body">
        ${APP_DATA.VISITORS.map(v => `
          <div class="visitor-row">
            <div class="visitor-av" style="background:${v.color}">${v.initials}</div>
            <div class="visitor-info"><div class="visitor-name">${v.name}</div><div class="visitor-sub">${v.center} · ${v.time}</div></div>
            ${statusBadge(v.status)}
          </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-head"><span class="card-title">Room Availability</span><span class="text-xs text-muted">HSR · Today</span></div>
      <div class="card-body">
        <div class="slot-grid" style="margin-bottom:10px">
          <div class="slot booked">09:00</div><div class="slot booked">10:00</div><div class="slot mine">11:00</div>
          <div class="slot">12:00</div><div class="slot booked">13:00</div><div class="slot block">14:00</div>
          <div class="slot">15:00</div><div class="slot booked">16:00</div><div class="slot">17:00</div>
          <div class="slot block">18:00</div><div class="slot">19:00</div><div class="slot">20:00</div>
        </div>
        <div style="display:flex;gap:10px;font-size:10px;color:var(--text3)">
          <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;border-radius:2px;background:rgba(79,142,247,0.2);border:1px solid var(--accent)"></div>Booked</div>
          <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;border-radius:2px;background:rgba(34,201,138,0.2);border:1px solid var(--green)"></div>Mine</div>
          <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;border-radius:2px;background:rgba(240,75,106,0.1)"></div>Blocked</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-head"><span class="card-title">Renewals Due</span><span class="nav-badge amber" style="font-size:10px">3 urgent</span></div>
      <div class="card-body">
        ${APP_DATA.CLIENTS.filter(c => c.status === 'renewal').map(c => `
          <div class="invoice-row">
            <div><div class="visitor-name">${c.company}</div><div class="visitor-sub">${c.center} · ${c.seats} seats</div></div>
            <div style="margin-left:auto;text-align:right">
              <div class="text-xs" style="color:var(--red)">${c.renewal.split(',')[0]}</div>
              <div class="invoice-amt">${fmtMoney(c.mrr)}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

// ===================== FLOOR MAP =====================
function renderFloors() {
  const seatTypes = { 0: 'avail', 1: 'taken', 2: 'hot', 3: 'maintenance' };
  const zones = {
    'Zone A · Private Offices': { color: 'var(--accent)', pattern: [1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1] },
    'Zone B · Hot Desks':       { color: 'var(--green)',  pattern: [2,2,2,0,0,2,2,0,2,2,0,2,2,2,0,0,2,2,2,2] },
    'Zone C · Dedicated':       { color: 'var(--amber)',  pattern: [1,1,0,1,1,1,1,1,0,1,1,1,3,1,1,0,1,1,1,1] }
  };
  const zoneHtml = Object.entries(zones).map(([name, {color, pattern}]) => {
    const rows = [];
    for (let i = 0; i < 20; i += 5) {
      const seats = pattern.slice(i, i+5).map((t, j) =>
        `<div class="occ-seat ${seatTypes[t]}" title="Seat ${i+j+1}" onclick="seatClick(${i+j+1}, '${seatTypes[t]}')"></div>`
      ).join('');
      rows.push(`<div class="occ-row">${seats}</div>`);
    }
    return `<div>
      <div style="font-size:10px;color:${color};margin-bottom:8px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px">${name}</div>
      ${rows.join('')}
    </div>`;
  }).join('');

  return `
  <div class="full-card card">
    <div class="card-head">
      <span class="card-title">Interactive Floor Map — HSR Layout, Floor 3</span>
      <div style="display:flex;gap:8px;align-items:center">
        <select class="center-select" style="width:auto;padding:4px 10px;font-size:11px">
          <option>HSR Layout</option><option>Koramangala</option><option>Whitefield</option><option>Indiranagar</option>
        </select>
        <select class="center-select" style="width:auto;padding:4px 10px;font-size:11px">
          <option>Floor 1</option><option>Floor 2</option><option selected>Floor 3</option><option>Floor 4</option>
        </select>
        <span class="badge green">81% Occupied</span>
      </div>
    </div>
    <div class="card-body">
      <div style="display:flex;gap:14px;margin-bottom:14px;font-size:11px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:6px;color:var(--text3)"><div class="occ-seat taken" style="width:12px;height:12px;pointer-events:none"></div>Occupied</div>
        <div style="display:flex;align-items:center;gap:6px;color:var(--text3)"><div class="occ-seat avail" style="width:12px;height:12px;pointer-events:none"></div>Available</div>
        <div style="display:flex;align-items:center;gap:6px;color:var(--text3)"><div class="occ-seat hot" style="width:12px;height:12px;pointer-events:none"></div>Hot desk</div>
        <div style="display:flex;align-items:center;gap:6px;color:var(--text3)"><div class="occ-seat maintenance" style="width:12px;height:12px;pointer-events:none"></div>Maintenance</div>
      </div>
      <div style="background:var(--bg3);border-radius:10px;padding:18px">
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-bottom:20px">
          ${zoneHtml}
        </div>
        <div style="border-top:1px solid var(--border);padding-top:14px">
          <div style="font-size:10px;color:var(--accent2);margin-bottom:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px">Conference Rooms</div>
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            <div class="occ-seat taken" style="width:80px;height:40px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff;font-weight:500" title="Skyline — Booked">🏛 Skyline</div>
            <div class="occ-seat avail" style="width:80px;height:40px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:500;cursor:pointer" onclick="openModal('bookRoom')" title="Horizon — Available · Click to book">🌅 Horizon</div>
            <div class="occ-seat hot" style="width:80px;height:40px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff;font-weight:500" title="Summit — Partial">🏔 Summit</div>
            <div class="occ-seat maintenance" style="width:80px;height:40px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff;font-weight:500" title="Apex — Under Maintenance">⚙ Apex</div>
          </div>
        </div>
      </div>
      <div style="margin-top:10px;font-size:11px;color:var(--text3)">💡 Click any <b style="color:var(--text)">available</b> seat to assign · Click <b style="color:var(--accent)">booked</b> to view tenant · Click <b style="color:var(--green)">Horizon</b> room to book</div>
    </div>
  </div>`;
}

// ===================== LEADS =====================
function renderLeads() {
  const stages = [
    { key: 'new', label: 'New Inquiry', color: 'var(--text3)', badgeStyle: 'background:var(--bg4);color:var(--text3)' },
    { key: 'visit', label: 'Site Visit', color: 'var(--accent)', badgeStyle: 'background:rgba(79,142,247,0.15);color:var(--accent)' },
    { key: 'proposal', label: 'Proposal Sent', color: 'var(--amber)', badgeStyle: 'background:rgba(245,158,11,0.15);color:var(--amber)' },
    { key: 'agreement', label: 'Agreement', color: 'var(--green)', badgeStyle: 'background:rgba(34,201,138,0.15);color:var(--green)' },
    { key: 'won', label: 'Won 🏆', color: 'var(--green)', badgeStyle: 'background:rgba(34,201,138,0.15);color:var(--green)' }
  ];
  const colsHtml = stages.map(s => {
    const items = APP_DATA.LEADS.filter(l => l.stage === s.key);
    const cards = items.map(l => `
      <div class="pipeline-card" style="${s.key==='won'?'border-color:rgba(34,201,138,0.4);background:rgba(34,201,138,0.04)':''}" onclick="leadDetail(${l.id})">
        <div class="co">${l.company} ${l.priority==='hot'?'🔥':''}</div>
        <div class="detail">${l.seats} seats · ${l.center}</div>
        <div class="value">${fmtMoney(l.mrr)}/mo</div>
      </div>`).join('');
    return `<div class="pipeline-col">
      <div class="pipeline-col-head" style="color:${s.color}">${s.label} <span class="nav-badge" style="${s.badgeStyle}">${items.length}</span></div>
      ${cards || '<div style="font-size:11px;color:var(--text3);padding:8px 0">No leads</div>'}
    </div>`;
  }).join('');

  return `
  <div class="full-card card">
    <div class="card-head">
      <span class="card-title">Lead Pipeline — CRM</span>
      <div style="display:flex;gap:8px">
        <span class="badge blue">${APP_DATA.LEADS.length} Total Leads</span>
        <span class="badge green">${APP_DATA.LEADS.filter(l=>l.stage==='won').length} Won</span>
        <button class="btn primary" onclick="openModal('newLead')">+ Add Lead</button>
      </div>
    </div>
    <div class="card-body">
      <div class="pipeline">${colsHtml}</div>
    </div>
  </div>`;
}

// ===================== CLIENTS =====================
function renderClients() {
  const rows = APP_DATA.CLIENTS.map(c => `
    <tr>
      <td><b>${c.company}</b></td>
      <td>${c.center}</td>
      <td>${c.seats}</td>
      <td>${c.plan}</td>
      <td style="color:var(--green);font-weight:600">${fmtMoney(c.mrr)}</td>
      <td>${c.joined}</td>
      <td>${c.renewal}</td>
      <td>${statusBadge(c.status)}</td>
      <td><button class="btn sm" onclick="clientDetail(${c.id})">View</button></td>
    </tr>`).join('');
  return `
  <div class="full-card card">
    <div class="card-head">
      <span class="card-title">Client Directory</span>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="form-input" style="width:180px;padding:5px 10px" placeholder="🔍 Search clients..." oninput="filterClients(this.value)" id="clientSearch">
        <button class="btn primary" onclick="openModal('newClient')">+ Add Client</button>
      </div>
    </div>
    <div class="card-body tbl-wrap">
      <table class="table" id="clientTable">
        <thead><tr><th>Company</th><th>Center</th><th>Seats</th><th>Plan</th><th>MRR</th><th>Joined</th><th>Renewal</th><th>Status</th><th></th></tr></thead>
        <tbody id="clientTbody">${rows}</tbody>
      </table>
    </div>
  </div>`;
}

// ===================== RENEWALS =====================
function renderRenewals() {
  const urgent = APP_DATA.CLIENTS.filter(c => c.status === 'renewal');
  const rows = APP_DATA.CLIENTS.map(c => {
    const isRenewal = c.status === 'renewal';
    const daysLeft = isRenewal ? Math.floor(Math.random()*25 + 5) : Math.floor(Math.random()*200 + 30);
    const dClass = daysLeft < 15 ? 'red' : daysLeft < 30 ? 'amber' : 'blue';
    return `<tr>
      <td><b ${isRenewal?'style="color:var(--amber)"':''}>${c.company}</b></td>
      <td>${c.center}</td><td>${c.seats}</td>
      <td style="color:var(--green);font-weight:600">${fmtMoney(c.mrr)}</td>
      <td>${c.renewal}</td>
      <td><span class="badge ${dClass}">${daysLeft} days</span></td>
      <td><button class="btn sm" onclick="openModal('reminder','${c.company}')">Send Reminder</button></td>
    </tr>`;
  }).join('');
  return `
  <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
    <div class="stat-card red"><div class="stat-label">Urgent (≤14 days)</div><div class="stat-value">${urgent.length}</div><div class="stat-delta down">Action required now</div><div class="stat-icon">🚨</div></div>
    <div class="stat-card amber"><div class="stat-label">Due This Month</div><div class="stat-value">8</div><div class="stat-delta">Schedule reminders</div><div class="stat-icon">📅</div></div>
    <div class="stat-card blue"><div class="stat-label">Due Next Month</div><div class="stat-value">7</div><div class="stat-delta up">Plan ahead</div><div class="stat-icon">🔄</div></div>
  </div>
  <div class="full-card card">
    <div class="card-head"><span class="card-title">Renewal Tracker</span><button class="btn" onclick="sendAllReminders()">Send All Reminders</button></div>
    <div class="card-body tbl-wrap">
      <table class="table"><thead><tr><th>Client</th><th>Center</th><th>Seats</th><th>MRR</th><th>Expiry</th><th>Days Left</th><th>Action</th></tr></thead>
      <tbody>${rows}</tbody></table>
    </div>
  </div>`;
}

// ===================== PROPOSALS =====================
function renderProposals() {
  const rows = APP_DATA.PROPOSALS.map(p => `
    <tr>
      <td style="font-family:monospace;color:var(--accent);font-size:11px">${p.id}</td>
      <td><b>${p.client}</b></td>
      <td>${p.seats}</td>
      <td>${p.plan}</td>
      <td style="color:var(--green);font-weight:600">${fmtMoney(p.mrr)}/mo</td>
      <td><span class="badge gray">${p.version}</span></td>
      <td>${p.sent}</td>
      <td>${statusBadge(p.status)}</td>
      <td><button class="btn sm">View PDF</button></td>
    </tr>`).join('');
  return `
  <div class="full-card card">
    <div class="card-head"><span class="card-title">Quotation &amp; Proposal Management</span><button class="btn primary" onclick="openModal('newProposal')">+ New Proposal</button></div>
    <div class="card-body tbl-wrap">
      <table class="table"><thead><tr><th>ID</th><th>Client</th><th>Seats</th><th>Plan</th><th>MRR</th><th>Ver.</th><th>Sent</th><th>Status</th><th></th></tr></thead>
      <tbody>${rows}</tbody></table>
    </div>
  </div>`;
}

// ===================== VISITORS =====================
function renderVisitors() {
  const visitorRows = APP_DATA.VISITORS.map(v => `
    <div class="visitor-row">
      <div class="visitor-av" style="background:${v.color}">${v.initials}</div>
      <div class="visitor-info">
        <div class="visitor-name">${v.name}</div>
        <div class="visitor-sub">${v.host} · ${v.center} · ${v.time}</div>
      </div>
      <span style="font-size:11px;color:var(--text3);margin:0 8px">${v.purpose}</span>
      ${statusBadge(v.status)}
    </div>`).join('');
  return `
  <div class="grid2">
    <div class="card">
      <div class="card-head"><span class="card-title">Today's Check-ins</span><button class="btn primary" onclick="openModal('checkIn')">+ Walk-in Check-in</button></div>
      <div class="card-body">${visitorRows}</div>
    </div>
    <div class="card">
      <div class="card-head"><span class="card-title">Visitor Analytics</span><span class="text-xs text-muted">Last 7 days</span></div>
      <div class="card-body">
        <div style="display:flex;gap:10px;margin-bottom:16px">
          <div class="mini-stat" style="flex:1;text-align:center"><div class="label">Total</div><div class="value" style="color:var(--accent)">94</div></div>
          <div class="mini-stat" style="flex:1;text-align:center"><div class="label">Today</div><div class="value" style="color:var(--green)">14</div></div>
          <div class="mini-stat" style="flex:1;text-align:center"><div class="label">Pending</div><div class="value" style="color:var(--amber)">3</div></div>
        </div>
        <div style="font-size:11px;color:var(--text3);margin-bottom:8px">Daily check-ins (last 7 days)</div>
        <div class="mini-bar" style="height:80px">
          ${[50,65,80,55,90,40,60].map(h => `<div class="mini-bar-col green" style="height:${h}%"></div>`).join('')}
        </div>
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text3);margin-top:4px">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
        <div style="margin-top:14px">
          <div style="font-size:11px;color:var(--text3);margin-bottom:8px">By Purpose</div>
          ${[['Meeting',45],['Site Visit',22],['Interview',14],['Training',9],['Day Pass',10]].map(([label, pct]) => `
            <div style="margin-bottom:6px">
              <div class="flex items-center gap-2 mb-1"><span class="text-xs">${label}</span><span class="ml-auto text-xs">${pct}%</span></div>
              <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:var(--accent)"></div></div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

// ===================== BOOKINGS =====================
function renderBookings() {
  const hours = ['09','10','11','12','13','14','15','16','17'];
  const slotMap = { booked:'booked', '':'', block:'block', amber:'amber', mine:'mine' };
  const tableRows = APP_DATA.ROOMS.map(r => {
    const cells = r.slots.map((s, i) => {
      const cls = s || '';
      const label = s === 'booked' ? 'Booked' : s === 'mine' ? 'Mine' : s === 'block' ? 'Blocked' : s === 'amber' ? 'Hold' : 'Free';
      const badgeCls = s === 'booked' ? 'red' : s === 'mine' ? 'green' : s === 'block' ? 'gray' : s === 'amber' ? 'amber' : 'green';
      return `<td><span class="badge ${badgeCls}" style="cursor:${!s||s==='mine'?'pointer':'default'}" onclick="${!s||s==='mine'?`openModal('bookRoom')`:''}"">${label}</span></td>`;
    }).join('');
    return `<tr><td><b>${r.name}</b></td><td>${r.capacity}</td>${cells}</tr>`;
  }).join('');
  return `
  <div class="full-card card">
    <div class="card-head">
      <span class="card-title">Conference Room Booking</span>
      <div style="display:flex;gap:8px">
        <select class="center-select" style="width:auto;padding:4px 10px;font-size:11px"><option>HSR Layout</option><option>Koramangala</option><option>Whitefield</option></select>
        <input type="date" class="center-select" style="width:auto;padding:4px 10px;font-size:11px" value="2026-05-24">
        <button class="btn primary" onclick="openModal('bookRoom')">+ Book Room</button>
      </div>
    </div>
    <div class="card-body tbl-wrap">
      <table class="table">
        <thead><tr><th>Room</th><th>Cap.</th>${hours.map(h=>`<th>${h}:00</th>`).join('')}</tr></thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>
  </div>`;
}

// ===================== FINANCE =====================
function renderFinance() {
  const invoiceRows = APP_DATA.INVOICES.map(inv => `
    <div class="invoice-row">
      <div class="invoice-id">#${inv.id}</div>
      <div class="invoice-name">${inv.client} · ${inv.center}</div>
      ${statusBadge(inv.status)}
      <div class="invoice-amt">${fmtMoney(inv.amount)}</div>
      <button class="btn sm">PDF</button>
    </div>`).join('');
  return `
  <div class="stats-grid">
    <div class="stat-card green"><div class="stat-label">May Revenue</div><div class="stat-value">₹42.6L</div><div class="stat-delta up">↑ 7.8% MoM</div><div class="stat-icon">💰</div></div>
    <div class="stat-card blue"><div class="stat-label">Collected</div><div class="stat-value">₹38.1L</div><div class="stat-delta">89% collection rate</div><div class="stat-icon">✅</div></div>
    <div class="stat-card amber"><div class="stat-label">Outstanding</div><div class="stat-value">₹4.5L</div><div class="stat-delta down">12 invoices pending</div><div class="stat-icon">⏳</div></div>
    <div class="stat-card red"><div class="stat-label">Overdue</div><div class="stat-value">₹1.2L</div><div class="stat-delta down">3 clients · Act now</div><div class="stat-icon">⚠️</div></div>
  </div>
  <div class="grid2">
    <div class="card">
      <div class="card-head"><span class="card-title">Recent Invoices</span><button class="btn" onclick="openModal('newInvoice')">+ Generate Invoice</button></div>
      <div class="card-body">${invoiceRows}</div>
    </div>
    <div class="card">
      <div class="card-head"><span class="card-title">Revenue Trend</span><span class="text-xs text-muted">6 months</span></div>
      <div class="card-body">
        <div class="mini-bar" style="height:90px">
          ${[55,62,71,68,80,90].map((h,i) => `<div class="mini-bar-col ${i===5?'green':''}" style="height:${h}%"></div>`).join('')}
        </div>
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text3);margin-top:4px">
          <span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
        </div>
        <div style="display:flex;gap:10px;margin-top:14px">
          <div class="mini-stat" style="flex:1"><div class="label">Avg MRR (6mo)</div><div class="value">₹38.4L</div></div>
          <div class="mini-stat" style="flex:1"><div class="label">6-Month Growth</div><div class="value" style="color:var(--green)">+18%</div></div>
          <div class="mini-stat" style="flex:1"><div class="label">Best Month</div><div class="value" style="color:var(--accent)">May '26</div></div>
        </div>
        <div style="margin-top:14px">
          <div style="font-size:11px;color:var(--text3);margin-bottom:8px">Revenue by Plan Type</div>
          ${[['Private Office',52],['Dedicated Desk',24],['Hot Desk',14],['Enterprise',10]].map(([l,p]) => `
            <div style="margin-bottom:6px">
              <div class="flex items-center gap-2 mb-1"><span class="text-xs">${l}</span><span class="ml-auto text-xs">${p}%</span></div>
              <div class="progress-bar"><div class="progress-fill" style="width:${p}%;background:var(--green)"></div></div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

// ===================== TICKETS =====================
function renderTickets() {
  const open = APP_DATA.TICKETS.filter(t => t.status === 'open');
  const resolved = APP_DATA.TICKETS.filter(t => t.status === 'resolved');
  const openHtml = open.map(t => `
    <div class="ticket-item">
      <div class="ticket-head">
        <span class="ticket-id">#${t.id}</span>
        <span class="ticket-title">${t.title}</span>
        ${statusBadge(t.priority)}
      </div>
      <div class="ticket-meta">${t.center} · ${t.assigned} · Raised ${t.raised}</div>
    </div>`).join('');
  const resolvedHtml = resolved.map(t => `
    <div class="ticket-item" style="opacity:0.6">
      <div class="ticket-head">
        <span class="ticket-id">#${t.id}</span>
        <span class="ticket-title">${t.title}</span>
        <span class="badge green">Resolved</span>
      </div>
      <div class="ticket-meta">${t.center} · ${t.assigned}</div>
    </div>`).join('');
  return `
  <div class="grid2">
    <div class="card">
      <div class="card-head"><span class="card-title">Open Tickets <span class="nav-badge">${open.length}</span></span><button class="btn primary" onclick="openModal('newTicket')">+ New Ticket</button></div>
      <div class="card-body">${openHtml}</div>
    </div>
    <div class="card">
      <div class="card-head"><span class="card-title">Resolution Stats</span></div>
      <div class="card-body">
        <div style="display:flex;gap:10px;margin-bottom:14px">
          <div class="mini-stat" style="flex:1;text-align:center"><div class="label">SLA Met</div><div class="value" style="color:var(--green)">87%</div></div>
          <div class="mini-stat" style="flex:1;text-align:center"><div class="label">Avg Resolution</div><div class="value">3.2h</div></div>
          <div class="mini-stat" style="flex:1;text-align:center"><div class="label">Resolved</div><div class="value" style="color:var(--accent)">${resolved.length}</div></div>
        </div>
        <div style="font-size:12px;font-weight:500;margin-bottom:10px">By Category</div>
        ${[['Maintenance',12,60],['IT / Network',8,40],['Admin / Ops',6,30],['Housekeeping',4,20]].map(([l,n,p]) => `
          <div style="margin-bottom:8px">
            <div class="flex items-center gap-2 mb-1"><span class="text-xs">${l}</span><span class="ml-auto text-xs" style="color:var(--text2)">${n}</span></div>
            <div class="progress-bar"><div class="progress-fill" style="width:${p}%;background:var(--accent)"></div></div>
          </div>`).join('')}
        <div style="margin-top:14px;border-top:1px solid var(--border);padding-top:14px">
          <div style="font-size:12px;font-weight:500;margin-bottom:10px">Recently Resolved</div>
          ${resolvedHtml}
        </div>
      </div>
    </div>
  </div>`;
}

// ===================== TEAM =====================
function renderTeam() {
  const memberHtml = APP_DATA.TEAM.map(m => `
    <div class="visitor-row">
      <div class="visitor-av" style="background:${m.color}">${m.initials}</div>
      <div class="visitor-info"><div class="visitor-name">${m.name}</div><div class="visitor-sub">${m.role} · ${m.center}</div></div>
      <span class="badge ${m.badgeClass}">${m.badge}</span>
    </div>`).join('');
  const taskHtml = APP_DATA.TASKS.map(t => `
    <div class="ticket-item">
      <div class="ticket-head">
        <span class="badge ${t.priority}">${t.due}</span>
        <span class="ticket-title" style="margin-left:8px">${t.title}</span>
      </div>
      <div class="ticket-meta">Assigned: ${t.assigned}</div>
    </div>`).join('');
  return `
  <div class="grid2">
    <div class="card">
      <div class="card-head"><span class="card-title">Team Members</span><button class="btn" onclick="openModal('inviteMember')">+ Invite Member</button></div>
      <div class="card-body">${memberHtml}</div>
    </div>
    <div class="card">
      <div class="card-head"><span class="card-title">Task Board</span><button class="btn primary" onclick="openModal('newTask')">+ New Task</button></div>
      <div class="card-body">${taskHtml}</div>
    </div>
  </div>`;
}

// ===================== SETTINGS =====================
function renderSettings() {
  return `
  <div class="grid2">
    <div>
      <div class="card full-card">
        <div class="card-head"><span class="card-title">Center Configuration</span></div>
        <div class="card-body">
          <div class="settings-section">
            <div class="settings-section-title">Notifications</div>
            ${[
              ['Renewal Reminders','Auto-send 30, 14, 7 days before expiry'],
              ['Visitor Check-in Alerts','Notify host on visitor arrival'],
              ['Finance Alerts','Invoice overdue & payment received'],
              ['Ticket Escalation','Escalate if unresolved > 24h']
            ].map(([l,s]) => `
              <div class="settings-row">
                <div><div class="settings-label">${l}</div><div class="settings-sub">${s}</div></div>
                <label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span></label>
              </div>`).join('')}
          </div>
          <div class="settings-section">
            <div class="settings-section-title">Integrations</div>
            ${[
              ['Razorpay','Payment gateway · Connected','green'],
              ['Google Calendar','Room booking sync · Connected','green'],
              ['Slack','Team notifications · Not connected','gray'],
              ['Tally / Zoho Books','Accounting sync · Not connected','gray']
            ].map(([l,s,c]) => `
              <div class="settings-row">
                <div><div class="settings-label">${l}</div><div class="settings-sub">${s}</div></div>
                <span class="badge ${c}">${c==='green'?'Connected':'Connect'}</span>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="card full-card">
        <div class="card-head"><span class="card-title">Role & Permissions</span></div>
        <div class="card-body">
          <div class="settings-section">
            <div class="settings-section-title">Access Control (RBAC)</div>
            ${[
              ['Admin','Full access to all modules and centers'],
              ['Center Manager','All modules for assigned center'],
              ['Sales Executive','CRM: Leads, Clients, Proposals'],
              ['Finance','Billing, Invoices, Revenue reports'],
              ['Community Lead','Visitors, Bookings, Tickets'],
              ['Operations','Floor map, Maintenance tickets']
            ].map(([r,d]) => `
              <div class="settings-row">
                <div><div class="settings-label">${r}</div><div class="settings-sub">${d}</div></div>
                <button class="btn sm">Edit</button>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

window.PANEL_RENDERERS = {
  dashboard: renderDashboard,
  floors: renderFloors,
  leads: renderLeads,
  clients: renderClients,
  renewals: renderRenewals,
  proposals: renderProposals,
  visitors: renderVisitors,
  bookings: renderBookings,
  finance: renderFinance,
  tickets: renderTickets,
  team: renderTeam,
  settings: renderSettings
};
