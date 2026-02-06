import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [recentDonors, setRecentDonors] = useState([]);

  useEffect(() => {
    fetch('/api/metrics').then(r => r.json()).then(setMetrics).catch(() => setMetrics({}));
    fetch('/api/campaigns').then(r => r.json()).then(setCampaigns).catch(() => []);
    fetch('/api/donors').then(r => r.json()).then(list => setRecentDonors(list.slice(0, 8))).catch(() => []);
  }, []);

  const formatCurrency = (n) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(n || 0);
  const activeCampaigns = campaigns.filter(c => c.status === 'active');

  return (
    <div className="dashboard">
      <header className="page-header">
        <h1>Dashboard</h1>
        <p className="subtitle">Fundraising overview & key performance</p>
      </header>

      {metrics && (
        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-label">Total Raised</span>
            <span className="metric-value">{formatCurrency(metrics.totalRaised)}</span>
            <span className="metric-change positive">+12% vs last quarter</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Total Donors</span>
            <span className="metric-value">{metrics.totalDonors?.toLocaleString()}</span>
            <span className="metric-change positive">+8% vs last quarter</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Active Campaigns</span>
            <span className="metric-value">{metrics.activeCampaigns}</span>
            <span className="metric-change">{metrics.activeCampaigns} running</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Avg. Donation</span>
            <span className="metric-value">{formatCurrency(metrics.avgDonation)}</span>
            <span className="metric-change positive">+5%</span>
          </div>
        </div>
      )}

      <div className="dashboard-section">
        <div className="section-header">
          <h2>Active Campaigns</h2>
          <Link to="/campaigns" className="btn-link">View all →</Link>
        </div>
        <div className="campaign-cards">
          {activeCampaigns.slice(0, 3).map(c => (
            <Link key={c.id} to={`/campaigns/${c.id}`} className="campaign-card-link">
              <div className="campaign-card">
                <div className="campaign-card-header">
                  <span className="campaign-category">{c.category}</span>
                  <span className={`status-badge ${c.status}`}>{c.status}</span>
                </div>
                <h3>{c.name}</h3>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${Math.min(100, (c.raised / c.goal) * 100)}%` }}
                  />
                </div>
                <div className="campaign-stats">
                  <span>{formatCurrency(c.raised)} of {formatCurrency(c.goal)}</span>
                  <span>{c.donors} donors</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="dashboard-row">
        <div className="chart-card">
          <h3>Donation Distribution</h3>
          <div className="donut-chart">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--bg-card)" strokeWidth="12" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent)" strokeWidth="12" strokeDasharray="126 125" strokeDashoffset="-25" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="12" strokeDasharray="63 188" strokeDashoffset="-151" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="12" strokeDasharray="31 220" strokeDashoffset="-214" transform="rotate(-90 50 50)" />
            </svg>
            <div className="donut-center">
              <span className="donut-value">{metrics?.conversionRate || 0}%</span>
              <span className="donut-label">Conversion</span>
            </div>
          </div>
          <div className="chart-legend">
            <span><i style={{ background: 'var(--accent)' }}></i> One-time</span>
            <span><i style={{ background: '#3b82f6' }}></i> Monthly</span>
            <span><i style={{ background: '#f59e0b' }}></i> Major gifts</span>
          </div>
        </div>
        <div className="recent-activity-card">
          <h3>Recent Donations</h3>
          <ul className="activity-list">
            {recentDonors.map((a, i) => {
              const camp = campaigns.find(c => c.id === a.campaignId);
              const amt = a.type === 'monthly' ? formatCurrency(a.amount) + '/mo' : formatCurrency(a.amount);
              return (
                <li key={a.id}>
                  <div className="activity-dot"></div>
                  <div>
                    <strong>{a.name}</strong> donated {amt} to {camp?.name || 'Campaign'}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
