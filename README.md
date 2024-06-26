# Amazon Scraper

## Description

This project is a data scraper for Amazon. It is used to extract product information from Amazon search results for a given keyword.

## Setup and running instructions (With Docker)

1. **Clone the Repository**: 
   Clone the repository to your local machine using the following command:
   ```bash
   git clone git@github.com:sabinolopes/amazon-scraper.git
2. **Build and Run the Docker Containers**:
   Run the following command to build and start the Docker containers:
   ```bash
   docker-compose up --build
3. **Access the Application**:
    Once the containers are up and running, you can access the application at http://localhost:3000/ in your web browser.
4.  **Test the Application**:
    Type a keyword into the input field and click the "Scrape" button. This will trigger an AJAX call to the backend endpoint, which will scrape data based on the provided keyword and display the results on the page.
5.  **Optional: Press Enter Key**:
    You can also press the Enter key after typing a keyword to trigger the AJAX call instead of clicking the "Scrape" button.
## Setup and running instructions (Without Docker)

1. **Clone the Repository**: 
   Clone the repository to your local machine using the following command:
   ```bash
   git clone git@github.com:sabinolopes/amazon-scraper.git
2. **Install Dependencies**:
    Navigate to the project backend directory and install the dependencies using npm:
    ```bash
    npm install
3. **Run the Backend Server**:
    Run the backend server using Node.js. You can run it using:
    ```bash
    npm run dev
4.  **Open the Frontend**:
    Navigate to the project frontend directory, install the dependencies and run the frontend server using Vite. You can run it using:
    ```bash
    npm install && npm run dev
5.  **Test the Application**:
    Type a keyword into the input field and click the "Scrape" button. This will trigger an AJAX call to the backend endpoint, which will scrape data based on the provided keyword and display the results on the page.

6.  **Optional: Press Enter Key**:
    You can also press the Enter key after typing a keyword to trigger the AJAX call instead of clicking the "Scrape" button.
