import { useState, useEffect } from 'react';
import './Reports.css';

function Reports() {
  const [metrics, setMetrics] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [weeklyTrends, setWeeklyTrends] = useState([]);

  useEffect(() => {
    fetch('/api/metrics').then(r => r.json()).then(setMetrics).catch(() => ({}));
    fetch('/api/campaigns').then(r => r.json()).then(setCampaigns).catch(() => []);
    fetch('/api/weekly-trends').then(r => r.json()).then(setWeeklyTrends).catch(() => []);
  }, []);

  const trendLabels = ['Jan W1', 'W2', 'W3', 'W4', 'Feb W1', 'W2', 'W3', 'W4', 'Mar W1', 'W2', 'W3', 'W4'];
  const trends = weeklyTrends.length ? weeklyTrends : [52, 61, 58, 72, 68, 85];
  const labels = trends.length === 12 ? trendLabels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].slice(0, trends.length);

  const formatCurrency = (n) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(n || 0);

  return (
    <div className="reports-page">
      <header className="page-header">
        <h1>Reports</h1>
        <p className="subtitle">Analytics & performance overview</p>
      </header>

      <div className="reports-grid">
        <div className="report-card wide">
          <h3>Key Performance Indicators</h3>
          <div className="kpi-grid">
            <div className="kpi-item">
              <span className="kpi-label">Total Raised (YTD)</span>
              <span className="kpi-value">{formatCurrency(metrics?.ytdRaised || metrics?.totalRaised)}</span>
            </div>
            <div className="kpi-item">
              <span className="kpi-label">Monthly Recurring Donors</span>
              <span className="kpi-value">{metrics?.monthlyRecurring?.toLocaleString() || 0}</span>
            </div>
            <div className="kpi-item">
              <span className="kpi-label">Conversion Rate</span>
              <span className="kpi-value">{metrics?.conversionRate || 0}%</span>
            </div>
            <div className="kpi-item">
              <span className="kpi-label">Avg. Donation Size</span>
              <span className="kpi-value">{formatCurrency(metrics?.avgDonation)}</span>
            </div>
          </div>
        </div>

        <div className="report-card">
          <h3>Campaign Performance</h3>
          <div className="campaign-bars">
            {campaigns.slice(0, 5).map(c => (
              <div key={c.id} className="campaign-bar-row">
                <span className="campaign-bar-name">{c.name}</span>
                <div className="campaign-bar-track">
                  <div
                    className="campaign-bar-fill"
                    style={{ width: `${Math.min(100, (c.raised / c.goal) * 100)}%` }}
                  />
                </div>
                <span className="campaign-bar-pct">
                  {Math.round((c.raised / c.goal) * 100)}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="report-card">
          <h3>Donation Trends</h3>
          <div className="trend-chart">
            <div className="trend-bars">
              {trends.map((h, i) => (
                <div key={i} className="trend-bar" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="trend-labels">
              {labels.map((l, i) => (
                <span key={i}>{l}</span>
              ))}
            </div>
          </div>
          <p className="trend-note">Weekly donation volume (relative)</p>
        </div>

        <div className="report-card">
          <h3>Export Options</h3>
          <ul className="export-list">
            <li>
              <span>Donor list (CSV)</span>
              <button className="btn-export">Export</button>
            </li>
            <li>
              <span>Campaign report (PDF)</span>
              <button className="btn-export">Export</button>
            </li>
            <li>
              <span>Financial summary</span>
              <button className="btn-export">Export</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Reports;
