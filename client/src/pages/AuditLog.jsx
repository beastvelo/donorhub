import { useState, useEffect } from 'react';
import './AuditLog.css';

function AuditLog() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch('/api/audit-log').then(r => r.json()).then(setLogs).catch(() => []);
  }, []);

  return (
    <div className="audit-log-page page-content">
      <header className="page-header">
        <h1>Audit Log</h1>
        <p className="subtitle">Activity history</p>
      </header>
      <div className="table-card">
        <table className="data-table">
          <thead><tr><th>Action</th><th>Details</th><th>User</th><th>Time</th></tr></thead>
          <tbody>
            {logs.map((l) => (
              <tr key={l.id}>
                <td>{l.action}</td>
                <td>{l.details}</td>
                <td>{l.user}</td>
                <td>{l.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AuditLog;
