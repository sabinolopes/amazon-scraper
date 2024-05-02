// Get scraoeButton and keywordInput from the DOM
const scrapeButton = document.getElementById('scrapeButton');
const keywordInput = document.getElementById('keywordInput');

const API_URL = 'http://localhost:3001/api/scrape?keyword=';

 // Function to create a list of products
const createProductList = (product, ul) => {
    const { title, rating, reviews, imageUrl } = product;

    if (!title || !rating || !reviews || !imageUrl)  return;

      const li = document.createElement('li');
      li.innerHTML = `
          <div>
              <img src="${imageUrl}" alt="${title}" width="100">
              <div>
                  <p>Title: ${title}</p>
                  <p>Rating: ${rating}</p>
                  <p>Reviews: ${reviews}</p>
              </div>
          </div>
      `;
      ul.appendChild(li);
}

// Function to display the results
const displayResults = (data) => {
  // Get the results div
  const resultsDiv = document.getElementById('results');

  // Clear the previous results
  resultsDiv.innerHTML = '';

  // Check if there are no results
  if (data.length === 0) {
      resultsDiv.innerHTML = '<p>No results found.</p>';
      return;
  }

  // Create a list of products
  const ul = document.createElement('ul');
  data.forEach((product) => createProductList(product, ul));

  // Append the list to the results div
  resultsDiv.appendChild(ul);
}

// Add an event listener to the scrape button
scrapeButton.addEventListener('click', async () => {
    const keyword = document.getElementById('keywordInput').value.trim();
    if (!keyword) {
        alert('Please enter a keyword.');
        return;
    }

    // Make a GET request to the API
    try {
        // Get the data from the API
        const response = await axios.get(`${API_URL}${keyword}`);
        displayResults(response.data);
    } catch (error) {
        // Log the error to the console
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});

// Add an event listener to the keyword input
keywordInput.addEventListener('keydown', async (event) => {
  if (event.key === 'Enter') {
      scrapeButton.click();
  }
});