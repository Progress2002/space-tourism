import React from "react";
import Intro from "../Intro";

const Image = (props) => {
  const { img, name } = props;

  return (
    <section className="lg:w-96 ">
      <Intro num="01" text="PICK YOUR DESTINATION"/>
      <div className=" flex justify-center">
        <img
          src={img}
          alt={name}
          className="destination-img w-48 h-48 md:w-64 md:h-64 block lg:w-80 lg:h-80"
        />
      </div>
    </section>
  );
};

export default Image;
