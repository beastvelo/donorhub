import './CampaignTemplates.css';

function CampaignTemplates() {
  const templates = [
    { name: 'Climate & Environment', desc: 'Pre-filled for environmental campaigns' },
    { name: 'Emergency Relief', desc: 'Quick-start for disaster relief' },
    { name: 'Education Fund', desc: 'Scholarship and education campaigns' }
  ];

  return (
    <div className="campaign-templates-page page-content">
      <header className="page-header">
        <h1>Campaign Templates</h1>
        <p className="subtitle">Start new campaigns from templates</p>
      </header>
      <div className="templates-grid">
        {templates.map((t, i) => (
          <div key={i} className="template-card">
            <h3>{t.name}</h3>
            <p>{t.desc}</p>
            <button className="btn-primary">Use template</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampaignTemplates;
