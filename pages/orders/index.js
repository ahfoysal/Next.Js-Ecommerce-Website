import { useContextS } from '@/store/context/AllContext';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


const Order = () => {
    let {  userInfo, isLoggedIn} =  useContextS();
    const router = useRouter();
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        try {
          const response = await axios.get(`/api/orders`, {
            headers: {
              'Authorization': `${process.env.ACCESS_TOKEN}`
            },
            params: {
              customer: userInfo.id
            }
          }); 
          setOrders(response.data);
          
        } catch (error) {
          console.error(error);
        }
      }
      

            useEffect(() => {
                // if(!isLoggedIn){  router.push(`/login`)}
              if(isLoggedIn)(  getOrders())
              
            
            }, [isLoggedIn,router])
            

  return (
    <div className='cart-page'>
      
    <p className='top-line'>Your Orders </p>
  <div className='orders__inner' >      
{ orders.map((name) => {
             return  <div key={name.number} className='payment__summary pay_sum' > <Link href={`/order/${name.number}`}>
              <h5>Order ID: {name.number}</h5>
              <p>Payment Method: {name.payment_method}</p>
            <div className='order__list noScrollbar'>
             
            {name.line_items?.map((pro) => {
                      return   <div key={pro.id} className='order__item item_order'> 
              <div className='order__image'><img src={pro.image.src} alt=""   /></div>
              <span className='order__name'>{pro.name}</span>
              <span className="order__quantity">x{pro.quantity}</span>
              </div>
              }
            )}</div>

                <div className="payment__item" style={{marginTop: "auto"}}>
                <span className="payment__name">Total Amount</span>
                  <span className="payment__price">{name.total}</span>
                </div>
                <div className="payment__item" style={{marginTop: "auto"}}>
             <p className="payment__name">status  </p>
             <span className='payment__status'> {name.status} </span>

                  </div>



          </Link>   </div>
             })}




             
            
             {isLoggedIn &&  orders.length < 1 && <p>No order made yet.</p>}
             {!isLoggedIn && <p>Please Login To Check Orders</p> }
    </div>  
 
</div>
  )
}

export default Order