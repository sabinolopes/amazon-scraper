import axios from 'axios';

const agent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

// Function to request data
const requestData = async (url) => {
  const { data } = await axios.get(url, {
       // Set the headers to avoid getting blocked
       headers: {
           Accept: 'text/html,*/*',
           Host: 'www.amazon.com',
           Pragma: 'no-cache',
           'User-Agent': agent,
       },
   });
   return data;
};

export default requestData;