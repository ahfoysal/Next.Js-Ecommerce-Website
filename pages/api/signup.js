// api/login.js

import checkAccessToken from '@/components/api/validateApi';
import axios from 'axios';

export default checkAccessToken(async function handler(req, res) {
  console.log(req.body.email); // your JSON
  // response.send(request.body);
    const {email , password, userName, user_nicename} = req.body

  try {
    const response = await axios.post(`https://shop.tazreemart.com/?rest_route=/simple-jwt-login/v1/users&email=${email}&password=${password}&user_login=${userName}&user_nicename=${user_nicename}&THISISMySpeCiaLAUthCodee=THISISMySpeCiaLAUthCodee`);
    res.json( response?.data.user ); // Only return the JWT token in the response
  } catch (error) {
      console.log(error.response.data)
      res.status(401).json(error.response.data);
  }
});
