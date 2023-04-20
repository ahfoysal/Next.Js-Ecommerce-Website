const axios = require('axios');
const NodeCache = require('node-cache');

// Create a new cache instance with a TTL of 1 minute (60 seconds)
const cacheInstanceTTL = 60;
const cache = new NodeCache({ stdTTL: cacheInstanceTTL });

// Define an express route handler function
const handler = async (req, res) => {

  // Use the 'customer' variable here
  const { customer , include} = req.query;
  const params = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    customer: customer    ,
    include: [include]
  };

  // Generate a unique cache key based on the shop URL, request params, and current timestamp
  const timestamp = Date.now();
  const cacheKey = `${process.env.shopLink}-${JSON.stringify(params)}-${timestamp}`;

  // Check if response data is already cached
  const cachedData = cache.get(cacheKey);
  
  if (cachedData) {
    console.log('Serving from cache.');
    return res.status(200).json(cachedData);
  }

  try {
    // Make a request to fetch the data
    const response = await axios.get(`${process.env.shopLink}orders`, { params });
    const data = response.data;

    // Add the response data to the cache with the generated cache key and separate TTL value
    const cacheValue = { data };
    cache.set(cacheKey, cacheValue, cacheInstanceTTL);

    console.log('Adding data to cache.');

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

// Export the handler function for use in other modules
module.exports = handler;
