import React from "react";

import { CheckCircleFill,  Star,StarFill } from 'react-bootstrap-icons';

import { FaShopify , FaThumbsUp, FaThumbsDown, FaStore , FaStoreAltSlash, FaHouse, FaBuilding} from 'react-icons/fa';

import Image from "next/image";

const RatingsReviews = ({item}) => {
  function renderStars(num) {
  const filledStars = Math.floor(num);
  const emptyStars = 5 - filledStars;
  const stars = [];
  
  for (let i = 0; i < filledStars; i++) {
    stars.push(<StarFill className="text-warning me-1" key={i} />);
  }
  
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star className="text-secondary me-1" key={i + filledStars} />);
  }
  
  return stars;
}

  return (
    <div className="border-bottom mb-3">
      <div className="mb-2">
        <span>
        {renderStars(item?.rating)}
        </span>
        <br />
        <p className="text-muted small">
        by {item.reviewer}  | {" "}
          <CheckCircleFill className="text-success me-1" />
          <span className="text-primary small">Verified Purchase</span>  | {" "}
          <i className="fw-bold small">{item?.reviewTime}</i>
        </p>
      </div>
      <p>
        {item?.reviewContent}
      </p>
     
      <div>
  
  {item?.images?.map((image, index) => (
   
   <Image
key={index}
src={`https://proxy.vnxservers.com/${image.url}`}
className={'img-fluid  border border-secondary me-2'}
width={75}
height={100}
alt={image.alt}
/>
    
))}
</div>
 <span className="small">
        {item?.skuInfo}
      </span>
      <p>
      {item?.skuInfos}
      </p>
      
      <div className="mb-2">
        <button className="btn btn-sm  me-2">
          <FaThumbsUp  /> {item?.likeCount}
        </button>
      
      </div>
     {item?.replies &&  <div className="mb-2 ml-2">
      <p className="text-danger small">
      <FaBuilding  color="red"  /> {" "}Respond from store - {item?.replies[0].reviewTime}
        
          </p>
          <p>
        {item?.replies[0]?.reviewContent}
      </p>
      <div >
        <button className="btn btn-sm  me-2">
          <FaThumbsUp  /> {item?.replies[0]?.likeCount}
        </button>
      
      </div>
      </div>}

    </div>
  );
};

export default RatingsReviews;
