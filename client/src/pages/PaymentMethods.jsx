import './PaymentMethods.css';

function PaymentMethods() {
  const methods = [
    { name: 'Credit Card', enabled: true },
    { name: 'SEPA Direct Debit', enabled: true },
    { name: 'PayPal', enabled: false }
  ];

  return (
    <div className="payment-methods-page page-content">
      <header className="page-header">
        <h1>Payment Methods</h1>
        <p className="subtitle">Configure accepted payment methods</p>
      </header>
      <div className="methods-list">
        {methods.map((m, i) => (
          <div key={i} className="method-card">
            <span>{m.name}</span>
            <span className={`status-pill ${m.enabled ? 'connected' : ''}`}>{m.enabled ? 'Enabled' : 'Disabled'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethods;
