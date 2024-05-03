const getElementData = (product, selector, attribute = 'textContent') => {
  const element = product.querySelector(selector);
  return element ? element[attribute].trim() : '';
};

const scrapingData = (products) => {
  const productsArray = Array.from(products);  

  return productsArray.map((product) => ({
    title: getElementData(product, 'h2 span'),
    rating: getElementData(product, '.a-icon-alt'),
    reviews: getElementData(product, '.a-size-base.s-underline-text'),
    imageUrl: getElementData(product, '.s-image', 'src'),
  }));
};

export default scrapingData;