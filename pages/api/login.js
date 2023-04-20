// api/login.js

import checkAccessToken from '@/components/api/validateApi';
import axios from 'axios';

export default checkAccessToken(async function handler(req, res) {
  console.log(req.body.email); // your JSON
  // response.send(request.body);

  function isEmailOrUsername(input) {
    // regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // test the input against the email regex pattern
    if (emailRegex.test(input)) {
      return true;
    } else {
      return false;
    }
  }
 
  const isEmail = isEmailOrUsername(req.body.email);


  try {
    const response = await axios.post(`https://shop.tazreemart.com/?rest_route=/simple-jwt-login/v1/auth&${isEmail ? 'email' : 'username'}=${req.body.email}&password=${req.body.password}&THISISMySpeCiaLAUthCodee=THISISMySpeCiaLAUthCodee`);
    res.json( response?.data?.data.jwt ); // Only return the JWT token in the response
  } catch (error) {
      console.log(error.response.data)
      res.status(401).json(error.response.data);
  }
});
