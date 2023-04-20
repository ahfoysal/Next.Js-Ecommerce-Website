import React from "react";
import Link from "next/link";
import Image from "next/image";

const CardImage = (props) => {
  return (
    <Link href={'/'}>
      <div className={`card shadow-sm ${props.className}`}>
        <div className="card-body p-0">
          <Image
              width={500}
        height={400}
            src={props.src}
            className="img-fluid rounded"
            alt="..."
          />
        </div>
      </div>
    </Link>
  );
};

export default CardImage;
