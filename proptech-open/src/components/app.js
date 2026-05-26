// =====================================================
//  PropSpace — Main Application Controller
// =====================================================

const PANEL_META = {
  dashboard:  { title: 'Multi-Center Dashboard',       sub: 'All Centers · May 24, 2026' },
  floors:     { title: 'Floor & Seat Map',              sub: 'HSR Layout · Floor 3 · Interactive' },
  leads:      { title: 'Lead Pipeline',                 sub: 'CRM · Sales Funnel · 7 Active Leads' },
  clients:    { title: 'Client Directory',              sub: '238 Active Clients · 4 Centers' },
  visitors:   { title: 'Visitor Management',            sub: 'Smart Check-in · Live · 14 Today' },
  bookings:   { title: 'Conference Room Booking',       sub: 'Real-time Slot View · HSR Layout' },
  finance:    { title: 'Finance & Billing',             sub: 'May 2026 · ₹42.6L Revenue' },
  renewals:   { title: 'Renewal Tracker',               sub: '3 Urgent · Automated Reminders' },
  proposals:  { title: 'Proposals & Quotations',        sub: 'Draft · Sent · Accepted' },
  tickets:    { title: 'Ticket & Resolution',           sub: '5 Open · SLA 87%' },
  team:       { title: 'Team & Task Management',        sub: 'RBAC · Internal Ops' },
  settings:   { title: 'Settings & Configuration',     sub: 'Platform, Centers, Integrations' }
};

// ——— Panel navigation ———
function showPanel(id) {
  // hide all panels
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  // deactivate nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  // render panel
  const content = document.getElementById('mainContent');
  content.innerHTML = `<div class="panel active" id="panel-${id}">${buildPanel(id)}</div>`;

  // mark nav active
  document.querySelectorAll('.nav-item').forEach(item => {
    if ((item.getAttribute('onclick') || '').includes(`'${id}'`)) item.classList.add('active');
  });

  // update topbar
  const meta = PANEL_META[id] || { title: id, sub: '' };
  document.getElementById('panelTitle').textContent = meta.title;
  document.getElementById('panelSub').textContent = meta.sub;

  // close notification drawer
  document.getElementById('notifDrawer').classList.remove('open');

  // post-render hooks
  if (id === 'floors') renderSeatMap();
  if (id === 'dashboard') animateBars();
}

function selectCenter(val) {
  const labels = { all:'All Centers', hsr:'HSR Layout', koramangala:'Koramangala', whitefield:'Whitefield', indiranagar:'Indiranagar' };
  document.getElementById('panelSub').textContent = (labels[val] || 'All Centers') + ' · May 24, 2026';
}

// ——— Notifications ———
function toggleNotifications() {
  document.getElementById('notifDrawer').classList.toggle('open');
}

// ——— Seat Map renderer ———
function renderSeatMap() {
  const zones = {
    zoneA: [1,1,1,1,1, 1,1,0,1,1, 1,1,1,1,0, 1,1,1,1,1],
    zoneB: [2,2,2,0,0, 2,2,0,2,2, 0,2,2,2,0, 0,2,2,2,2],
    zoneC: [1,1,0,1,1, 1,1,1,0,1, 1,1,3,1,1, 0,1,1,1,1]
  };
  const cls = { 0:'avail', 1:'taken', 2:'hot', 3:'maintenance' };
  const tips = { 0:'Available — click to assign', 1:'Occupied', 2:'Hot desk', 3:'Under maintenance' };
  ['zoneA','zoneB','zoneC'].forEach(zone => {
    const el = document.getElementById(zone);
    if (!el) return;
    el.innerHTML = '';
    for (let r = 0; r < 4; r++) {
      const row = document.createElement('div');
      row.className = 'occ-row';
      for (let c = 0; c < 5; c++) {
        const idx = r * 5 + c;
        const seat = document.createElement('div');
        seat.className = 'occ-seat ' + cls[zones[zone][idx]];
        seat.title = `Seat ${idx+1} · ${tips[zones[zone][idx]]}`;
        seat.onclick = () => {
          if (zones[zone][idx] === 0) openModal('assignSeat', { zone, seat: idx+1 });
          else if (zones[zone][idx] === 1) openModal('seatInfo', { zone, seat: idx+1 });
        };
        row.appendChild(seat);
      }
      el.appendChild(row);
    }
  });
}

