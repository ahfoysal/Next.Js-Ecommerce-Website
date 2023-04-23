import { useContextS } from '@/store/context/AllContext';
import Link from 'next/link'
import React from 'react'
import { BsPerson } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { SiShopify } from 'react-icons/si';
const SideBar = () => {
  let {  isLoggedIn} =  useContextS();

  return (
    <nav className="sidebar">
      
    <ul className="navbar--nav">
      <li className="logo">
        <Link href="/" className="nav--link">
          <span className="link-text logo-text">Next</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/" className="nav--link">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="cat"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-cat fa-w-16 fa-9x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391     v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158     c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747     c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401     c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79     c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
          <span className="link-text">Home</span>
        </Link>
      </li>

      <li className="nav-item">
      <Link href="/shop " className="nav--link">
      <SiShopify  style={{ fontSize: '2rem' }} />
          <span className="link-text">Shop</span>
       </Link>
      </li>

      <li className="nav-item">
      <Link href="/cart" className="nav--link">
      <FiShoppingCart  style={{ fontSize: '2rem' }} />
          <span className="link-text">Cart</span>
      </Link>
      </li>

      <li className="nav-item">
      <Link href="/login" className="nav--link">
      <BsPerson  style={{ fontSize: '2rem' }} />
         {isLoggedIn ? 
          <span className="link-text">Profile</span> : 
          <span className="link-text">Login</span>

         }
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default SideBar
