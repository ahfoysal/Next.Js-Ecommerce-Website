import React, { useEffect } from 'react'
import { destroyCookie } from 'nookies';
import { useContextS } from '@/store/context/AllContext';
import { useRouter } from 'next/router';

const Profile = () => {
    const router = useRouter();
    let { setIsLoggedIn, isLoggedIn, userInfo} =  useContextS();



const handleLogOut = () => {
    destroyCookie(null, 'token', { path: '/' });
    setIsLoggedIn(false)
    router.push(`/`)
}
useEffect(() => {
    if(!isLoggedIn){  router.push(`/login`)}

  
}, [isLoggedIn, router])


  return (
    <div className='cart-page profile'>
    <div className="profile__header">
    <img src="https://i.pravatar.cc/150?u=dfgsad@da.c" alt="" className="profile__avatar" />
    <span className="profile__header_span">
      <h3>Hi, {userInfo?.username}</h3>
      <p className="profile-stats">This is your profile page. Here, you can view and customize your profile details. Double check your details before check out.</p>
    </span>
    <div className="buttons" style={{marginLeft: "auto"}}>
    <button className='buttonRed'  onClick={handleLogOut}     style={{padding: "1rem 1.5rem"}}> Sign Out </button>
    </div>
    

    </div>
    <div className="profile__inner">
      <p>   <span>Name</span> <span> {userInfo?.username}  </span>  </p>
      <p>   <span>Email Address</span> <span>   {userInfo?.email}   </span>  </p>
    
    </div>
  </div>
  )
}

export default Profile
