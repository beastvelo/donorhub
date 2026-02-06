import { useParams } from 'react-router-dom';
import './CampaignAnalytics.css';

function CampaignAnalytics() {
  const { id } = useParams();

  return (
    <div className="campaign-analytics-page page-content">
      <header className="page-header">
        <h1>Campaign Analytics</h1>
        <p className="subtitle">Campaign #{id} — performance metrics</p>
      </header>
      <div className="analytics-cards">
        <div className="analytics-card"><span className="a-label">Conversion rate</span><span className="a-value">3.2%</span></div>
        <div className="analytics-card"><span className="a-label">Avg. donation</span><span className="a-value">€41</span></div>
      </div>
    </div>
  );
}

export default CampaignAnalytics;
