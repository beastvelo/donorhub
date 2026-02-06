import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DonorDetail.css';

function DonorDetail() {
  const { id } = useParams();
  const [donor, setDonor] = useState(null);

  useEffect(() => {
    fetch('/api/donors').then(r => r.json()).then(list => {
      const d = list.find(x => x.id === parseInt(id));
      setDonor(d || null);
    }).catch(() => setDonor(null));
  }, [id]);

  const formatCurrency = (n) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(n);

  if (!donor) return <div className="loading">Loading...</div>;

  return (
    <div className="donor-detail page-content">
      <div className="breadcrumb">
        <Link to="/donors">Donors</Link><span> / </span><span>{donor.name}</span>
      </div>
      <header className="page-header">
        <div className="donor-header-main">
          <div className="donor-avatar-large">{donor.name.charAt(0)}</div>
          <div>
            <h1>{donor.name}</h1>
            <p className="subtitle">{donor.email}</p>
          </div>
        </div>
        <span className={`donation-type badge ${donor.type}`}>{donor.type}</span>
      </header>
      <div className="detail-grid">
        <div className="detail-card">
          <h3>Donation Summary</h3>
          <div className="summary-row"><span>Total Given</span><strong>{formatCurrency(donor.amount)}</strong></div>
          <div className="summary-row"><span>Last Donation</span><span>{donor.date}</span></div>
        </div>
        <div className="detail-card">
          <h3>Contact</h3>
          <p>{donor.email}</p>
          {donor.city && <p>{donor.city}, {donor.country}</p>}
        </div>
      </div>
    </div>
  );
}

export default DonorDetail;
