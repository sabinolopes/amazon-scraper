import axios from 'axios';
import { JSDOM } from 'jsdom';

// Function to generate the URL
const getUrl = (keyword) => `https://www.amazon.com/s?k=${keyword}`;

// Function to scrape Amazon
const scrapeAmazon = async (keyword) => {
    try {
    const url = getUrl(keyword);
    const { data } = await axios.get(url, {
        // Set the headers to avoid getting blocked
        headers: {
            Accept: 'text/html,*/*',
            Host: 'www.amazon.com',
            Pragma: 'no-cache',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        },
    });
    // Parse the HTML
    const dom = new JSDOM(data);
    const document = dom.window.document;
    // Get the products
    const products = document.querySelectorAll('.s-result-item');
     
    // Extract the data
    const scrapedData = [];

    products.forEach(product => {
        // Get the title
        const titleElement = product.querySelector('h2 span');
        const title = titleElement ? titleElement.textContent.trim() : '';

        // Get the rating
        const ratingElement = product.querySelector('.a-icon-alt');
        const rating = ratingElement ? ratingElement.textContent.trim() : '';

        // Get the number of reviews
        const reviewElement = product.querySelector('.a-size-base.s-underline-text');
        const reviews = reviewElement ? reviewElement.textContent.trim() : '';

        // Get the image URL
        const imageElement = product.querySelector('.s-image');
        const imageUrl = imageElement ? imageElement.getAttribute('src') : '';
        
        // Add the data to the array
        scrapedData.push({
            title,
            rating,
            reviews,
            imageUrl
        });
    });

    // Return the data
    return {status: 'SUCCESSFUL', data: scrapedData};
    } catch (error) {
        console.error('Error:', error);
        // Return an error message
        return {status: 'INTERNAL_SERVER_ERROR', data: {error} };
    }   
};

export default scrapeAmazon;