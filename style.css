/* AssetFlow - Premium Enterprise Asset & Resource Management System Theme */
/* Vanilla CSS Design System with Glassmorphism, CSS Variables, and Dark Mode Accentuation */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap');
:root {
  /* Colors */
  --bg-dark-base: #090d16;
  --bg-dark-panel: rgba(17, 24, 39, 0.7);
  --bg-dark-card: rgba(30, 41, 59, 0.45);
  --bg-dark-card-hover: rgba(30, 41, 59, 0.75);
  
  --accent-indigo: #6366f1;
  --accent-indigo-glow: rgba(99, 102, 241, 0.15);
  --accent-violet: #8b5cf6;
  --accent-violet-glow: rgba(139, 92, 246, 0.15);
  
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-subtle: #64748b;
  
  --border-color: rgba(255, 255, 255, 0.08);
  --border-glow: rgba(99, 102, 241, 0.3);
  
  /* Status Colors */
  --color-available: #10b981;
  --color-allocated: #3b82f6;
  --color-reserved: #f59e0b;
  --color-maintenance: #ec4899;
  --color-lost: #ef4444;
  --color-retired: #6b7280;
  --color-disposed: #374151;
  
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  --shadow-lg: 0 12px 48px 0 rgba(0, 0, 0, 0.5);
  
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-header: 'Outfit', sans-serif;
  
  --sidebar-width: 260px;
  --header-height: 70px;
}
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) transparent;
}
body {
  font-family: var(--font-body);
  background-color: var(--bg-dark-base);
  color: var(--text-main);
  min-height: 100vh;
  overflow-x: hidden;
  background-image: 
    radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.1) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.08) 0px, transparent 50%),
    radial-gradient(at 50% 50%, rgba(17, 24, 39, 0.5) 0px, transparent 100%);
  background-attachment: fixed;
}
/* Main Container Layout */
#app-root {
  display: flex;
  min-height: 100vh;
}
/* Sidebar Styling */
.sidebar {
  width: var(--sidebar-width);
  background: var(--bg-dark-panel);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-right: 1px solid var(--border-color);
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1.5rem;
}
.logo-icon {
  background: linear-gradient(135deg, var(--accent-indigo), var(--accent-violet));
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #fff;
  font-size: 1.25rem;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
}
.logo-text {
  font-family: var(--font-header);
  font-size: 1.4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #fff 30%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}
.nav-menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  flex-grow: 1;
  overflow-y: auto;
}
.nav-item a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1rem;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}
.nav-item a:hover {
  background: var(--bg-dark-card);
  color: var(--text-main);
  border-color: rgba(255, 255, 255, 0.03);
}
.nav-item.active a {
  background: linear-gradient(135deg, var(--accent-indigo-glow), var(--accent-violet-glow));
  color: #fff;
  border-color: var(--border-glow);
  box-shadow: inset 0 0 10px rgba(99, 102, 241, 0.05);
}
.nav-item.active a svg {
  stroke: var(--accent-indigo);
  filter: drop-shadow(0 0 3px var(--accent-indigo));
}
.sidebar-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
/* User Account Info inside Sidebar */
.user-profile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 8px;
}
.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-violet), var(--accent-indigo));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.95rem;
  color: #fff;
  border: 2px solid var(--border-color);
}
.user-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.user-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-main);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.user-role {
  font-size: 0.75rem;
  color: var(--text-muted);
}
.btn-logout {
  width: 100%;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #f87171;
  padding: 0.6rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
}
.btn-logout:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.3);
}
/* Main Content Area */
.main-wrapper {
  margin-left: var(--sidebar-width);
  flex-grow: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
/* Top Header Bar */
.top-header {
  height: var(--header-height);
  background: rgba(9, 13, 22, 0.5);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 90;
}
.header-title-section {
  display: flex;
  flex-direction: column;
}
.page-title {
  font-family: var(--font-header);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}
.page-subtitle {
  font-size: 0.8rem;
  color: var(--text-muted);
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}
/* Role Switcher Widget (For Demo/Testing) */
.role-switcher-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-dark-card);
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}
.role-switcher-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}
.select-role-switcher {
  background: transparent;
  border: none;
  color: var(--accent-indigo);
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  outline: none;
}
.select-role-switcher option {
  background: var(--bg-dark-base);
  color: var(--text-main);
}
/* Notification Bell Button */
.header-btn {
  background: var(--bg-dark-card);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}
