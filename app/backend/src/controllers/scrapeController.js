import scrapeAmazon from '../services/scrapeService.js';
import mapStatusHTTP from '../utils/mapStatusHTTP.js';

const scrape = async (req, res) => {
  const keyword = req.query.keyword;

    if (!keyword) {
        return res.status(mapStatusHTTP('BAD_REQUEST')).json({ error: 'Missing keyword parameter' });
    }

  const {status, data} = await scrapeAmazon(keyword);
     
  return res.status(mapStatusHTTP(status)).json(data);
};

export default scrape;