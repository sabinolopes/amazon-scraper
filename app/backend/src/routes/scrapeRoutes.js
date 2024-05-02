import express from 'express';
import scrape from '../controllers/scrapeController.js';

const scrapeRoutes = express.Router();

scrapeRoutes.get('/api/scrape', scrape);

export default scrapeRoutes;
