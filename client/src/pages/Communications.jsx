import { useState, useEffect } from 'react';
import './Communications.css';

function Communications() {
  const [comm, setComm] = useState([]);

  useEffect(() => {
    fetch('/api/communications').then(r => r.json()).then(setComm).catch(() => []);
  }, []);

  return (
    <div className="communications-page page-content">
      <header className="page-header">
        <h1>Communications</h1>
        <p className="subtitle">Email campaigns & outreach</p>
      </header>
      <div className="comm-list">
        {comm.map((c) => (
          <div key={c.id} className="comm-card">
            <div>
              <h3>{c.name}</h3>
              <span className="comm-meta">Sent to {c.sent.toLocaleString()} · {c.sentDate}</span>
            </div>
            <div className="comm-stats">
              <span className="comm-stat">Open: {c.openRate}%</span>
              <span className="comm-stat">Click: {c.clickRate}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Communications;
