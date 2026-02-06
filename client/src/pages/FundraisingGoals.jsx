import { useState, useEffect } from 'react';
import './FundraisingGoals.css';

function FundraisingGoals() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    fetch('/api/metrics').then(r => r.json()).then(setMetrics).catch(() => ({}));
  }, []);

  const formatCurrency = (n) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(n || 0);

  return (
    <div className="fundraising-goals page-content">
      <header className="page-header">
        <h1>Fundraising Goals</h1>
        <p className="subtitle">Annual targets & progress</p>
      </header>
      <div className="goals-grid">
        <div className="goal-card">
          <h3>Annual Target</h3>
          <span className="goal-value">{formatCurrency(500000)}</span>
          <div className="progress-bar-container"><div className="progress-bar-fill" style={{width:'41%'}}/></div>
          <span className="goal-progress">{formatCurrency(metrics?.totalRaised || 207300)} raised (41%)</span>
        </div>
        <div className="goal-card">
          <h3>Donor Acquisition</h3>
          <span className="goal-value">6,000</span>
          <div className="progress-bar-container"><div className="progress-bar-fill" style={{width:'84%'}}/></div>
          <span className="goal-progress">5,026 donors (84%)</span>
        </div>
      </div>
    </div>
  );
}

export default FundraisingGoals;
