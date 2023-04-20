

import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useContextS } from '@/store/context/AllContext';
import axios from 'axios';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
const Signup = () => {



  const { setIsLoggedIn, isLoggedIn, getUser } = useContextS();
  const router = useRouter();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ]  = useState("");
    const [ userName, setUserName ]  = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
      
        const body = {
          email: email,
          password: password,
          userName: userName
        };
      
        try {
          const response = await axios.post('/api/signup', body, {
            headers: {
              Authorization: `${process.env.ACCESS_TOKEN}`,
            },
          });
          console.log(response.data);
          handleLogin()
          // Handle successful login
        } catch (error) {
          console.error(error.response?.data);
        //   const errorMessage = error.response?.data || 'Login failed.';
          setError(error.response?.data?.data?.message);
        }
      };
      const handleLogin = async () => { 
        console.log(email, password)
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
          console.log('response.data');
          router.push(`/profile`)
          setCookie(null, 'token', response.data, {
            maxAge: 30 * 24 * 60 * 60, // The cookie will last for 30 days
            path: '/', // The cookie will be accessible from all pages
          });
          setIsLoggedIn(true)
          getUser()
         
          // Handle successful login
        } catch (error) {
        //   console.error(error.response?.data);
        //   const errorMessage = error.response?.data || 'Login failed.';
          setError(error.response?.data?.data?.message);
        }
      };

  return (
    <div className='signup'>
    <form className='form' onSubmit={handleSubmit}> 
    <h4>Create your Account</h4>
    {error && <p className='text-danger'>{error}</p>}
    {success && <p className='text-success'>{success}, Redirecting......</p>}
      <div className="input-bx">
            <input  type="text" required="required" onChange={(e) => setUserName(e.target.value)}/>
            <span>User Name</span>
        </div>     <br />
      <div className="input-bx">
            <input  type="email" required="required" onChange={(e) => setEmail(e.target.value)}/>
            <span>Email</span>
        </div>     <br />

      <div className="input-bx">
            <input  type="password" required="required" onChange={(e) => setPassword(e.target.value)}/>
            <span>Password</span>
        </div>     <br />


        <div className="buttons form__element">
      <Button type="submit">  Sign Up</Button></div>
      <span className='form-span'>Already have an account?</span>
<hr /> 
      <div className="buttons form__element">
      <Link href={'/login'}>   <Button   className='secondary'>
      LogIn
      </Button></Link>




</div>
  
     
    </form>
    
    </div>
  )
}

export default Signup