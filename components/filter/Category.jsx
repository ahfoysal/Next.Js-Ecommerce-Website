import React from "react";
import Link from "next/link";

const FilterCategory = ({categories}) => {
  return (
    <div className="card mb-3 ">
      <div
        className="card-header fw-bold text-uppercase"
    
      >
        <span>Category</span>
      </div>
      <ul
        className="list-group list-group-flush show"
        id="filterCategory"
      >
   {categories?.slice(0, 8)?.map((item, index) => {
  // Exclude category named "Uncategorized"
  if (item?.name === "Uncategorized") {
    return null;
  }

  return (
    <li key={index} className="list-group-item">
      <Link href={`${item?.slug}?slug=${item.id}`} className="text-decoration-none stretched-link">
        {item?.name}
      </Link>
    </li>
  );
})}
      </ul>
    </div>
  );
};

export default FilterCategory;