// ——— Animate mini bars ———
function animateBars() {
  document.querySelectorAll('.mini-bar-col').forEach((col, i) => {
    const h = col.getAttribute('data-h') || col.style.height;
    col.style.height = '0%';
    setTimeout(() => { col.style.transition = 'height 0.5s ease'; col.style.height = h; }, i * 40);
  });
}

// ——— Modal system ———
const MODALS = {
  newClient: {
    title: '+ Add New Client',
    body: `
      <div class="form-group">
        <label class="form-label">Company Name</label>
        <input class="form-input" placeholder="e.g. Zepto Bangalore" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Contact Person</label>
          <input class="form-input" placeholder="Full name" />
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input class="form-input" placeholder="contact@company.com" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Center</label>
          <select class="form-input">
            <option>HSR Layout</option><option>Koramangala</option>
            <option>Whitefield</option><option>Indiranagar</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Plan Type</label>
          <select class="form-input">
            <option>Hot Desk</option><option>Dedicated Desk</option>
            <option>Private Office</option><option>Enterprise Floor</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Seats Required</label>
          <input class="form-input" type="number" placeholder="e.g. 10" />
        </div>
        <div class="form-group">
          <label class="form-label">Monthly Budget (₹)</label>
          <input class="form-input" type="number" placeholder="e.g. 150000" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Start Date</label>
        <input class="form-input" type="date" value="2026-06-01" />
      </div>
      <div class="form-actions">
        <button class="btn" onclick="closeModal()">Cancel</button>
        <button class="btn primary" onclick="toastAndClose('Client added successfully!')">Save Client</button>
      </div>`
  },
  newLead: {
    title: '+ Add New Lead',
    body: `
      <div class="form-group">
        <label class="form-label">Company Name</label>
        <input class="form-input" placeholder="e.g. Ola Electric" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Contact Name</label>
          <input class="form-input" placeholder="Decision maker" />
        </div>
        <div class="form-group">
          <label class="form-label">Phone</label>
          <input class="form-input" placeholder="+91 98765 43210" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Preferred Center</label>
          <select class="form-input">
            <option>Any</option><option>HSR Layout</option>
            <option>Koramangala</option><option>Whitefield</option><option>Indiranagar</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Seats Needed</label>
          <input class="form-input" type="number" placeholder="e.g. 8" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Stage</label>
        <select class="form-input">
          <option>New Inquiry</option><option>Site Visit</option>
          <option>Proposal Sent</option><option>Agreement</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Notes</label>
        <textarea class="form-input" rows="2" placeholder="Additional context..."></textarea>
      </div>
      <div class="form-actions">
        <button class="btn" onclick="closeModal()">Cancel</button>
        <button class="btn primary" onclick="toastAndClose('Lead added to pipeline!')">Add Lead</button>
      </div>`
  },
  bookRoom: {
    title: '📅 Book Conference Room',
    body: `
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Center</label>
          <select class="form-input">
            <option>HSR Layout</option><option>Koramangala</option>
            <option>Whitefield</option><option>Indiranagar</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Room</label>
          <select class="form-input">
            <option>🏛 Skyline (12)</option><option>🌅 Horizon (8)</option>
            <option>🏔 Summit (6)</option><option>🌿 Garden (4)</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Date</label>
          <input class="form-input" type="date" value="2026-05-24" />
        </div>
        <div class="form-group">
          <label class="form-label">Duration</label>
          <select class="form-input">
            <option>30 min</option><option>1 hour</option><option>2 hours</option>
            <option>Half day</option><option>Full day</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Start Time</label>
          <select class="form-input">
            <option>09:00</option><option>10:00</option><option>11:00</option>
            <option>12:00</option><option>13:00</option><option>14:00</option>
            <option>15:00</option><option>16:00</option><option>17:00</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Attendees</label>
          <input class="form-input" type="number" placeholder="e.g. 6" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Meeting Title</label>
        <input class="form-input" placeholder="e.g. Product Review Q2" />
      </div>
      <div class="form-actions">
        <button class="btn" onclick="closeModal()">Cancel</button>
        <button class="btn primary" onclick="toastAndClose('Room booked successfully!')">Confirm Booking</button>
      </div>`
  },
  assignSeat: {
    title: '🪑 Assign Seat',
    body: `
      <div class="form-group">
        <label class="form-label">Assign To (Client)</label>
        <select class="form-input">
          <option>Razorpay India</option><option>PhonePe Design</option>
          <option>Bounce Infinity</option><option>Nykaa Tech</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Member Name</label>
        <input class="form-input" placeholder="Employee name" />
      </div>
      <div class="form-group">
        <label class="form-label">Access Card ID</label>
        <input class="form-input" placeholder="e.g. ACC-2094" />
      </div>
      <div class="form-actions">
        <button class="btn" onclick="closeModal()">Cancel</button>
        <button class="btn primary" onclick="toastAndClose('Seat assigned!')">Assign</button>
      </div>`
  },
  seatInfo: {
    title: '🪑 Seat Details',
    body: `
      <div style="display:flex;flex-direction:column;gap:10px;font-size:13px;">
        <div style="background:var(--bg3);border-radius:8px;padding:12px;">
          <div style="color:var(--text3);font-size:11px;margin-bottom:4px">Occupied by</div>
          <div style="font-weight:600;color:var(--text)">Vikram Shah — Razorpay India</div>
          <div style="color:var(--text3);font-size:11px;margin-top:2px">vikram@razorpay.com · +91 98001 23456</div>
        </div>
        <div class="form-row">
          <div style="background:var(--bg3);border-radius:8px;padding:10px;">
            <div style="color:var(--text3);font-size:11px">Since</div>
            <div style="font-weight:500">May 24, 2026</div>
          </div>
          <div style="background:var(--bg3);border-radius:8px;padding:10px;">
            <div style="color:var(--text3);font-size:11px">Renews</div>
            <div style="font-weight:500;color:var(--green)">May 24, 2027</div>
          </div>
        </div>
      </div>
      <div class="form-actions">
        <button class="btn danger" onclick="toastAndClose('Seat released!')">Release Seat</button>
        <button class="btn primary" onclick="closeModal()">Close</button>
      </div>`
  }
};

