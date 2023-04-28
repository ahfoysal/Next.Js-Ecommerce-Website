import axios from 'axios';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 600 }); // Cache TTL set to 10 minutes

export default async function handler(req, res) {
  let { search, query, per_page, category, brand, max_price, min_price, orderby, slug, include } = req.query;

  // Build axios parameters object
  let order = orderby === 'price-desc' ? 'asc' : 'desc';

  if (orderby === 'price-asc' || orderby === 'price-desc') {
    orderby = 'price';
  }

  const params = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    per_page: per_page || 40,
    status: 'publish',
    search: search,
    category: category || '',
    min_price: min_price || '',
    max_price: max_price || '',
    orderby,
    order,
    slug: slug || '',
    include: include || '',
  };

  // Add brand attribute if provided
  if (brand) {
    params.attribute_term = brand;
    params.attribute = 'pa_brand';
  }

  const cacheKey = JSON.stringify(params); // Create a cache key based on the params object

  // Check if the data is already cached
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.status(200).json(cachedData);
  }

  try {
    const response = await axios.get(`${process.env.shopLink}${query ? query : 'products'}`, {
      params,
    });

    const data = response.data;

    cache.set(cacheKey, data); // Cache the data

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}