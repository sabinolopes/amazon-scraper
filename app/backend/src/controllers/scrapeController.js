import scrapeAmazon from '../services/scrapeService.js';
import mapStatusHTTP from '../utils/mapStatusHTTP.js';

const scrape = async (req, res) => {
  // Get the keyword from the query parameters
  const keyword = req.query.keyword;

    // Check if the keyword is missing
    if (!keyword) {
        return res.status(mapStatusHTTP('BAD_REQUEST')).json({ error: 'Missing keyword parameter' });
    }

  // Scrape Amazon
  const {status, data} = await scrapeAmazon(keyword);
  
  // Return the data
  return res.status(mapStatusHTTP(status)).json(data);
};

export default scrape;