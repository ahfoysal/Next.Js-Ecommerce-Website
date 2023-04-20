


import { useContextS } from '@/store/context/AllContext';
import axios from 'axios';
import Link from 'next/link';
import React, {  useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  let {  setIsLoggedIn, isLoggedIn, getUser  } =  useContextS();
  const [error, setError] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ]  = useState("");
  



  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    const body = {
      email: email,
      password: password,
    };
  
    try {
      const response = await axios.post('/api/login', body, {
        headers: {
          Authorization: `${process.env.ACCESS_TOKEN}`,
        },
      });
      console.log(response.data);
      setCookie(null, 'token', response.data, {
        maxAge: 30 * 24 * 60 * 60, // The cookie will last for 30 days
        path: '/', // The cookie will be accessible from all pages
      });
      setIsLoggedIn(true)
      getUser()
      
    
      // Handle successful login
    } catch (error) {
      console.error(error.response?.data);
    //   const errorMessage = error.response?.data || 'Login failed.';
      setError(error.response?.data?.data?.message);
    }
  };

useEffect(() => {
  
  if(isLoggedIn){  router.push(`/profile`)}
}, [isLoggedIn, router])


    
  return (
    <div className='login'>
    <form className='form' onSubmit={handleSubmit}>
      <h4>Log In</h4>
   
    {error && <p className='error'>{error}</p>}

  
    <div className="input-bx">
            <input  type="text" required="required" onChange={(e) => setEmail(e.target.value)}/>
            <span>Email or Username</span>
          
        </div>     <br />
        <div className="input-bx">
            <input type="password" required="required"   onChange={(e) => setPassword(e.target.value)}/>
            <span>Password</span>
        </div>   <br />
<div className="buttons form__element">
      <Button type="submit">  LOGIN</Button></div>
      <span className='form-span'>Need help logging in?</span>
<hr /> 
      <div className="buttons form__element">


<Link href={'/signup'}>   <Button   className='secondary'>
        Sign Up
      </Button></Link>

</div>
  
    </form>

   
  
    </div>
  )
}

export default Login