.header-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--border-glow);
}
.badge-dot {
  position: absolute;
  top: -2px;
  right: -2px;
  background: #f43f5e;
  border: 2px solid var(--bg-dark-base);
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
/* Main Content Panel */
.content-body {
  padding: 2rem;
  flex-grow: 1;
}
/* Dashboard KPI Grid */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}
.kpi-card {
  background: var(--bg-dark-card);
  border: 1px solid var(--border-color);
  padding: 1.5rem;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.kpi-card:hover {
  transform: translateY(-4px);
  background: var(--bg-dark-card-hover);
  border-color: var(--border-glow);
  box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.1);
}
.kpi-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-indigo), var(--accent-violet));
  opacity: 0;
  transition: opacity 0.3s ease;
}
.kpi-card:hover::before {
  opacity: 1;
}
.kpi-title {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 0.5rem;
}
.kpi-value {
  font-family: var(--font-header);
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
}
.kpi-icon-container {
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  opacity: 0.15;
  transition: all 0.3s ease;
}
.kpi-card:hover .kpi-icon-container {
  opacity: 0.35;
  transform: scale(1.1);
}
/* Dashboard Overdue Returns Section */
.dashboard-alert-section {
  background: rgba(244, 63, 94, 0.05);
  border: 1px solid rgba(244, 63, 94, 0.2);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.dashboard-alert-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #f43f5e;
  font-weight: 600;
  font-size: 0.95rem;
}
.overdue-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}
.overdue-item {
  background: rgba(15, 23, 42, 0.4);
  border: 1px solid rgba(244, 63, 94, 0.15);
  border-radius: 8px;
  padding: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.overdue-details {
  display: flex;
  flex-direction: column;
}
.overdue-asset-name {
  font-weight: 600;
  font-size: 0.9rem;
}
.overdue-holder {
  font-size: 0.75rem;
  color: var(--text-muted);
}
.overdue-badge {
  background: rgba(244, 63, 94, 0.15);
  color: #fb7185;
  border: 1px solid rgba(244, 63, 94, 0.3);
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
}
/* Action Quick Links Grid */
.dashboard-actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}
.quick-action-card {
  background: var(--bg-dark-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  cursor: pointer;
  transition: all 0.25s ease;
}
.quick-action-card:hover {
  border-color: var(--border-glow);
  background: var(--bg-dark-card-hover);
  transform: translateY(-2px);
}
.quick-action-icon {
  background: linear-gradient(135deg, var(--accent-indigo), var(--accent-violet));
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.quick-action-info {
  display: flex;
  flex-direction: column;
}
.quick-action-title {
  font-family: var(--font-header);
  font-size: 1.1rem;
  font-weight: 600;
}
.quick-action-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
}
/* Layout Split: Lists / Forms */
.dashboard-split-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
}
.dashboard-panel {
  background: var(--bg-dark-card);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 1.5rem;
}
.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.75rem;
}
.panel-title {
  font-family: var(--font-header);
  font-size: 1.2rem;
  font-weight: 600;
}
/* Tab Container styles */
.tab-navigation {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
}
.tab-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
  position: relative;
}
.tab-btn:hover {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.03);
}
.tab-btn.active {
  color: var(--accent-indigo);
  font-weight: 600;
}
.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent-indigo);
}
/* Tables & Lists */
.table-container {
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}
.custom-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.9rem;
}
.custom-table th {
  background: rgba(30, 41, 59, 0.7);
  padding: 1rem;
  font-weight: 600;
  color: var(--text-muted);
  border-bottom: 1px solid var(--border-color);
}
.custom-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-main);
}
.custom-table tr:last-child td {
  border-bottom: none;
}
.custom-table tr:hover td {
  background: rgba(255, 255, 255, 0.02);
}
/* Badges for Lifecycle Statuses */
.status-badge {
  display: inline-block;
  padding: 0.25rem 0.6rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid transparent;
}
.status-badge.available {
  background: rgba(16, 185, 129, 0.1);
  color: #34d399;
  border-color: rgba(16, 185, 129, 0.2);
}
.status-badge.allocated {
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  border-color: rgba(59, 130, 246, 0.2);
}
.status-badge.reserved {
  background: rgba(245, 158, 11, 0.1);
  color: #fbbf24;
  border-color: rgba(245, 158, 11, 0.2);
}
.status-badge.under-maintenance {
  background: rgba(236, 72, 153, 0.1);
  color: #f472b6;
  border-color: rgba(236, 72, 153, 0.2);
}
.status-badge.lost {
  background: rgba(239, 68, 68, 0.1);
  color: #f87171;
  border-color: rgba(239, 68, 68, 0.2);
}
.status-badge.retired {
  background: rgba(107, 114, 128, 0.1);
  color: #9ca3af;
  border-color: rgba(107, 114, 128, 0.2);
}
.status-badge.disposed {
  background: rgba(55, 65, 81, 0.1);
  color: #6b7280;
  border-color: rgba(55, 65, 81, 0.2);
}
/* Forms and Inputs */
.form-group {
  margin-bottom: 1.25rem;
}
.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-muted);
}
.form-control {
  width: 100%;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.65rem 0.85rem;
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.9rem;
  outline: none;
  transition: all 0.2s ease;
}
.form-control:focus {
  border-color: var(--accent-indigo);
  box-shadow: 0 0 0 2px var(--accent-indigo-glow);
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 0.65rem 1.25rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary {
  background: linear-gradient(135deg, var(--accent-indigo), var(--accent-violet));
  color: #fff;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.25);
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
  filter: brightness(1.1);
}
.btn-secondary {
  background: var(--bg-dark-card);
  border-color: var(--border-color);
  color: var(--text-main);
}
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
}
.btn-danger {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
  color: #f87171;
}
.btn-danger:hover {
  background: rgba(239, 68, 68, 0.25);
}
.btn-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
/* Modals */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background: var(--bg-dark-panel);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg);
  border-radius: 16px;
  width: 90%;
  max-width: 550px;
  max-height: 85vh;
  overflow-y: auto;
  padding: 2rem;
  position: relative;
  animation: modalScale 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes modalScale {
  from { transform: scale(0.9) translateY(20px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.75rem;
}
.modal-title {
  font-family: var(--font-header);
  font-size: 1.4rem;
  font-weight: 700;
}
.modal-close {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 1.5rem;
}
.modal-close:hover {
  color: var(--text-main);
}
/* Resource Booking Calendar Grid */
.calendar-view {
  background: var(--bg-dark-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.25rem;
}
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}
.calendar-day-header {
  text-align: center;
  font-size: 0.75rem;
  color: var(--text-subtle);
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.25rem 0;
}
.calendar-cell {
  background: rgba(15, 23, 42, 0.3);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  min-height: 85px;
  padding: 0.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;
  transition: all 0.2s ease;
}
.calendar-cell:hover {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(99, 102, 241, 0.2);
}
.calendar-cell.today {
  border-color: var(--accent-indigo);
  background: rgba(99, 102, 241, 0.03);
}
.calendar-cell.other-month {
  opacity: 0.25;
}
.day-number {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
}
.calendar-cell.today .day-number {
  color: var(--accent-indigo);
}
.calendar-booking-item {
  font-size: 0.65rem;
  padding: 0.15rem 0.35rem;
  border-radius: 4px;
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  border-left: 2px solid var(--accent-indigo);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
.calendar-booking-item.ongoing {
  background: rgba(59, 130, 246, 0.15);
  color: #93c5fd;
  border-left-color: #3b82f6;
}
.calendar-booking-item.completed {
  background: rgba(16, 185, 129, 0.1);
  color: #6ee7b7;
  border-left-color: #10b981;
}
/* Search and Filters Layout */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  background: rgba(30, 41, 59, 0.2);
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  align-items: center;
}
.search-input-wrapper {
  position: relative;
  flex-grow: 1;
  min-width: 200px;
}
.search-input-wrapper input {
  padding-left: 2.25rem;
}
.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-subtle);
}
/* Detail Drawer (Asset Info drawer slider) */
.detail-drawer-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 950;
  display: flex;
  justify-content: flex-end;
}
.detail-drawer {
  width: 100%;
  max-width: 460px;
  background: var(--bg-dark-panel);
  border-left: 1px solid var(--border-color);
  height: 100%;
  padding: 2rem;
  overflow-y: auto;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.5);
  animation: drawerSlide 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
