import React, { useState, useEffect } from 'react';
import { StarFill,StarHalf  } from 'react-bootstrap-icons';
import { FaCartPlus , FaHeart, FaShoppingCart, FaMinus , FaPlus} from 'react-icons/fa';
import CardFeaturedProduct from "../../components/card/CardFeaturedProduct";
import CardServices from "../../components/card/CardServices";
import Details from "../../components/others/Details";
import RatingsReviews from "../../components/others/RatingsReviews";
import QuestionAnswer from "../../components/others/QuestionAnswer";
import ShippingReturns from "../../components/others/ShippingReturns";
import SizeChart from "../../components/others/SizeChart";

import Breadcrumb from '../../components/Breadcrumb';
import ImagesContainer from '../../components/Images';
import VariationContainer from '../../components/VariationContainer';
import ProductReviews from '../../components/ProductReviews';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { useContextS } from '@/store/context/AllContext';



function ProductDetailView({ product }) {
  let {  addToCart  } =  useContextS();
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [variations, setVariations] = useState([])
  const [related, setRelated] = useState([])
  const [selectedAttributes, setSelectedAttributes] = useState({})
  const [matchAttributes, setMatchAttributes] = useState({})
  const images = product?.images
  const filteredOptions = product?.attributes 
  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/product?query=products/${product.id}/variations`, {
        headers: {
          'Authorization': `${process.env.ACCESS_TOKEN}`
        }
      });
      setVariations(response.data)
      // setSelectedAttributes(response.data[0])
    } catch (error) {
      console.error(error);
    }
  };
  const fetchRelated = async () => {

  
    try {
      const response = await axios.get(`/api/product`, {
        headers: {
          'Authorization': `${process.env.ACCESS_TOKEN}`
        },
        params: {
          include: `${product.related_ids}`
        }
      }); 
      setRelated(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
 

  useEffect(() => {
    console.log(product)
    if(product){
      setLoading(false)
      fetchRelated()
    }
    if(product?.type === "variable"){
      fetchData();
    }
   
    
   
   
  }, [product])
  const handleAttributeChange = (name, option) => {
  
    setSelectedAttributes((prevSelected) => ({
      ...prevSelected,
      [name]: option,
    }));
    
    const selectedOptions = { ...selectedAttributes, [name]: option };
    
    const matchingVariation = variations.find(variation =>
      variation.attributes.every(attribute =>
        Object.entries(selectedOptions).some(([key, value]) =>
          attribute.name === key && attribute.option === value
        )
      )
    );
    setMatchAttributes(matchingVariation)
    console.log(`Matching Variation:`, matchingVariation);
  };
  return (
    <div className="container-fluid mt-3">
   {!loading &&  <div className="row">
    <div className="col-md-8">
            <div className="row mb-3">
              <ImagesContainer images={images}/>
              <div className="col-md-7">
              {/* <span className="badge bg-success me-2">New</span> */}
              {product?.on_sale &&  <span className="badge bg-danger me-2">Sale</span>}
                <h1 className="h5 d-inline me-2">
                 {product?.name}
                </h1>
              
                <div className="mb-3">
                {/* {stars} */}
                  <span className="text-muted small">
                  {"     "}    {product?.rating_count} ratings |{" "} 0 Answered Questions
                  </span>
                </div>
                <div className="mb-3">
                {filteredOptions.map((option, index) => (
  <p className="text-muted small" key={index}>
    {option.name}: <span className='text-primary'>{option.options.join(", ")}</span>
  </p>
))  }
                </div>

             <VariationContainer variations={variations} selectedAttributes={selectedAttributes} handleAttributeChange={handleAttributeChange} />

               <div className="mb-3">
                  <span className="fw-bold h5 me-2">৳{matchAttributes?.price * 100||  product?.price * 100 }</span>
             {product.on_sale &&     <del className="small text-muted me-2">৳{matchAttributes?.regular_price * 100|| product?.regular_price * 100}</del>}
                  {/* <span className="rounded p-1 bg-warning  me-2 small">
   
                  </span> */}
                </div>
                <div className="mb-3">
                  <div className="d-inline float-start me-2">
                    <div className="input-group input-group-sm mw-140">
                      <button
                        className="btn btn-primary text-white"
                        type="button"
                        onClick={()=> {
                          if(quantity ===1 )return
                          setQuantity(quantity - 1)
                        }}
                      >
                        <FaMinus  />
                      </button>
                      <input
                        type="text"
                        className="form-control text-center"
                        value={quantity}
                        readOnly
                      />
                      <button
                        className="btn btn-primary text-white"
                        type="button"
                        onClick={()=> setQuantity(quantity + 1)}
                      >
                        <FaPlus  />
                      </button>
                    </div>
                  </div>
                 
                
                  <button
                    type="button"
                    onClick={()=> (addToCart(product.id, quantity))}
                    className="btn btn-sm btn-primary me-2"
                    title="Add to cart"
                  >
                    <FaCartPlus /> Add to cart
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    title="Add to wishlist"
                  >
                    <FaHeart />
                  </button>
                </div>
                <div>
                  <p className="fw-bold mb-2 small">
                  Product details of   {product?.name}
                  </p>
                  <div dangerouslySetInnerHTML={{ __html: product?.description }}></div>
                  
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
              <div className="tab-content p-3 small" id="nav-tabContent">
              <p className="fw-bold mb-2 ">
              Ratings & Reviews of {product?.name}

                  </p>
                  <ProductReviews product={product}  rating={4.8} ratings={[15, 10, 5, 0, 1]} />
              {/* {product?.review?.reviews?.map((item, index) =>{
                  return    <RatingsReviews  item={item} key={index} />
               } )} */}
              <Details product={product} />
              </div>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-link "
                      id="nav-details-tab"
                      data-bs-toggle="tab"
                      href="#nav-details"
                      role="tab"
                      aria-controls="nav-details"
                      aria-selected="true"
                    >
                        Questions About This Product (10)
                    </a>
                    <a
                      className="nav-link"
                      id="nav-ship-returns-tab"
                      data-bs-toggle="tab"
                      href="#nav-ship-returns"
                      role="tab"
                      aria-controls="nav-ship-returns"
                      aria-selected="false"
                    >
                      Shipping & Returns
                    </a>
                    <a
                      className="nav-link"
                      id="nav-size-chart-tab"
                      data-bs-toggle="tab"
                      href="#nav-size-chart"
                      role="tab"
                      aria-controls="nav-size-chart"
                      aria-selected="false"
                    >
                      Size Chart
                    </a>
                  </div>
                </nav>
                <div className="tab-content p-3 small" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-details"
                    role="tabpanel"
                    aria-labelledby="nav-details-tab"
                  >
                       {/* {product?.qna?.items?.map((item, index) =>{
                  return    <QuestionAnswer item={item} key={index} />
               } )} */}
                      
                  </div>
               
             
                  <div
                    className="tab-pane fade"
                    id="nav-ship-returns"
                    role="tabpanel"
                    aria-labelledby="nav-ship-returns-tab"
                  >
                    <ShippingReturns />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-size-chart"
                    role="tabpanel"
                    aria-labelledby="nav-size-chart-tab"
                  >
                    <SizeChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card mb-3">
      <div className="card-header ">
      <p className='text-small text-muted fw-bold'>Sold by</p>
      </div>
      <div className="card-body">
      <p className='text-small  fw-bold'>{product?.store?.shop_name || 'Official Store'}</p>
      </div>
      </div>
          <CardServices />
        
            <CardFeaturedProduct data={related} />
          
          </div>


    </div>}
    </div>
  );
}
export async function getServerSideProps(context) {

  const { query , req} = context;
  const { id} = query;
  
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const baseURL = `${protocol}://${host}`;
  
  
  
  try {
  const response = await axios.get(`${baseURL}/api/product`, {
  headers: {
  'Authorization': `${process.env.ACCESS_TOKEN}`
  },
  params: {
    slug: id
  }
  
  });
  const product = response.data[0];
  
  return {
  props: { product },
  };
  } catch (error) {
  console.error(error);
  return {
  props: { data: error },
  };
  }
  }
  

export default ProductDetailView;
