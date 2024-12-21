import React from "react";

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    previous: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    previous: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    previous: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    previous: "#slide3",
  },
];

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full mt-12">
        {banners?.map((banner, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full bg-top bg-no-repeat h-[90vh] rounded-3xl"
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`, 
            }}
          >
            <div className="h-full w-full flex items-center pl-36">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold">{banner.title}</h1>
                <p>{banner.description}</p>
                
                  <button className="btn btn-primary px-8 mx-2">
                    Discover More
                  </button>
                  <button className="btn btn-outline btn-primary px-8">
                    Latest Project
                  </button>
              </div>
            </div>
            <div className="absolute flex transform justify-between bottom-12 right-12 ">
              <a href={banner.previous} className="btn btn-circle mr-6">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
