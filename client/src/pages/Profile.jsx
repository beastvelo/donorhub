import './Profile.css';

function Profile() {
  return (
    <div className="profile-page page-content">
      <header className="page-header">
        <h1>Profile</h1>
        <p className="subtitle">Your account settings</p>
      </header>
      <div className="profile-card">
        <div className="profile-avatar">JD</div>
        <div className="profile-info">
          <h2>Jean David Hübner</h2>
          <p>Fundraising Manager · Germanwatch e.V.</p>
          <p className="profile-email">jd@example.org</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
