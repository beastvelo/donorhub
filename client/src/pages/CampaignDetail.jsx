import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AddDonationModal from '../components/AddDonationModal';
import './CampaignDetail.css';

function CampaignDetail() {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [donors, setDonors] = useState([]);
  const [showDonationModal, setShowDonationModal] = useState(false);

  useEffect(() => {
    fetch(`/api/campaigns/${id}`).then(r => r.json()).then(setCampaign).catch(() => null);
    fetch(`/api/donors?campaignId=${id}`).then(r => r.json()).then(setDonors).catch(() => []);
  }, [id]);

  const formatCurrency = (n) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(n);
  const progress = campaign ? Math.min(100, (campaign.raised / campaign.goal) * 100) : 0;

  const handleAddDonation = (data) => {
    fetch('/api/donors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, campaignId: parseInt(id) })
    })
      .then(r => r.json())
      .then(newDonor => {
        setDonors(prev => [...prev, newDonor]);
        setCampaign(prev => prev ? { ...prev, raised: prev.raised + newDonor.amount, donors: prev.donors + 1 } : null);
        setShowDonationModal(false);
      });
  };

  if (!campaign) return <div className="loading">Loading...</div>;

  return (
    <div className="campaign-detail">
      <div className="breadcrumb">
        <Link to="/campaigns">Campaigns</Link>
        <span>/</span>
        <span>{campaign.name}</span>
      </div>

      <header className="detail-header">
        <div>
          <span className="detail-category">{campaign.category}</span>
          <h1>{campaign.name}</h1>
          <div className="detail-meta">
            {campaign.startDate} — {campaign.endDate || 'Ongoing'}
          </div>
        </div>
        <span className={`status-badge large ${campaign.status}`}>{campaign.status}</span>
      </header>

      {campaign.description && (
        <p className="campaign-description">{campaign.description}</p>
      )}

      <div className="detail-stats-row">
        <div className="detail-stat">
          <span className="detail-stat-label">Goal</span>
          <span className="detail-stat-value">{formatCurrency(campaign.goal)}</span>
        </div>
        <div className="detail-stat">
          <span className="detail-stat-label">Raised</span>
          <span className="detail-stat-value accent">{formatCurrency(campaign.raised)}</span>
        </div>
        <div className="detail-stat">
          <span className="detail-stat-label">Donors</span>
          <span className="detail-stat-value">{campaign.donors}</span>
        </div>
        <button className="btn-primary" onClick={() => setShowDonationModal(true)}>
          + Log Donation
        </button>
      </div>

      <div className="detail-progress-section">
        <div className="detail-progress-bar">
          <div className="detail-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="detail-progress-text">{progress.toFixed(0)}% funded</span>
      </div>

      <div className="donors-section">
        <h2>Recent Donors</h2>
        <div className="donors-table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Donor</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {donors.length === 0 ? (
                <tr>
                  <td colSpan="5" className="empty-state">No donations yet. Be the first!</td>
                </tr>
              ) : (
                donors.map(d => (
                  <tr key={d.id}>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{formatCurrency(d.amount)}</td>
                    <td>
                      <span className={`donation-type ${d.type}`}>{d.type}</span>
                    </td>
                    <td>{d.date}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showDonationModal && (
        <AddDonationModal
          campaignName={campaign.name}
          onClose={() => setShowDonationModal(false)}
          onSubmit={handleAddDonation}
        />
      )}
    </div>
  );
}

export default CampaignDetail;
