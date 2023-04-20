import React from 'react'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import Remove from '@mui/icons-material/RemoveShoppingCart';
import Link from 'next/link';
import { useContextS } from '@/store/context/AllContext';
const CartItems = ({item, fetchRelated, items}) => {
    let {   cart, addToCart , removeFromCart} =  useContextS();
    const incrs = () => {
            addToCart(item.id, 1)
    }

    const dcrs = () => {
        addToCart(item.id, -1)
}
    function getItemQuantity(itemId) {
        const item = cart.find((item) => item.id === itemId);
    
        return item ?  item.quantity : 0 // if item is found, return its quantity, otherwise return 0
      }
      const itemQuantity = getItemQuantity(item.id)
    
      item.quantity = itemQuantity
  return (
    <div className="cartItem" >
    <div className="cartItem__image">
              <img  src={item?.images[0]?.src}
                alt={item?.name} />
  
    </div>
    <div className="cartItem__details">
  
   <Link href={`/product/${item.slug}`}>   <p className="cartItem__name">{item.name}</p></Link>
      <div className="cartItem__footer">
      <div className='cartItem_title'>
        <p className="cartItem__price">
        ৳{(item.price * item.quantity).toFixed(1)}
         
        </p>
        {item.sale_price && <p className=" del">৳{(item.regular_price * item.quantity).toFixed(1)}</p>}</div>
        <div className="cartItem__buttons">
        <button type="button" disabled={item.quantity === 1 ? true : false} onClick={() => dcrs(item.id)}>
                    <MdRemoveCircleOutline size={20}  color="#1a1a2c"  />
                  </button>
                  <input className='cart-input' readOnly value={`${item.quantity}`} />
                  <button type="button"  onClick={() => incrs(item.id)} >
                    <MdAddCircleOutline size={20} color="#1a1a2c"/>
                  </button>
        </div>
        <div className="cartItem__remove"><button className="buttonRed"   onClick={() => {
          removeFromCart(item.id)
           if(items.length === 1)(fetchRelated())
        }}>
        <Remove  className='btnremove' fontSize="small" />
  
  
        </button>
        </div>
      </div>
    </div>
    
  
    </div>
  )
}

export default CartItems
