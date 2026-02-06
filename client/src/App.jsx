import { Routes, Route, NavLink } from 'react-router-dom';
import {
  IconDashboard, IconCampaigns, IconTemplates, IconDonors, IconSegments,
  IconDonations, IconRecurring, IconReports, IconGoals, IconExport,
  IconCommunications, IconThankYou, IconTeam, IconIntegrations, IconPayments,
  IconNotifications, IconProfile, IconAuditLog, IconHelp, IconSettings,
  IconLogo
} from './components/Icons';
import Dashboard from './pages/Dashboard';
import Campaigns from './pages/Campaigns';
import CampaignDetail from './pages/CampaignDetail';
import CampaignAnalytics from './pages/CampaignAnalytics';
import CampaignTemplates from './pages/CampaignTemplates';
import Donors from './pages/Donors';
import DonorDetail from './pages/DonorDetail';
import DonorSegments from './pages/DonorSegments';
import DonationHistory from './pages/DonationHistory';
import RecurringDonations from './pages/RecurringDonations';
import Reports from './pages/Reports';
import FundraisingGoals from './pages/FundraisingGoals';
import ExportData from './pages/ExportData';
import Communications from './pages/Communications';
import ThankYouLetters from './pages/ThankYouLetters';
import Team from './pages/Team';
import Integrations from './pages/Integrations';
import PaymentMethods from './pages/PaymentMethods';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import AuditLog from './pages/AuditLog';
import Help from './pages/Help';
import Settings from './pages/Settings';
import './styles/App.css';

const navItems = [
  { to: '/', Icon: IconDashboard, label: 'Dashboard' },
  { to: '/campaigns', Icon: IconCampaigns, label: 'Campaigns' },
  { to: '/campaigns/templates', Icon: IconTemplates, label: 'Campaign Templates' },
  { to: '/donors', Icon: IconDonors, label: 'Donors' },
  { to: '/donors/segments', Icon: IconSegments, label: 'Donor Segments' },
  { to: '/donations', Icon: IconDonations, label: 'Donation History' },
  { to: '/recurring', Icon: IconRecurring, label: 'Recurring Donations' },
  { to: '/reports', Icon: IconReports, label: 'Reports' },
  { to: '/goals', Icon: IconGoals, label: 'Fundraising Goals' },
  { to: '/export', Icon: IconExport, label: 'Export Data' },
  { to: '/communications', Icon: IconCommunications, label: 'Communications' },
  { to: '/thank-you', Icon: IconThankYou, label: 'Thank You Letters' },
  { to: '/team', Icon: IconTeam, label: 'Team' },
  { to: '/integrations', Icon: IconIntegrations, label: 'Integrations' },
  { to: '/payments', Icon: IconPayments, label: 'Payment Methods' },
  { to: '/notifications', Icon: IconNotifications, label: 'Notifications' },
  { to: '/profile', Icon: IconProfile, label: 'Profile' },
  { to: '/audit-log', Icon: IconAuditLog, label: 'Audit Log' },
  { to: '/help', Icon: IconHelp, label: 'Help' },
  { to: '/settings', Icon: IconSettings, label: 'Settings' },
];

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="logo-icon"><IconLogo /></span>
          <h1>DonorHub</h1>
          <span className="badge">NGO</span>
        </div>
        <nav className="sidebar-nav">
          {navItems.map(({ to, Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            >
              <span className="nav-icon"><Icon /></span> {label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="user-card">
            <div className="user-avatar">JD</div>
            <div className="user-info">
              <strong>Fundraising Manager</strong>
              <span>Germanwatch e.V.</span>
            </div>
          </div>
        </div>
      </aside>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaigns/templates" element={<CampaignTemplates />} />
          <Route path="/campaigns/:id" element={<CampaignDetail />} />
          <Route path="/campaigns/:id/analytics" element={<CampaignAnalytics />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/donors/segments" element={<DonorSegments />} />
          <Route path="/donors/:id" element={<DonorDetail />} />
          <Route path="/donations" element={<DonationHistory />} />
          <Route path="/recurring" element={<RecurringDonations />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/goals" element={<FundraisingGoals />} />
          <Route path="/export" element={<ExportData />} />
          <Route path="/communications" element={<Communications />} />
          <Route path="/thank-you" element={<ThankYouLetters />} />
          <Route path="/team" element={<Team />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/payments" element={<PaymentMethods />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/audit-log" element={<AuditLog />} />
          <Route path="/help" element={<Help />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
