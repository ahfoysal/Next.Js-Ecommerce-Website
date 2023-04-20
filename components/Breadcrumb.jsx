import React from "react";
import Link from "next/link";
const Breadcrumb = ({breadcrumb}) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb rounded-0">
      {breadcrumb?.map((item, index) => {
    
        if (breadcrumb?.length-1 === index) {
          return (
            <li key={index} className="breadcrumb-item active" aria-current="page">
              {item?.title}
            </li>
          );
        } else {
          return (
            <li key={index} className="breadcrumb-item">
              <Link href={item?.url} title={item?.title}>{item?.title}</Link>
            </li>
          );
        }
        
      })}
      </ol>
    </nav>
  );
};
export default Breadcrumb;
