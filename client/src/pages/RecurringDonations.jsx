import { useState, useEffect } from 'react';
import './RecurringDonations.css';

function RecurringDonations() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetch('/api/donors').then(r => r.json()).then(list => setDonors(list.filter(d => d.type === 'monthly'))).catch(() => []);
  }, []);

  const formatCurrency = (n) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(n);

  return (
    <div className="recurring-donations page-content">
      <header className="page-header">
        <h1>Recurring Donations</h1>
        <p className="subtitle">Monthly supporters</p>
      </header>
      <div className="summary-row-cards">
        <div className="summary-card"><span className="summary-label">Active recurring</span><span className="summary-value">{donors.length}</span></div>
        <div className="summary-card"><span className="summary-label">Monthly revenue</span><span className="summary-value accent">{formatCurrency(donors.reduce((s,d)=>s+d.amount,0))}</span></div>
      </div>
      <div className="table-card">
        <table className="data-table">
          <thead><tr><th>Donor</th><th>Amount</th><th>Since</th></tr></thead>
          <tbody>
            {donors.map(d => <tr key={d.id}><td>{d.name}</td><td>{formatCurrency(d.amount)}/mo</td><td>{d.date}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecurringDonations;
