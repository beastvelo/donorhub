import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateCampaignModal from '../components/CreateCampaignModal';
import './Campaigns.css';

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('/api/campaigns').then(r => r.json()).then(setCampaigns).catch(() => []);
  }, []);

  const filtered = filter === 'all' ? campaigns : campaigns.filter(c => c.status === filter);
  const formatCurrency = (n) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(n);

  const handleCreate = (data) => {
    fetch('/api/campaigns', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(newCampaign => {
        setCampaigns(prev => [...prev, newCampaign]);
        setShowModal(false);
      });
  };

  return (
    <div className="campaigns-page">
      <header className="page-header">
        <div>
          <h1>Campaigns</h1>
          <p className="subtitle">Manage fundraising campaigns</p>
        </div>
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          + New Campaign
        </button>
      </header>

      <div className="filter-tabs">
        {['all', 'active', 'completed'].map(f => (
          <button
            key={f}
            className={`filter-tab ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="campaigns-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Campaign</th>
              <th>Category</th>
              <th>Goal</th>
              <th>Raised</th>
              <th>Donors</th>
              <th>Progress</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(c => (
              <tr key={c.id}>
                <td>
                  <Link to={`/campaigns/${c.id}`} className="campaign-name-link">{c.name}</Link>
                </td>
                <td>{c.category}</td>
                <td>{formatCurrency(c.goal)}</td>
                <td>{formatCurrency(c.raised)}</td>
                <td>{c.donors}</td>
                <td>
                  <div className="table-progress">
                    <div className="table-progress-bar">
                      <div style={{ width: `${Math.min(100, (c.raised / c.goal) * 100)}%` }} />
                    </div>
                    <span>{Math.round((c.raised / c.goal) * 100)}%</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${c.status}`}>{c.status}</span>
                </td>
                <td>
                  <Link to={`/campaigns/${c.id}`} className="btn-sm">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <CreateCampaignModal
          onClose={() => setShowModal(false)}
          onSubmit={handleCreate}
        />
      )}
    </div>
  );
}

export default Campaigns;
