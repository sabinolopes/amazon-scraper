const scrapingData = (products) => {
  const scrapedData = [];
  
  products.forEach((product) => {
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
    return scrapedData;
};

export default scrapingData;