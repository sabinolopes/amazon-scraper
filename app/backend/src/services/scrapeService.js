const axios = require('axios');
const { JSDOM } = require('jsdom');

const scrapeAmazon = async (keyword) => {
    const url = `https://www.amazon.com/s?k=${keyword}`;
    const response = await axios.get(url);
    const dom = new JSDOM(response.data);
    const document = dom.window.document;
    const products = document.querySelectorAll('.s-result-item');

    const scrapedData = [];

    products.forEach(product => {
        const titleElement = product.querySelector('h2 span');
        const title = titleElement ? titleElement.textContent.trim() : 'N/A';

        const ratingElement = product.querySelector('.a-icon-star-small');
        const rating = ratingElement ? ratingElement.getAttribute('aria-label').replace(' out of 5 stars', '') : 'N/A';

        const reviewElement = product.querySelector('.a-size-base');
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

    return scrapedData;
};

module.exports = scrapeAmazon;