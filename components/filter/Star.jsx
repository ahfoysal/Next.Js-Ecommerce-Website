import React from "react";

import { StarFill} from 'react-bootstrap-icons';

const FilterStar = (props) => {
  return (
    <div className="card mb-3">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterStar"
        aria-expanded="true"
        aria-controls="filterStar"
      >
    <span>  Rating</span>
      </div>
   
      <div className="card-body show" id="filterStar">
      {[...Array(5)].map((_, index) => (
        <div key={index}>
      {[...Array(5-index)].map((_, i) => (
        
    <StarFill
      key={i}
      className="text-warning me-1 mb-2"
      aria-label={`Star ${index + 1}`}
    />

  ))}
  
 {index !== 0 && <span className="filter-panel__title">And Up</span>}
  </div>
  ))}
        </div>
        

    </div>
  );
};

export default FilterStar;
