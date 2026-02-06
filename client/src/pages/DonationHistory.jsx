import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DonationHistory.css';

function DonationHistory() {
  const [donations, setDonations] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('/api/donors').then(r => r.json()).then(setDonations).catch(() => []);
    fetch('/api/campaigns').then(r => r.json()).then(setCampaigns).catch(() => []);
  }, []);

  const formatCurrency = (n) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(n);
  const getCampaignName = (id) => campaigns.find(c => c.id === id)?.name || `Campaign #${id}`;

  return (
    <div className="donation-history page-content">
      <header className="page-header">
        <h1>Donation History</h1>
        <p className="subtitle">All donations across campaigns</p>
      </header>
      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr><th>Date</th><th>Donor</th><th>Amount</th><th>Type</th><th>Campaign</th><th>Location</th></tr>
          </thead>
          <tbody>
            {donations.map(d => (
              <tr key={d.id}>
                <td>{d.date}</td>
                <td><Link to={`/donors/${d.id}`} className="donor-link">{d.name}</Link></td>
                <td>{formatCurrency(d.amount)}</td>
                <td><span className={`donation-type ${d.type}`}>{d.type}</span></td>
                <td><Link to={`/campaigns/${d.campaignId}`} className="btn-link">{getCampaignName(d.campaignId)}</Link></td>
                <td>{d.city && d.country ? `${d.city}, ${d.country}` : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DonationHistory;
