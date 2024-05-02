import axios from 'axios';
import { JSDOM } from 'jsdom';

const scrapeAmazon = async (keyword) => {
    try {
    const url = `https://www.amazon.com/s?k=${keyword}`;
    const { data } = await axios.get(url, {
        headers: {
            Accept: 'text/html,*/*',
            Host: 'www.amazon.com',
            Pragma: 'no-cache',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        },
    });
    const dom = new JSDOM(data);
    const document = dom.window.document;
    const products = document.querySelectorAll('.s-result-item');

    const scrapedData = [];

    products.forEach(product => {
        const titleElement = product.querySelector('h2 span');
        const title = titleElement ? titleElement.textContent.trim() : 'N/A';

        const ratingElement = product.querySelector('.a-row.a-size-small');
        const rating = ratingElement ? ratingElement.getAttribute('aria-label') : 'N/A';

        const reviewElement = product.querySelector('.a-size-base.s-underline-text');
        const reviews = reviewElement ? reviewElement.textContent.trim() : 'N/A';

        const imageElement = product.querySelector('.s-image');
        const imageUrl = imageElement ? imageElement.getAttribute('src') : 'N/A';

        scrapedData.push({
            title,
            rating,
            reviews,
            imageUrl
        });
    });

    return {status: 'SUCCESSFUL', data: scrapedData};
    } catch (error) {
        console.error('Error:', error);
        return {status: 'INTERNAL_SERVER_ERROR', data: {error} };
    }   
};

export default scrapeAmazon;