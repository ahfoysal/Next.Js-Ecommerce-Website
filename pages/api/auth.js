const axios = require('axios');
const NodeCache = require('node-cache');
const { parseCookies } = require('nookies');
const jwt = require('jsonwebtoken');

// Create a new cache instance with a TTL of 1 minute (60 seconds)
const cacheTTL = 60;
const cache = new NodeCache({ stdTTL: cacheTTL });

// Define an express route handler function
const handler = async (req, res) => {
  const cookies = parseCookies({ req });
  let user;

  try {
    const token = cookies.token;
    user = jwt.decode(token);
  } catch (err) {
    console.error(`Error decoding JWT: ${err}`);
    // Handle the error here
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  // Use the 'user' variable here
 
console.log('fetching auth')
  const params = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret
  };

  // Generate a unique cache key based on the shop URL, request params, current timestamp, and user ID
  const timestamp = Math.floor(Date.now() / (1000 * cacheTTL));
  const cacheKey = `${process.env.shopLink}-${JSON.stringify(params)}-${timestamp}-${user?.id}`;

  // Check if response data is already cached
  const cachedData = cache.get(cacheKey);
  
  if (cachedData) {
    console.log('Serving from cache.');
    return res.status(200).json(cachedData);
  }

  try {
    // Make a request to fetch the data
    const response = await axios.get(`${process.env.shopLink}customers/${user?.id}`, { params });

    const data = response.data;

    // Add the response data to the cache with the generated cache key
    cache.set(cacheKey, data);

    console.log('Adding data to cache.');

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

// Export the handler function for use in other modules
module.exports = handler;
