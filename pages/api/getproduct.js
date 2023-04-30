import axios from 'axios';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 120 });

export default async function handler(req, res) {
  let { search, per_page, category, brand, max_price, min_price, orderby, slug, include } = req.query;

  let cacheKey = `${process.env.shopLink}products-${JSON.stringify(req.query)}`;

  // Check if response is already cached
  const cachedData = cache.get(cacheKey);
  const pre = cache.get('pre');

  if (slug && pre  ){

    const filteredArray = pre.filter(obj => {
        return obj.slug === slug;
      });

      if(filteredArray.length > 0){
        console.log('Serving from filter', filteredArray[0].id , 'total cached:',pre?.length)
        filteredArray[0].cache = 'yes'
        return res.status(200).json(filteredArray,
            {
                'cache': 'hit'
              });
      }
      
  }    
  if (cachedData) {
    console.log('Serving from cache.');
    return res.status(200).json(cachedData);
  }

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
    category,
    min_price: min_price,
    max_price: max_price,
    orderby,
    order,
    slug: slug,
    include: include
  };

  // Add brand attribute if provided
  if (brand) {
    params.attribute_term = brand;
    params.attribute = 'pa_brand';
  }

  try {
    const response = await axios.get(`${process.env.shopLink}products`, {
      params,
    });

    const data = response.data;

    // Add response to cache with a TTL of 2 minutes (120 seconds)
    cache.set(cacheKey, data, 120);
    if(!slug){
        cache.set('pre', data, 300);
        // console.log( data.length +'products pre fetched')
    }

    // console.log('Adding data to cache. and pre');

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}
