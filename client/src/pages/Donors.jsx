import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Donors.css';

function Donors() {
  const [donors, setDonors] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [filterCampaign, setFilterCampaign] = useState('');

  useEffect(() => {
    fetch('/api/donors').then(r => r.json()).then(setDonors).catch(() => []);
    fetch('/api/campaigns').then(r => r.json()).then(setCampaigns).catch(() => []);
  }, []);

  const filtered = filterCampaign
    ? donors.filter(d => d.campaignId === parseInt(filterCampaign))
    : donors;

  const formatCurrency = (n) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(n);
  const totalAmount = filtered.reduce((s, d) => s + d.amount, 0);

  const getCampaignName = (id) => campaigns.find(c => c.id === id)?.name || 'Unknown';

  return (
    <div className="donors-page">
      <header className="page-header">
        <div>
          <h1>Donors</h1>
          <p className="subtitle">Manage donor relationships & history</p>
        </div>
      </header>

      <div className="donors-summary-cards">
        <div className="summary-card">
          <span className="summary-label">Total Donors</span>
          <span className="summary-value">{filtered.length}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Total Donations</span>
          <span className="summary-value accent">{formatCurrency(totalAmount)}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Avg. Donation</span>
          <span className="summary-value">
            {filtered.length ? formatCurrency(totalAmount / filtered.length) : '€0'}
          </span>
        </div>
      </div>

      <div className="filter-bar">
        <label>Filter by campaign:</label>
        <select
          value={filterCampaign}
          onChange={e => setFilterCampaign(e.target.value)}
          className="filter-select"
        >
          <option value="">All campaigns</option>
          {campaigns.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>

      <div className="donors-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Donor</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Campaign</th>
              <th>Location</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(d => (
              <tr key={d.id}>
                <td>
                  <div className="donor-cell">
                    <div className="donor-avatar">{d.name.charAt(0)}</div>
                    <Link to={`/donors/${d.id}`} className="donor-link">{d.name}</Link>
                  </div>
                </td>
                <td>{d.email}</td>
                <td>{formatCurrency(d.amount)}</td>
                <td>{getCampaignName(d.campaignId)}</td>
                <td>{d.city && d.country ? `${d.city}, ${d.country}` : '—'}</td>
                <td>
                  <span className={`donation-type ${d.type}`}>{d.type}</span>
                </td>
                <td>{d.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Donors;
