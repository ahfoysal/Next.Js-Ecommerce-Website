  import React from "react";
  import Link from "next/link";
import Image from "next/image";

const CardProductGrid = (props) => {
  
  const product = props?.data;
  return (
    <div className="card">
     <Link href={`/product/${product?.slug}`} className="text-decoration-none">
          
      
      <Image height={200} width={500} src={product?.images[0]?.src} className="card-img-top" alt="..." />
  
      <div className="card-body">
      <h6 className="card-subtitle mb-2">
          
            {product?.name}
         
        </h6>
      
        <div className="my-2">
          <span className="fw-bold h5">৳{product?.price * 100}</span>
          
            <del className="small text-muted ms-2">৳{product?.regular_price * 100}</del>
          
        </div>
       
      </div>
      </Link> 
    </div>
  );
};

export default CardProductGrid;
