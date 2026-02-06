import { useState, useEffect } from 'react';
import './Notifications.css';

function Notifications() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/notifications').then(r => r.json()).then(setItems).catch(() => []);
  }, []);

  return (
    <div className="notifications-page page-content">
      <header className="page-header">
        <h1>Notifications</h1>
        <p className="subtitle">Activity & alerts</p>
      </header>
      <div className="notif-list">
        {items.map((n) => (
          <div key={n.id} className={`notif-item ${!n.read ? 'unread' : ''}`}>
            <div className="notif-dot"/>
            <div className="notif-content">
              <strong>{n.title}</strong>
              <p>{n.body}</p>
            </div>
            <span className="notif-time">{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
