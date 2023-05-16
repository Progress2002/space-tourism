import React from "react";

const TechnologyImage = (props) => {
  const { name, imgURL } = props;

  return (
    <div className="w-screen lg:w-1/3 ">
      <img
        className="w-full h-44 md:h-64 lg:h-full lg:w-full"
        src={imgURL}
        alt={name}
      />
    </div>
  );
};

export default TechnologyImage;