function openModal(type, data) {
  const m = MODALS[type];
  if (!m) return;
  document.getElementById('modalTitle').textContent = m.title;
  document.getElementById('modalBody').innerHTML = m.body;
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

function toastAndClose(msg) {
  closeModal();
  showToast(msg);
}

// ——— Toast notification ———
function showToast(msg, type = 'success') {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed;bottom:24px;right:24px;z-index:9999;
    background:var(--bg2);border:1px solid var(--border2);
    color:var(--text);padding:12px 18px;border-radius:10px;
    font-size:13px;box-shadow:0 8px 24px rgba(0,0,0,0.4);
    display:flex;align-items:center;gap:10px;
    animation:slideIn 0.25s ease;
  `;
  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
  const color = type === 'success' ? 'var(--green)' : type === 'error' ? 'var(--red)' : 'var(--accent)';
  toast.innerHTML = `<span style="color:${color};font-weight:700">${icon}</span> ${msg}`;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, 3000);
}

// ——— Inject slide-in animation ———
const style = document.createElement('style');
style.textContent = `@keyframes slideIn { from { transform:translateX(20px); opacity:0; } to { transform:none; opacity:1; } }`;
document.head.appendChild(style);

// ——— Boot ———
document.addEventListener('DOMContentLoaded', () => { showPanel('dashboard'); });
