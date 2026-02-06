import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const campaigns = [
  { id: 1, name: 'Climate Action 2025', goal: 50000, raised: 34200, donors: 892, status: 'active', startDate: '2025-01-15', endDate: '2025-06-30', category: 'Environment', description: 'Support renewable energy transition and carbon neutrality initiatives across Germany.' },
  { id: 2, name: 'Sustainable Agriculture Fund', goal: 25000, raised: 18900, donors: 456, status: 'active', startDate: '2025-02-01', endDate: '2025-08-31', category: 'Environment', description: 'Funding for organic farming and biodiversity protection in rural communities.' },
  { id: 3, name: 'Youth Education Initiative', goal: 75000, raised: 75000, donors: 1203, status: 'completed', startDate: '2024-09-01', endDate: '2025-01-31', category: 'Education', description: 'Scholarships and training programs for disadvantaged youth.' },
  { id: 4, name: 'Emergency Relief Fund', goal: 100000, raised: 67100, donors: 2341, status: 'active', startDate: '2025-01-01', endDate: '2025-12-31', category: 'Relief', description: 'Rapid response for natural disasters and humanitarian crises in DACH region.' },
  { id: 5, name: 'Policy Advocacy Campaign', goal: 35000, raised: 12000, donors: 234, status: 'active', startDate: '2025-03-01', endDate: '2025-09-30', category: 'Advocacy', description: 'Lobbying for stronger climate legislation at federal and EU levels.' },
  { id: 6, name: 'Ocean Protection Program', goal: 60000, raised: 28400, donors: 567, status: 'active', startDate: '2025-01-20', endDate: '2025-11-30', category: 'Environment', description: 'Marine conservation and plastic reduction initiatives.' },
  { id: 7, name: 'Community Health Outreach', goal: 18000, raised: 12300, donors: 312, status: 'active', startDate: '2025-02-15', endDate: '2025-07-31', category: 'Health', description: 'Free health screenings and wellness workshops in underserved areas.' },
  { id: 8, name: 'Wildlife Habitat Restoration', goal: 42000, raised: 18900, donors: 423, status: 'active', startDate: '2024-11-01', endDate: '2025-05-31', category: 'Environment', description: 'Reforestation and habitat creation for native species.' }
];