@keyframes drawerSlide {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.75rem;
}
.drawer-section {
  margin-bottom: 1.5rem;
}
.drawer-section-title {
  font-family: var(--font-header);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.meta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.meta-item {
  background: rgba(30, 41, 59, 0.25);
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}
.meta-label {
  font-size: 0.75rem;
  color: var(--text-subtle);
  margin-bottom: 0.25rem;
}
.meta-value {
  font-size: 0.9rem;
  font-weight: 600;
}
.history-timeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  padding-left: 1rem;
}
.history-timeline::before {
  content: '';
  position: absolute;
  left: 3px;
  top: 5px;
  bottom: 5px;
  width: 2px;
  background: var(--border-color);
}
.timeline-item {
  position: relative;
  display: flex;
  flex-direction: column;
}
.timeline-dot {
  position: absolute;
  left: -19px;
  top: 5px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-indigo);
  box-shadow: 0 0 8px var(--accent-indigo);
}
.timeline-date {
  font-size: 0.75rem;
  color: var(--text-subtle);
  margin-bottom: 0.15rem;
}
.timeline-title {
  font-size: 0.85rem;
  font-weight: 600;
}
.timeline-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
}
/* SVG Custom Charts styling */
.chart-container {
  width: 100%;
  margin-top: 1rem;
}
.chart-svg {
  width: 100%;
  height: 220px;
  overflow: visible;
}
.chart-axis {
  stroke: var(--border-color);
  stroke-width: 1;
}
.chart-gridline {
  stroke: rgba(255, 255, 255, 0.03);
  stroke-dasharray: 4, 4;
}
.chart-text {
  fill: var(--text-subtle);
  font-size: 10px;
  font-family: var(--font-body);
}
.chart-bar {
  fill: url(#barGrad);
  transition: all 0.3s ease;
  cursor: pointer;
}
.chart-bar:hover {
  fill: url(#barGradHover);
}
.chart-line {
  fill: none;
  stroke: var(--accent-indigo);
  stroke-width: 3;
  stroke-linecap: round;
}
.chart-area {
  fill: url(#lineGrad);
  opacity: 0.25;
}
.chart-point {
  fill: var(--accent-violet);
  stroke: #fff;
  stroke-width: 2;
  cursor: pointer;
  transition: all 0.2s ease;
}
.chart-point:hover {
  transform: scale(1.3);
}
.booking-heatmap {
  display: grid;
  grid-template-columns: auto repeat(24, 1fr);
  gap: 2px;
  overflow-x: auto;
}
.heatmap-label {
  font-size: 0.7rem;
  color: var(--text-subtle);
  display: flex;
  align-items: center;
  padding-right: 0.5rem;
  font-weight: 600;
}
.heatmap-cell {
  aspect-ratio: 1;
  border-radius: 2px;
  background: rgba(30, 41, 59, 0.2);
  cursor: pointer;
  position: relative;
}
.heatmap-cell.level-1 { background: rgba(99, 102, 241, 0.2); }
.heatmap-cell.level-2 { background: rgba(99, 102, 241, 0.4); }
.heatmap-cell.level-3 { background: rgba(99, 102, 241, 0.7); }
.heatmap-cell.level-4 { background: rgba(99, 102, 241, 0.95); }
/* Notifications screen */
.notifications-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.notification-card {
  background: var(--bg-dark-card);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.2s ease;
}
.notification-card.unread {
  border-color: rgba(99, 102, 241, 0.25);
  background: rgba(99, 102, 241, 0.03);
}
.notification-card.unread::before {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--accent-indigo);
  border-radius: 50%;
  margin-top: 6px;
  margin-right: 8px;
  flex-shrink: 0;
}
.notification-body {
  flex-grow: 1;
  padding-right: 1rem;
}
.notification-title {
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.15rem;
}
.notification-message {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.4;
}
.notification-time {
  font-size: 0.7rem;
  color: var(--text-subtle);
  margin-top: 0.25rem;
}
.notification-action {
  flex-shrink: 0;
}
/* Login/Signup Screen layout */
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  padding: 1.5rem;
  background-image: 
    radial-gradient(at 10% 10%, rgba(99, 102, 241, 0.12) 0px, transparent 50%),
    radial-gradient(at 90% 90%, rgba(139, 92, 246, 0.1) 0px, transparent 50%),
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path d="M0 0h60v60H0z" fill="none"/><path d="M10 0v60M20 0v60M30 0v60M40 0v60M50 0v60M0 10h60M0 20h60M0 30h60M0 40h60M0 50h60" stroke="rgba(255,255,255,0.015)" stroke-width="1"/></svg>');
}
.login-card {
  background: rgba(17, 24, 39, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg);
  border-radius: 20px;
  width: 100%;
  max-width: 440px;
  padding: 2.5rem;
}
.login-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.login-logo .logo-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  font-size: 1.5rem;
}
.login-logo .logo-text {
  font-size: 1.8rem;
}
.login-subtitle {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-align: center;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
}
.login-footer {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-muted);
}
.login-footer a {
  color: var(--accent-indigo);
  text-decoration: none;
  font-weight: 600;
}
.login-footer a:hover {
  text-decoration: underline;
}
.demo-credentials-box {
  background: rgba(30, 41, 59, 0.35);
  border: 1px solid var(--border-color);
  padding: 0.75rem;
  border-radius: 8px;
  margin-top: 1.25rem;
  font-size: 0.75rem;
}
.demo-credentials-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--text-muted);
}
.demo-credentials-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.demo-credential-item {
  cursor: pointer;
  color: var(--accent-indigo);
  transition: color 0.15s ease;
}
.demo-credential-item:hover {
  color: var(--accent-violet);
  text-decoration: underline;
}
/* Responsive Overrides */
@media (max-width: 1024px) {
  .dashboard-split-layout {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .sidebar {
    width: 60px;
    padding: 1rem 0.25rem;
    align-items: center;
  }
  .logo-text, .user-info, .sidebar-footer button span, .nav-item a span {
    display: none;
  }
  .logo-container {
    padding-bottom: 1rem;
    border-bottom: none;
  }
  .nav-item a {
    justify-content: center;
    padding: 0.75rem;
  }
  .main-wrapper {
    margin-left: 60px;
  }
  .top-header {
    padding: 0 1rem;
  }
  .kpi-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 480px) {
  .kpi-grid {
    grid-template-columns: 1fr;
  }
  .top-header {
    flex-direction: column;
    height: auto;
    padding: 1rem;
    gap: 0.75rem;
    align-items: flex-start;
  }
  .header-actions {
    width: 100%;
    justify-content: space-between;
  }
}
