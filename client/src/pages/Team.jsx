import { useState, useEffect } from 'react';
import './Team.css';

function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch('/api/team').then(r => r.json()).then(setTeam).catch(() => []);
  }, []);

  return (
    <div className="team-page page-content">
      <header className="page-header">
        <h1>Team</h1>
        <p className="subtitle">Organization members</p>
      </header>
      <div className="team-grid">
        {team.map((m) => (
          <div key={m.id} className="team-card">
            <div className="team-avatar">{m.name.split(' ').map(n=>n[0]).join('')}</div>
            <h3>{m.name}</h3>
            <span className="team-role">{m.role}</span>
            <span className="team-dept">{m.department}</span>
            <span className="team-email">{m.email}</span>
            <span className="team-join">Since {m.joinDate}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
