import { useState } from 'react';
import './CreateCampaignModal.css';

function CreateCampaignModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    goal: '',
    category: 'Environment',
    startDate: new Date().toISOString().slice(0, 10),
    endDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: form.name,
      goal: parseInt(form.goal) || 0,
      category: form.category,
      startDate: form.startDate,
      endDate: form.endDate
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>New Campaign</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Campaign Name</label>
            <input
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Climate Action 2026"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Goal (€)</label>
              <input
                type="number"
                value={form.goal}
                onChange={e => setForm({ ...form, goal: e.target.value })}
                placeholder="50000"
                min="1"
                required
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                value={form.category}
                onChange={e => setForm({ ...form, category: e.target.value })}
              >
                <option value="Environment">Environment</option>
                <option value="Education">Education</option>
                <option value="Relief">Relief</option>
                <option value="Advocacy">Advocacy</option>
                <option value="Health">Health</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                value={form.startDate}
                onChange={e => setForm({ ...form, startDate: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                value={form.endDate}
                onChange={e => setForm({ ...form, endDate: e.target.value })}
                placeholder="Optional"
              />
            </div>
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary">Create Campaign</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCampaignModal;
