import { useState } from 'react';
import './Settings.css';

function Settings() {
  const [orgName, setOrgName] = useState('Germanwatch e.V.');
  const [currency, setCurrency] = useState('EUR');
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="settings-page">
      <header className="page-header">
        <h1>Settings</h1>
        <p className="subtitle">Organization & preferences</p>
      </header>

      <div className="settings-sections">
        <section className="settings-section">
          <h2>Organization</h2>
          <div className="settings-form">
            <div className="form-group">
              <label>Organization Name</label>
              <input
                type="text"
                value={orgName}
                onChange={e => setOrgName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Default Currency</label>
              <select value={currency} onChange={e => setCurrency(e.target.value)}>
                <option value="EUR">EUR (€)</option>
                <option value="USD">USD ($)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>
          </div>
        </section>

        <section className="settings-section">
          <h2>Notifications</h2>
          <div className="settings-form">
            <div className="toggle-row">
              <label>Email notifications for new donations</label>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={e => setEmailNotifications(e.target.checked)}
                />
                <span className="toggle-slider" />
              </label>
            </div>
          </div>
        </section>

        <section className="settings-section">
          <h2>About</h2>
          <div className="about-info">
            <p><strong>DonorHub</strong> — Donation Campaign Management Platform for NGOs</p>
            <p>Version 1.0.0</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Settings;