const donors = [
  { id: 1, name: 'Anna Schmidt', email: 'anna.schmidt@gmx.de', amount: 250, campaignId: 1, date: '2025-02-10', type: 'one-time', city: 'Berlin', country: 'Germany' },
  { id: 2, name: 'Thomas Müller', email: 'thomas.mueller@web.de', amount: 50, campaignId: 1, date: '2025-02-11', type: 'monthly', city: 'Munich', country: 'Germany' },
  { id: 3, name: 'Sarah Weber', email: 'sarah.weber@t-online.de', amount: 500, campaignId: 2, date: '2025-02-09', type: 'one-time', city: 'Hamburg', country: 'Germany' },
  { id: 4, name: 'Michael Fischer', email: 'm.fischer@outlook.de', amount: 100, campaignId: 1, date: '2025-02-08', type: 'one-time', city: 'Cologne', country: 'Germany' },
  { id: 5, name: 'Julia Hoffmann', email: 'julia.hoffmann@yahoo.de', amount: 75, campaignId: 3, date: '2025-01-28', type: 'monthly', city: 'Frankfurt', country: 'Germany' },
  { id: 6, name: 'Peter Krause', email: 'p.krause@freenet.de', amount: 1000, campaignId: 4, date: '2025-02-12', type: 'one-time', city: 'Stuttgart', country: 'Germany' },
  { id: 7, name: 'Lisa Becker', email: 'lisa.becker@gmail.com', amount: 30, campaignId: 1, date: '2025-02-11', type: 'monthly', city: 'Düsseldorf', country: 'Germany' },
  { id: 8, name: 'Martin Schulz', email: 'martin.schulz@posteo.de', amount: 200, campaignId: 2, date: '2025-02-10', type: 'one-time', city: 'Leipzig', country: 'Germany' },
  { id: 9, name: 'Christina Wolf', email: 'c.wolf@icloud.com', amount: 150, campaignId: 4, date: '2025-02-12', type: 'one-time', city: 'Dortmund', country: 'Germany' },
  { id: 10, name: 'Stefan Braun', email: 'stefan.braun@gmx.net', amount: 45, campaignId: 5, date: '2025-02-11', type: 'monthly', city: 'Essen', country: 'Germany' },
  { id: 11, name: 'Katharina Lehmann', email: 'k.lehmann@email.de', amount: 120, campaignId: 1, date: '2025-02-12', type: 'one-time', city: 'Bremen', country: 'Germany' },
  { id: 12, name: 'Andreas Richter', email: 'andreas.richter@web.de', amount: 75, campaignId: 2, date: '2025-02-11', type: 'monthly', city: 'Dresden', country: 'Germany' },
  { id: 13, name: 'Sophie Zimmermann', email: 'sophie.z@t-online.de', amount: 300, campaignId: 4, date: '2025-02-10', type: 'one-time', city: 'Hannover', country: 'Germany' },
  { id: 14, name: 'Daniel Wagner', email: 'd.wagner@gmx.de', amount: 25, campaignId: 1, date: '2025-02-09', type: 'monthly', city: 'Nuremberg', country: 'Germany' },
  { id: 15, name: 'Laura Klein', email: 'laura.klein@outlook.com', amount: 500, campaignId: 6, date: '2025-02-08', type: 'one-time', city: 'Vienna', country: 'Austria' },
  { id: 16, name: 'Markus Bauer', email: 'markus.bauer@freenet.de', amount: 80, campaignId: 2, date: '2025-02-07', type: 'monthly', city: 'Mannheim', country: 'Germany' },
  { id: 17, name: 'Elena Hoffmann', email: 'elena.hoffmann@posteo.de', amount: 180, campaignId: 4, date: '2025-02-06', type: 'one-time', city: 'Karlsruhe', country: 'Germany' },
  { id: 18, name: 'Florian Neumann', email: 'f.neumann@email.de', amount: 55, campaignId: 1, date: '2025-02-05', type: 'monthly', city: 'Zurich', country: 'Switzerland' },
  { id: 19, name: 'Nina Schwarz', email: 'nina.schwarz@gmx.de', amount: 220, campaignId: 6, date: '2025-02-04', type: 'one-time', city: 'Augsburg', country: 'Germany' },
  { id: 20, name: 'Christian Meyer', email: 'c.meyer@web.de', amount: 400, campaignId: 4, date: '2025-02-03', type: 'one-time', city: 'Wiesbaden', country: 'Germany' },
  { id: 21, name: 'Melanie König', email: 'melanie.koenig@t-online.de', amount: 35, campaignId: 7, date: '2025-02-02', type: 'monthly', city: 'Münster', country: 'Germany' },
  { id: 22, name: 'Sebastian Roth', email: 'sebastian.roth@outlook.de', amount: 90, campaignId: 2, date: '2025-02-01', type: 'one-time', city: 'Aachen', country: 'Germany' },
  { id: 23, name: 'Jennifer Frank', email: 'j.frank@gmail.com', amount: 150, campaignId: 8, date: '2025-01-31', type: 'one-time', city: 'Freiburg', country: 'Germany' },
  { id: 24, name: 'Tobias Keller', email: 'tobias.keller@posteo.de', amount: 60, campaignId: 1, date: '2025-01-30', type: 'monthly', city: 'Heidelberg', country: 'Germany' },
  { id: 25, name: 'Hannah Peters', email: 'hannah.peters@icloud.com', amount: 275, campaignId: 4, date: '2025-01-29', type: 'one-time', city: 'Regensburg', country: 'Germany' },
  { id: 26, name: 'Alexander Lang', email: 'a.lang@gmx.net', amount: 120, campaignId: 5, date: '2025-01-28', type: 'one-time', city: 'Mainz', country: 'Germany' },
  { id: 27, name: 'Claudia Schuster', email: 'claudia.schuster@web.de', amount: 45, campaignId: 7, date: '2025-01-27', type: 'monthly', city: 'Lübeck', country: 'Germany' },
  { id: 28, name: 'Philipp Berger', email: 'philipp.berger@freenet.de', amount: 600, campaignId: 6, date: '2025-01-26', type: 'one-time', city: 'Graz', country: 'Austria' },
  { id: 29, name: 'Sabine Koch', email: 'sabine.koch@email.de', amount: 95, campaignId: 2, date: '2025-01-25', type: 'one-time', city: 'Erfurt', country: 'Germany' },
  { id: 30, name: 'Robert Hartmann', email: 'r.hartmann@t-online.de', amount: 40, campaignId: 1, date: '2025-01-24', type: 'monthly', city: 'Bern', country: 'Switzerland' }
];

