import React from "react";

const Image = (props) => {
  const { img, name } = props;

  return (
    <section className="">
      <h3 className="text-primaryColor tracking-widest  h-7 text-center mb-9 text-lg md:text-left md:mt-10 md:mb-16">
        <span className="mr-5 opacity-40">01</span>
        PICK YOUR DESTINATION
      </h3>
      <div className=" flex justify-center">
        <img src={img} alt={name} className="w-48 h-48 md:w-64 md:h-64 block" />
      </div>
    </section>
  );
};

export default Image;
