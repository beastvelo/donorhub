import { useState, useEffect } from 'react';
import './DonorSegments.css';

function DonorSegments() {
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    fetch('/api/donor-segments').then(r => r.json()).then(setSegments).catch(() => []);
  }, []);

  const formatCurrency = (n) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(n);

  return (
    <div className="donor-segments-page page-content">
      <header className="page-header">
        <h1>Donor Segments</h1>
        <p className="subtitle">Group donors for targeted outreach</p>
      </header>
      <div className="segments-grid">
        {segments.map((s) => (
          <div key={s.id} className="segment-card">
            <h3>{s.name}</h3>
            <span className="segment-count">{s.count.toLocaleString()} donors</span>
            {s.totalValue > 0 && <span className="segment-value">{formatCurrency(s.totalValue)} total</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonorSegments;
