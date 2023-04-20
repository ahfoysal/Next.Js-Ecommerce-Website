
import React, {   useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button1 from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import { useContextS } from '@/store/context/AllContext';
import axios from 'axios';
import CheckoutItems from '@/components/CheckoutItems';

const Checkout = () => {
  const { cart, clearTheCart, userInfo, isLoggedIn} = useContextS();
  const router = useRouter();
  const [cartItems, setCartItems] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  // const [email, setEmail] = useState('');
  const [customerID, setCustomerID] = useState(0);
  const [method, setMethod] = useState("cod");
  const [radio, setRadio] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  


  const total = cart.reduce((total, item) => {
    // Find the item's price based on its ID
    const matchingItem = cartItems.find(cartItem => cartItem.id === item.id);
    const price = matchingItem ? matchingItem.price : 0;
  
    // Add the cost of this item to the running total
    return total + price * item.quantity;
  }, 0).toFixed(2);

  /////////   Step Handler BAck & Continue
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   handleNext()
  };
////////////////////
  

/////// Create Order
const createOrder = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const body = {
      "payment_method": method,
      "customer_id": isLoggedIn ? userInfo.id : "0",
      "customer_note":"Note",
      "billing": {
        "first_name": name,
        "address_1": address,
        "phone": phone
      },
      "line_items": cart.map(item => ({
        "product_id": item.id,
        "quantity": item.quantity 
      }))
    }
    console.log(body)
    console.log(cart)
  
    try {
      const response = await axios.post(`/api/createorder`, body, {
        headers: {
          'Authorization': `${process.env.ACCESS_TOKEN}`
        },
      });
      const result = response.data;
      console.log(response.data);
      router.push(`/order/${result.number}`)
      if(radio)(window.location.replace(`https://sslcommerz-gateway.vercel.app/ssl-request/${result.total}/${result.id}`))              
      clearTheCart()
      setIsLoading(false)

    } catch (error) {
      console.error(error);
      setIsLoading(false)
     
      // Handle the error here, e.g. display an error message to the user
    }
  }
  


 
   
  const steps = [
    {
      label: 'Delivery Information',
      description: 
      <div> 
    
           

    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="Name" >
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control   required placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}  />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="address">
        <Form.Label column sm="2">
          Address
        </Form.Label>
        <Col sm="10">
          <Form.Control required placeholder="Address"  value={address} onChange={(e) => setAddress(e.target.value)} />
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3" controlId="phone">
        <Form.Label column sm="2">
         Phone
        </Form.Label>
        <Col sm="10">
          <Form.Control required placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}  />
        </Col>
      </Form.Group>

      <Button1 variant="warning" type="submit">Continue</Button1>

    </Form>
       </div>
   
    },
    {
      label: 'Choose a Payment Method',
      description: 
      <div>
    <div className="form-check ">
  <input className="form-check-input" onClick={()=>setRadio(false) & setMethod("cod")} type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
  <label className="form-check-label" htmlFor="flexRadioDefault1" >
    Cash On Delivery
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" onClick={()=>setRadio(true) & setMethod("Bkash")} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label"  htmlFor="flexRadioDefault2">
   Bkash
  </label>
</div>
    
 <div>
<Form onSubmit={createOrder}>
  

      <Button1 variant="warning" disabled={isLoading} type="submit">Checkout</Button1>
      
      </Form>
 </div>  



           </div>,
    },
  ];
  const ids = [];

  for (let i = 0; i < cart?.length; i++) {
    ids.push(cart[i]?.id);
  }
const fetchCartItems = async (ids) => {
  
  if(ids.length < 1){
    return setCartItems([])
  }
  try {
    const response = await axios.get(`/api/product`, {
      headers: {
        'Authorization': `${process.env.ACCESS_TOKEN}`
      },
      params: {
        include: `${ids}`
      }
    }); 
    console.log(response.data)
    setCartItems(response.data);
  } catch (error) {
    console.error(error);
  }
}

  useEffect(() => {
    if(cart?.length > 0)(fetchCartItems(ids))
    
    
    }, [ cart])



  return (
    
    <div className='cart-page checkout' >
            <div><p className='top-line'>Complete your Order</p></div>
       {cart.length >= 1 && <div className='payment__inner'><Box className='payment__method'   sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical" >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <div>{step.description}</div>
              <Box sx={{ mb: 2 }}>
                <div>            
<Button disabled={index === 0}  onClick={handleBack} sx={{ mt: 1, mr: 1 }}>Back</Button>

                </div>
   
             </Box>
            </StepContent>
          </Step>
        ))}
      
      </Stepper>
     
    </Box>
      
  <div className="payment__summary">    
  <p className='top-line2'>Order Summary</p>
  <div className='payment__summaryList'>
  {cartItems.map((item) => {
    return <CheckoutItems key={item.id} item={item} /> 
    })}
  <hr />
  <div className="payment__item">
          <span className='payment__name'>Delivery Charge: </span>
          <span className='payment__price'>৳0</span> </div>
          <div className="payment__item" >
          <span className='payment__name'> Total : </span>
          <span className='payment__price'>৳{total}</span> </div>

          <div className="payment__item" style={{marginTop: "30px"}}>
          <span className='payment__name'>Grand Total : </span>
          <span className='payment__price'>৳{total}</span> </div>

   </div>

</div>
</div> }
{cart < 1 && <p>Please Add atleast a Products In Cart</p>}
    </div>
  )
}

export default Checkout
