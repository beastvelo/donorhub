import './Help.css';

function Help() {
  const faqs = [
    { q: 'How do I create a new campaign?', a: 'Go to Campaigns and click New Campaign. Fill in the goal, dates, and category.' },
    { q: 'How do I log a donation?', a: 'Open a campaign and click Log Donation. Enter donor details and amount.' },
    { q: 'Where can I export data?', a: 'Visit the Reports or Export page to download donor lists and campaign reports.' }
  ];

  return (
    <div className="help-page page-content">
      <header className="page-header">
        <h1>Help</h1>
        <p className="subtitle">Frequently asked questions</p>
      </header>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <div key={i} className="faq-item">
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Help;
