import { JSDOM } from 'jsdom';
import requestData from '../utils/requestData.js';
import scrapingData from '../utils/scrapingData.js';

// Function to generate the URL
const getUrl = (keyword) => `https://www.amazon.com/s?k=${keyword}`;

// Function to scrape Amazon
const scrapeAmazon = async (keyword) => {
    try {
    const url = getUrl(keyword);
    // Request the data
    const data = await requestData(url);
    // Parse the HTML
    const dom = new JSDOM(data);
    const { document } = dom.window;
    // Get the products
    const products = document.querySelectorAll('.s-result-item');
     
    // Extract the data
    const scrapedData = scrapingData(products);

    // Return the data
    return {status: 'SUCCESSFUL', data: scrapedData};
    } catch (error) {
        console.error('Error:', error);
        // Return an error message
        return {status: 'INTERNAL_SERVER_ERROR', data: {error} };
    }   
};

export default scrapeAmazon;