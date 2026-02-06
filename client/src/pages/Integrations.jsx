import './Integrations.css';

function Integrations() {
  const integrations = [
    { name: 'Stripe', desc: 'Payment processing', connected: true },
    { name: 'Mailchimp', desc: 'Email marketing', connected: true },
    { name: 'Google Analytics', desc: 'Traffic & conversions', connected: false }
  ];

  return (
    <div className="integrations-page page-content">
      <header className="page-header">
        <h1>Integrations</h1>
        <p className="subtitle">Connect third-party services</p>
      </header>
      <div className="integrations-grid">
        {integrations.map((i, idx) => (
          <div key={idx} className="integration-card">
            <h3>{i.name}</h3>
            <p>{i.desc}</p>
            <span className={`status-pill ${i.connected ? 'connected' : ''}`}>{i.connected ? 'Connected' : 'Not connected'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Integrations;
