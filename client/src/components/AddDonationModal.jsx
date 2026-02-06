import { useState } from 'react';
import './AddDonationModal.css';

function AddDonationModal({ campaignName, onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    amount: '',
    type: 'one-time'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: form.name,
      email: form.email,
      amount: parseInt(form.amount) || 0,
      type: form.type
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Log Donation</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <p className="modal-subtitle">Campaign: {campaignName}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Donor Name</label>
            <input
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="Full name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              placeholder="donor@email.de"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Amount (€)</label>
              <input
                type="number"
                value={form.amount}
                onChange={e => setForm({ ...form, amount: e.target.value })}
                placeholder="50"
                min="1"
                required
              />
            </div>
            <div className="form-group">
              <label>Type</label>
              <select
                value={form.type}
                onChange={e => setForm({ ...form, type: e.target.value })}
              >
                <option value="one-time">One-time</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary">Add Donation</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDonationModal;
