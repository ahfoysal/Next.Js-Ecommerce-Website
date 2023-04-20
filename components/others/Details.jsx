import React from "react";

const Details = ({product}) => {
  return (
    <React.Fragment>
     <div dangerouslySetInnerHTML={{ __html: product?.product?.desc }}></div>
      {/* <details>
        <summary>Even more details</summary>
        <p>Here are even more details about the details.</p>
      </details> */}
      <hr />
      <dl>
        {/* <dt>Brand</dt>
        <dd>   {product?.product?.brand?.name}</dd> */}
     
      </dl>
    </React.Fragment>
  );
};

export default Details;
