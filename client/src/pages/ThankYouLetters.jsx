import { useState, useEffect } from 'react';
import './ThankYouLetters.css';

function ThankYouLetters() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('/api/thank-you-templates').then(r => r.json()).then(setTemplates).catch(() => []);
  }, []);

  return (
    <div className="thank-you-letters-page page-content">
      <header className="page-header">
        <h1>Thank You Letters</h1>
        <p className="subtitle">Templates for donor acknowledgment</p>
      </header>
      <div className="letter-templates">
        {templates.map((t) => (
          <div key={t.id} className="letter-card">
            <h3>{t.name}</h3>
            <span className="letter-meta">Last used: {t.lastUsed} · Used {t.usedCount} times</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThankYouLetters;
