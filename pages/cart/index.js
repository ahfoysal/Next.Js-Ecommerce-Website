import React, { useEffect, useState } from 'react'
import { useContextS } from '@/store/context/AllContext';
import Link from 'next/link';
import axios from 'axios';
import CartItems from '@/components/CartItems';
import { useRouter } from 'next/router';
import Spinner from 'react-bootstrap/Spinner';
const Cart = () => {
  ////props
  let { cart, clearTheCart } = useContextS();
  /////state
  const router = useRouter();

  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const items = [];

  for (let i = 0; i < cart?.length; i++) {
    items.push(cart[i]?.id);
  }

  const fetchCartItems = async (ids) => {
    if (items.length < 1) {
      setCartItems([]);
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const response = await axios.get(`/api/product`, {
        headers: {
          'Authorization': `${process.env.ACCESS_TOKEN}`
        },
        params: {
          include: `${ids}`
        }
      });
      setLoading(false);
      setCartItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const ids = [];

    for (let i = 0; i < cart?.length; i++) {
      ids.push(cart[i]?.id);
    }
    console.log((cart))

    if (cart?.length > 0) {
      fetchCartItems(ids);
    }
  }, [cart]);

  const total = cart?.reduce((total, item) => {
    // Find the item's price based on its ID
    const matchingItem = cartItems?.find(cartItem => cartItem.id === item.id);
    const price = matchingItem ? matchingItem.price : 0;

    // Add the cost of this item to the running total
    return total + price * item.quantity;
  }, 0).toFixed(2);

  const total2 = cart?.reduce((total, prd) => total + prd?.quantity , 0);

  if (isLoading) {
    return   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
    <Spinner animation="border" role="status">
      
    </Spinner>
  </div>
  }

  return (
    <>
      {cartItems.length >= 1 && (
        <div className='cart-page'>
          <div><p className='top-line'>Your Cart</p></div>
          <div className="cart__inner">
            <div className="cart__items">
              {cartItems?.length > 0 && cartItems.map((item, index) => (
                <CartItems key={index} items={items} fetchRelated={fetchCartItems} item={item} />
              ))}
            </div>
            <div className="cart__checkout">
              <p className='top-line'>Checkout</p>
              <p className="cart__total">
                Sub-Total: ৳{total}
              </p>
              <p>
                Number of items: {total2}
              </p>
              <span style={{opacity: ".7"}}>
                This price is exclusive of Delivery charge. Delivery charge will be added during checkout.
              </span>
              <div className="buttons">
                <button onClick={() => router.push('/checkout')}>
                  Proceed to Payment
                </button>
                <button className="red" onClick={() => {
                  clearTheCart();
                  setCartItems([]);
                }}>
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {cartItems < 1 && (
        <div className='cart-page'>
          <p>No Products In cart</p>
          <div className="buttons">
            <Link href={'/'}>
              <button>Continue Shopping</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
