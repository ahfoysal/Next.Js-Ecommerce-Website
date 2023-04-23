import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "react-bootstrap";

const CardProductGrid = (props) => {
  const product = props?.data;

  return (
    <Card>
      <Link href={`/product/${product?.slug}`} >
      
          <Image src={product?.images[0]?.src} className="card-img-top" alt="..." width={500} height={200} />
        
    

      <Card.Body>
        <Card.Title>
      
            
              <h6>{product?.name}</h6>
            
     
        </Card.Title>

        <div className="my-2">
          <span className="fw-bold h5">৳{product?.price * 100}</span>

          <del className="small text-muted ms-2">৳{product?.regular_price * 100}</del>
        </div>
      </Card.Body>
      </Link>
    </Card>
  );
};

export default CardProductGrid;
