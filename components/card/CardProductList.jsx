import React from "react";
import Link from "next/link";

import { StarFill, TruckFill } from 'react-bootstrap-icons';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import Image from "next/image";

const CardProductList = (props) => {
  
  const product = props.data;

  return (
    <div className="card">
      <Link  href={`/product/${product?.slug}`} className="text-decoration-none">
      <div className="row g-0">
        <div className="col-md-3 text-center">
        <Image height={200} width={500} src={product?.images[0]?.src} className="card-img-top" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h6 className="card-subtitle me-2 d-inline">
            
                {product.name}
             
            </h6>
            {/* {product.isNew && (
              <span className="badge bg-success me-2">New</span>
            )}
            {product.isHot && <span className="badge bg-danger me-2">Hot</span>}

            <div>
              {product.star > 0 &&
                Array.from({ length: 5 }, (_, key) => {
                  if (key <= product.star)
                    return (
                      <IconStarFill className="text-warning me-1" key={key} />
                    );
                  else
                    return (
                      <IconStarFill className="text-secondary me-1" key={key} />
                    );
                })}
            </div> */}
            {/* {product.description &&
              product.description.includes("|") === false && (
                <p className="small mt-2">{product.description}</p>
              )} */}
           
              {/* <ul className="mt-2">
                {product?.description?.slice(0,5)?.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul> */}
          
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
          <div className="mb-2">
            <span className="fw-bold h5">${product?.price * 100}</span>
         
              <del className="small text-muted ms-2">
              ৳{product?.regular_price * 100}
              </del>
       
            {/* {(product.discountPercentage > 0 || product.discountPrice > 0) && (
              <span className={`rounded p-1 bg-warning ms-2 small`}>
                -
                {product.discountPercentage > 0
                  ? product.discountPercentage + "%"
                  : "$" + product.discountPrice}
              </span>
            )} */}
          </div>
          {/* {product.isFreeShipping && (
            <p className="text-success small mb-2">
              <IconTruckFill /> Free shipping
            </p>
          )} */}

          
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CardProductList;
