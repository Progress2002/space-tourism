import React from "react";

const Record = (props) => {
  const { distance, subTitle } = props;
  return (
    <div className="text-center lg:text-left">
      <h3 className=" text-primaryColor tracking-widest text-lg mb-2 lg:text-xs">
        {subTitle}
      </h3>
      <h2
        className="text-3xl text-white lg:text-xl"
        style={{ fontFamily: "'Bellefair', serif" }}>
        {distance.toUpperCase()}
      </h2>
    </div>
  );
};

export default Record;
