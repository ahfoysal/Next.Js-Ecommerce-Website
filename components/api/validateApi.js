

const checkAccessToken = (handler) => (req, res) => {
    const { authorization } = req.headers;
  
    if (!authorization || authorization !== process.env.ACCESS_TOKEN) {
      // Return a 401 Unauthorized response
      res.status(401).send('Unauthorized');
      return;
    }

    // Access token is valid, call the original handler function
    return handler(req, res);
  };
  
  export default checkAccessToken;
  