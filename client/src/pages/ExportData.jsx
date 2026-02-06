import './ExportData.css';

function ExportData() {
  const options = [
    { label: 'Donor list (CSV)', desc: 'All donors with contact info' },
    { label: 'Campaign report (PDF)', desc: 'Summary per campaign' },
    { label: 'Financial summary (Excel)', desc: 'Donations by period' }
  ];

  return (
    <div className="export-data-page page-content">
      <header className="page-header">
        <h1>Export Data</h1>
        <p className="subtitle">Download reports and data</p>
      </header>
      <div className="export-options">
        {options.map((o, i) => (
          <div key={i} className="export-option">
            <div><h3>{o.label}</h3><p>{o.desc}</p></div>
            <button className="btn-primary">Export</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExportData;