const metrics = {
  totalRaised: 207300,
  totalDonors: 5026,
  activeCampaigns: 7,
  avgDonation: 41.25,
  monthlyRecurring: 1247,
  conversionRate: 3.2,
  ytdRaised: 189400,
  lastMonthDonations: 23400
};

const communications = [
  { id: 1, name: 'Thank You - New Donors', sent: 234, openRate: 67, clickRate: 12, sentDate: '2025-02-10' },
  { id: 2, name: 'Monthly Newsletter February 2025', sent: 5026, openRate: 42, clickRate: 8, sentDate: '2025-02-05' },
  { id: 3, name: 'Campaign Update - Climate Action 2025', sent: 892, openRate: 58, clickRate: 15, sentDate: '2025-02-08' },
  { id: 4, name: 'Emergency Relief - Urgent Appeal', sent: 2341, openRate: 71, clickRate: 22, sentDate: '2025-02-01' },
  { id: 5, name: 'Recurring Donor Appreciation', sent: 1247, openRate: 65, clickRate: 11, sentDate: '2025-01-28' },
  { id: 6, name: 'Lapsed Donor Re-engagement', sent: 892, openRate: 38, clickRate: 6, sentDate: '2025-01-20' }
];

const notifications = [
  { id: 1, title: 'New donation received', body: 'Peter Krause donated €1,000 to Emergency Relief Fund', time: '2 hours ago', read: false },
  { id: 2, title: 'Campaign milestone reached', body: 'Climate Action 2025 reached 70% of goal', time: '1 day ago', read: false },
  { id: 3, title: 'Monthly recurring report ready', body: 'February 2025 recurring donations summary', time: '3 days ago', read: true },
  { id: 4, title: 'New donor signed up for monthly', body: 'Katharina Lehmann started €75/month', time: '5 hours ago', read: false },
  { id: 5, title: 'Thank you emails sent', body: '234 acknowledgment emails delivered', time: '1 day ago', read: true },
  { id: 6, title: 'Campaign ending soon', body: 'Youth Education Initiative completed successfully', time: '1 week ago', read: true }
];

const auditLog = [
  { id: 1, action: 'Donation logged', user: 'Jean David Hübner', details: '€1,000 from Peter Krause', time: '2025-02-12 14:32' },
  { id: 2, action: 'Campaign created', user: 'Anna Schmidt', details: 'Ocean Protection Program', time: '2025-02-11 09:15' },
  { id: 3, action: 'Settings updated', user: 'Jean David Hübner', details: 'Notification preferences', time: '2025-02-10 16:44' },
  { id: 4, action: 'Donation logged', user: 'Thomas Müller', details: '€120 from Katharina Lehmann', time: '2025-02-12 11:20' },
  { id: 5, action: 'Export completed', user: 'Anna Schmidt', details: 'Donor list CSV', time: '2025-02-11 15:30' },
  { id: 6, action: 'Email campaign sent', user: 'Jean David Hübner', details: 'Thank You - New Donors to 234 recipients', time: '2025-02-10 10:05' },
  { id: 7, action: 'Campaign status changed', user: 'Anna Schmidt', details: 'Youth Education Initiative → completed', time: '2025-02-05 14:22' },
  { id: 8, action: 'Donor segment created', user: 'Thomas Müller', details: 'Major donors (€500+)', time: '2025-02-04 09:18' }
];

