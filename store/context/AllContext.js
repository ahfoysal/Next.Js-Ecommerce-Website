import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import { parseCookies } from 'nookies'
const contextProviderS = createContext();

export function ContextProviderS({ children }) {
  const cookies = parseCookies()

  const [allProducts, setAllProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [cart, setCart] = useState([]);
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  const [userInfo , setUserInfo] = useState('');


  function addToCart(pro, quantity) {
    let id = {
      id: pro
    }
 
    let indexOfObject = cart.filter(object => {
      return object.id === id.id;
    });
 
    if(indexOfObject.length >= 1){
      indexOfObject[0].quantity = indexOfObject[0].quantity+ quantity
    // console.log(indexOfObject[0])
    const newCart = [...cart, indexOfObject[0]];
    
    const unique = [...new Map(newCart.map((m) => [m.id  , m])).values()];
    // console.log(unique);
   
    setCart(unique);
    console.log(JSON.stringify(unique))
    localStorage.setItem("cartItems", JSON.stringify(unique))
    // console.log(newCart)
      return 

    }
    // console.log(indexOfObject)
    id.quantity = 1
    const newCart = [...cart, id];
    
    setCart(newCart);
 
    localStorage.setItem("cartItems", JSON.stringify(newCart))
  }
  
  const getCart = () => {
    console.log('cart restored')
    const newCart = localStorage.getItem("cartItems" ) 
    console.log(newCart , 'new')
    if(newCart === null){
      return setCart([])
    }
  setCart(JSON.parse(newCart))
  
  
  
  }
  const clearTheCart = () => {
     
    setCart([]) 
    localStorage.removeItem('cartItems');
    getCart()
  }
  const removeFromCart = (id) => {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex > -1) {
      const newCart = [...cart];
      newCart.splice(itemIndex, 1);
      setCart(newCart);
      localStorage.setItem("cartItems", JSON.stringify(newCart))
      console.log(`Item ${id} removed from cart`);
    } else {
      console.log(`Item ${id} not found in cart`);
    }
    
  }



  async function fetchCategories() {

    const response = await fetch(`/api/product?query=products/categories/`, {
      headers: {
        'Authorization': `${process.env.ACCESS_TOKEN}`
      }
    });
  const data = await response.json();
return setCategories(data)
}


  async function fetchProducts() {
    console.log('pre loading')
    const response = await fetch('/api/getproduct', {
      headers: {
        'Authorization': `${process.env.ACCESS_TOKEN}`
      }
    });
  const data = await response.json();
  return setAllProducts(data);
}

const checkUser = () => {
  const tokens = cookies.token
  if(tokens){
    try {
    
      if(tokens === 'undefined'){
         return console.log('not valid')
      }
      getUser()
      setIsLoggedIn(true)
      // valid token format
    } catch(error) {
      // invalid token format
    }
   

    
  }
  else(console.log('not logged in'))
}

const getUser = async () => {
  try {
    const response = await axios.get(`/api/auth`, {
      headers: {
        'Authorization': `${process.env.ACCESS_TOKEN}`
      }
    }); 
    console.log(response.data);
    setUserInfo(response.data)
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
  fetchProducts()
  checkUser()

  fetchCategories()
  getCart()

}, []);
  
    return(  
    <contextProviderS.Provider value={{ categories , allProducts, addToCart, cart,
     clearTheCart, removeFromCart, setIsLoggedIn, isLoggedIn, getUser, userInfo , fetchProducts}}>{children}</contextProviderS.Provider>)
    ;

}

export function useContextS() {
    return useContext(contextProviderS);
}


