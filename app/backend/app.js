import express from 'express';
import scrapeRoutes from './src/routes/scrapeRoutes.js'

const app = express();

// API routes
app.use(scrapeRoutes);

export default app;