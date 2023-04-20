  import React from "react";
  import Link from "next/link";

import { StarFill} from 'react-bootstrap-icons';
import { FaCartPlus,  FaHeart} from 'react-icons/fa';
import Image from "next/image";

const CardProductGrid = (props) => {
  
  const product = props?.data;
  return (
    <div className="card">
     <Link href={`/product/${product?.slug}`} className="text-decoration-none">
          
      
      <Image height={200} width={500} src={product?.images[0]?.src} className="card-img-top" alt="..." />
      {/* {product?.isNew && (
        <span className="badge bg-success position-absolute mt-2 ms-2">
          New
        </span>
      )}
      {product?.isHot && (
        <span className="badge bg-danger position-absolute r-0 mt-2 me-2">
          Hot
        </span>
      )}
      {(product?.discountPercentage > 0 || product?.discountPrice > 0) && (
        <span
          className={`rounded position-absolute p-2 bg-warning  ms-2 small ${
            product?.isNew ? "mt-5" : "mt-2"
          }`}
        >
          -
          {product?.discountPercentage > 0
            ? product?.discountPercentage + "%"
            : "$" + product?.discountPrice}
        </span>
      )} */}
      <div className="card-body">
      <h6 className="card-subtitle mb-2">
          
            {product?.name}
         
        </h6>
      
        <div className="my-2">
          <span className="fw-bold h5">৳{product?.price * 100}</span>
          
            <del className="small text-muted ms-2">৳{product?.regular_price * 100}</del>
          
          {/* <span className="ms-2">
            {Array.from({ length: 5 }, (_, key) => (
              <StarFill className="text-warning me-1" key={key} />
            ))}
          </span> */}
        </div>
       
      </div>
      </Link> 
    </div>
  );
};

export default CardProductGrid;
