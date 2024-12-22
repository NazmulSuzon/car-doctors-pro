import React from "react";
import {services} from '../../lib/services';
import ServiceCard from "../Cards/ServiceCard";

const Services = () => {
  return (
    <div className="min-h-screen mt-28 text-slate-900">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold text-primary">Our Services</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <div className="container grid grid-cols-1 gap-6 mx-auto mt-12 lg:grid-cols-3 md:grid-cols-2">
          {
            services?.map((service) => (
              <ServiceCard service={service} key={service._id}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
