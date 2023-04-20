import axios from 'axios';
import checkAccessToken from '@/components/api/validateApi';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 60 });

export default checkAccessToken(async function handler(req, res) {
  const { category } = req.query;

  // Use request URL as cache key
  const cacheKey = `${process.env.shopLink2}${category}`;

  // Check if response is already cached
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    console.log('Serving from cache.');
    return res.status(200).json(cachedData);
  }

  try {
    const response = await axios.get(`${process.env.shopLink2}${category}`);

    const data = response.data;

    // Add response to cache with a TTL of 60 seconds
    cache.set(cacheKey, data, 60);

    console.log('Adding data to cache.');

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});
