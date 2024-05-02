import express from 'express';
import scrape from '../controllers/scrapeController.js';

const scrapeRoutes = express.Router();

// GET /api/scrape
scrapeRoutes.get('/api/scrape', scrape);

export default scrapeRoutes;
