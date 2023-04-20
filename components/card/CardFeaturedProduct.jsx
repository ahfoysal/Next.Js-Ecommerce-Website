import React from "react";
import Link from "next/link";
import { StarFill} from 'react-bootstrap-icons';

const CardFeaturedProduct = (props) => {
  const products = props.data;
  return (
    <div className="card mb-3">
      <div className="card-header fw-bold text-uppercase">
        Related Products
      </div>
      <div className="card-body">
        {products?.map((product, idx) => (
          <div
  className={` ${idx + 1 === products.length ? "" : "mb-3"}`}
  key={idx}
>
  <Link href={`/product/${product?.slug}`} className="text-decoration-none row">
    <div className="col-md-4">
      <img src={product?.images[0]?.src} className="img-fluid" alt="..." />
    </div>
    <div className="col-md-8">
      <h6 className="text-capitalize mb-1">{product?.name}</h6>
      <div className="mb-2">
        {/* {Array.from({ length: product.star }, (_, key) => (
              <StarFill className="text-warning me-1" key={key} />
            ))} */}
      </div>
      <span className="fw-bold h5">৳{product?.price * 100}</span>

      <del className="small text-muted ms-2">
        ৳{product?.regular_price * 100}
      </del>
    </div>
  </Link>
</div>
        ))}
      </div>
    </div>
  );
};

export default CardFeaturedProduct;
