import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className="my-20 text-slate-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className={styles.about}>
            <img
              src="/assets/images/about_us/person.jpg"
              alt="person"
              className={styles.person}
              style={{ width: "500px", height: "500px" }}
            />
            <img
              src="/assets/images/about_us/parts.jpg"
              className={styles.parts}
              alt="parts"
              style={{ width: "327px", height: "332px" }}
            />
          </div>
          <div className="self-center space-y-8">
            <h6 className="text-xl font-semibold text-primary">About Us</h6>
            <h3 className="text-6xl font-bold">
              We are qualified & of experience in this field
            </h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </p>
            <button className="px-8 btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
