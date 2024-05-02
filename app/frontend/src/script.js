const scrapeButton = document.getElementById('scrapeButton');
const keywordInput = document.getElementById('keywordInput');

const displayResults = (data) => {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (data.length === 0) {
      resultsDiv.innerHTML = '<p>No results found.</p>';
      return;
  }

  const ul = document.createElement('ul');
  data.forEach(product => {
      const li = document.createElement('li');
      li.innerHTML = `
          <div>
              <img src="${product.imageUrl}" alt="${product.title}" width="100">
              <div>
                  <p>Title: ${product.title}</p>
                  <p>Rating: ${product.rating}</p>
                  <p>Reviews: ${product.reviews}</p>
              </div>
          </div>
      `;
      ul.appendChild(li);
  });

  resultsDiv.appendChild(ul);
}

scrapeButton.addEventListener('click', async () => {
    const keyword = document.getElementById('keywordInput').value.trim();
    if (!keyword) {
        alert('Please enter a keyword.');
        return;
    }

    try {
        const response = await axios.get(`http://localhost:3001/api/scrape?keyword=${keyword}`);
        displayResults(response.data);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});

keywordInput.addEventListener('keydown', async (event) => {
  if (event.key === 'Enter') {
      scrapeButton.click();
  }
});