import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'

const OrderPage = () => {
    const router = useRouter()
    const { id } = router.query
    const [details , setDetails] = useState({});

    const getOrders = async () => {
      try {
        const response = await axios.get(`/api/orders`, {
          headers: {
            'Authorization': `${process.env.ACCESS_TOKEN}`
          },
          params: {
            include: id
          }
        }); 
        setDetails(response?.data[0]);
        
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
      getOrders()
    }, [])
    
  return (
    <div className='cart-page'>

      <div className='orders__inner' >  
      <div key={details.number} className='order_sum pay_sum' >
      <p className='top-line'>Order ID: {details.number}</p>
    
      <p>Payment Method: {details.payment_method}</p>
     
    
          <div className='order__list noScrollbar'>
           
         {details.line_items?.map((pro) => {
                        return   <div key={pro.id} className='order__item item_order'> 
                        {/* <Link href={'/product/'+pro.product_slug}> */}
                    <div className='order__image'><img src={pro.image.src} alt=""   /></div>
                     <span className='order__name'>{pro.name}</span>
                    <span className="order__quantity">x{pro.quantity}</span>
                    {/* </Link> */}
                     </div>
    
                          }
                        )}</div>
                        
                        <div className="payment__item" style={{marginTop: "auto"}}>
                            <span className="payment__name">Total Amount</span>
                              <span className="payment__price">{details.total}</span>
                            </div>
                            <div className="payment__item" style={{marginTop: "auto"}}>
                         <p className="payment__name">status  </p>
                         <span className='payment__status'> {details.status} </span> 
    
    
                              </div>
    
    
        </div>
     </div>
  
        
           </div>
  )
}

export default OrderPage