import { useContextS } from '@/store/context/AllContext';
import React from 'react'

const CheckoutItems = ({item}) => {
    let {   cart } =  useContextS();
    function getItemQuantity(itemId) {
        const item = cart.find((item) => item.id === itemId);
    
        return item ?  item.quantity : 0 // if item is found, return its quantity, otherwise return 0
      }
      const itemQuantity = getItemQuantity(item.id)
    
      item.quantity = itemQuantity
  return (
    <div className="payment__item" >
          <span className='payment__name'>{item.name} </span>
          <span className='payment__quantity'>X{item.quantity}</span>  
          <span className='payment__price'>৳{(item.price * item.quantity).toFixed(2)}</span> </div>
    
 
  )
}

export default CheckoutItems