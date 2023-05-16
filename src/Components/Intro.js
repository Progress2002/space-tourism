import React from "react";

const Intro = (props) => {
  const { num, text } = props
  return (
    <h3 className="text-primaryColor tracking-widest  h-7 text-center mb-9 text-lg md:text-left md:mt-10 md:mb-16 lg:mt-3 lg:mb-14 lg:text-2xl">
      <span className="mr-5 opacity-40">{num}</span>
      {text}
    </h3>
  );
};

export default Intro;
