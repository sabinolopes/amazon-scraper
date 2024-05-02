import express from 'express';
import scrapeRoutes from './routes/scrapeRoutes.js';
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json())

// API routes
app.use(scrapeRoutes);

export default app;