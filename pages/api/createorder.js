import checkAccessToken from '@/components/api/validateApi';
import axios from 'axios';

export default checkAccessToken(async function handler(req, res) {
  console.log(JSON.stringify(req.body)); // your JSON
  // response.send(request.body);

  const params = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
   
  };

  try {
    const response = await axios.post(`${process.env.shopLink}orders`, req.body, {
      params: params,
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
