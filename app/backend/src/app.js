import express from 'express';
import cors from 'cors';
import scrapeRoutes from './routes/scrapeRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use(scrapeRoutes);

export default app;