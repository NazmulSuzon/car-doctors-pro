import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service || {};
  return (
    <div className="shadow-xl card card-compact bg-base-100 w-96">
      <figure>
        <Image height={120} width={430} src={img} alt="img"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="items-center justify-between card-actions">
        <h3 className="text-xl text-primary">Price: ${price}</h3>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
