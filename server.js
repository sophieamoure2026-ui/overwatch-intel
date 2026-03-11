const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/terminal', (req, res) => res.sendFile(path.join(__dirname, 'public', 'dashboard.html')));
app.get('/enterprise', (req, res) => res.sendFile(path.join(__dirname, 'public', 'enterprise.html')));

// Health check for Render
app.get('/health', (req, res) => res.json({ status: 'OVERWATCH ONLINE', ts: new Date().toISOString() }));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`OVERWATCH running on port ${PORT}`);
});