const team = [
  { id: 1, name: 'Jean David Hübner', role: 'Senior Fundraising Manager', email: 'jd.huebner@germanwatch.org', department: 'Fundraising', joinDate: '2021-03' },
  { id: 2, name: 'Anna Schmidt', role: 'Donor Relations Coordinator', email: 'a.schmidt@germanwatch.org', department: 'Fundraising', joinDate: '2022-06' },
  { id: 3, name: 'Thomas Müller', role: 'Campaign Manager', email: 't.mueller@germanwatch.org', department: 'Communications', joinDate: '2023-01' },
  { id: 4, name: 'Sarah Weber', role: 'Data Analyst', email: 's.weber@germanwatch.org', department: 'Operations', joinDate: '2020-09' },
  { id: 5, name: 'Michael Fischer', role: 'Marketing Lead', email: 'm.fischer@germanwatch.org', department: 'Communications', joinDate: '2019-11' }
];

const donorSegments = [
  { id: 1, name: 'Major donors (€500+)', count: 42, totalValue: 89400 },
  { id: 2, name: 'Monthly supporters', count: 1247, totalValue: 52300 },
  { id: 3, name: 'Lapsed donors (6+ months)', count: 892, totalValue: 0 },
  { id: 4, name: 'First-time donors (this year)', count: 1567, totalValue: 45100 },
  { id: 5, name: 'Campaign-specific (Climate)', count: 892, totalValue: 34200 }
];

const thankYouTemplates = [
  { id: 1, name: 'Standard thank you', lastUsed: '2025-02-10', usedCount: 1234 },
  { id: 2, name: 'Major donor thank you', lastUsed: '2025-02-08', usedCount: 42 },
  { id: 3, name: 'Recurring donor welcome', lastUsed: '2025-02-05', usedCount: 89 }
];

const weeklyTrends = [52, 61, 58, 72, 68, 85, 78, 91, 82, 76, 88, 94];

app.get('/api/campaigns', (req, res) => res.json(campaigns));
app.get('/api/campaigns/:id', (req, res) => {
  const c = campaigns.find(x => x.id === parseInt(req.params.id));
  if (!c) return res.status(404).json({ error: 'Not found' });
  res.json(c);
});

app.get('/api/donors', (req, res) => {
  const campaignId = req.query.campaignId;
  const list = campaignId ? donors.filter(d => d.campaignId === parseInt(campaignId)) : donors;
  res.json(list);
});

app.get('/api/metrics', (req, res) => res.json(metrics));
app.get('/api/communications', (req, res) => res.json(communications));
app.get('/api/notifications', (req, res) => res.json(notifications));
app.get('/api/audit-log', (req, res) => res.json(auditLog));
app.get('/api/team', (req, res) => res.json(team));
app.get('/api/donor-segments', (req, res) => res.json(donorSegments));
app.get('/api/thank-you-templates', (req, res) => res.json(thankYouTemplates));
app.get('/api/weekly-trends', (req, res) => res.json(weeklyTrends));

app.post('/api/campaigns', (req, res) => {
  const maxId = Math.max(...campaigns.map(c => c.id), 0);
  const newCampaign = { id: maxId + 1, raised: 0, donors: 0, status: 'active', ...req.body };
  campaigns.push(newCampaign);
  res.status(201).json(newCampaign);
});

app.post('/api/donors', (req, res) => {
  const maxId = Math.max(...donors.map(d => d.id), 0);
  const newDonor = { id: maxId + 1, date: new Date().toISOString().slice(0, 10), ...req.body };
  donors.push(newDonor);
  const camp = campaigns.find(c => c.id === newDonor.campaignId);
  if (camp) {
    camp.raised += newDonor.amount;
    camp.donors += 1;
  }
  res.status(201).json(newDonor);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
