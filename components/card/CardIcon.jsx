import Link from "next/link";
import React from "react";

const CardIcon = (props) => {
  return (
    <Link href={'/'} className="text-decoration-none">
      <div className="card text-center">
        <div className="card-body">
          {props.children}
          <h6 className="card-title text-capitalize">{props.title}</h6>
          <div className="card-text text-success">{props.text}</div>
          <small className="text-muted">{props.tips}</small>
        </div>
      </div>
    </Link>
  );
};

export default CardIcon;
