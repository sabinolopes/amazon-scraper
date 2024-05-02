const express = require('express');
const scrapeRoutes = require('./src/routes/scrapeRoutes');

const app = express();

// API routes
app.use('/api/scrape', scrapeRoutes);

