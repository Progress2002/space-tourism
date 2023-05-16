import React, { useState } from "react";

const Details = (props) => {
  const { data, handleSelection } = props;
  const { name, images, id, description } = data;
  const [active, setActive] = useState(1);

  const pageNumbers = [1, 2, 3];

  const activeStyle = {
    backgroundColor: "#fff",
    color: "#0B0D17",
    border: "none",
  };

  const handleClick = (tech, index) => {
    handleSelection(index);
    setActive(tech);
  };

  return (
    <section className="mx-4 pb-14 lg:p-0 lg:text-left lg:mr-0  lg:flex lg:w-2/3">
      <ul className="flex justify-center text-white text-base gap-4 cursor-pointer mt-8 md:mt-11 md:text-xl lg:text-base lg:justify-start lg:mt-14 lg:flex-col">
        {pageNumbers.map((number, index) => (
          <li
            className={`lg:w-14 lg:h-14 w-11 h-11 md:w-16 md:h-16 flex justify-center items-center hover:text-primaryColor border-2 hover:border-white border-gray-500  text-center rounded-full `}
            key={index}
            onClick={() => handleClick(number, index)}
            style={active === number ? activeStyle : {}}>
            {number}
          </li>
        ))}
      </ul>
      <div className="pt-12 md:mx-24">
        <h3 className="text-primaryColor tracking-widest  h-7 text-center text-lg md:mt-10  lg:mt-3 lg:text-base lg:text-left">
          THE TERMINOLOGY...
        </h3>
        <h1
          className="text-white text-4xl capitalize text-center mb-4 mt-2 tracking-wider md:text-5xl lg:text-4xl lg:text-left"
          style={{ fontFamily: "'Bellefair', serif" }}>
          {name.toUpperCase()}
        </h1>
        <div className="flex justify-center mb-9 lg:justify-start">
          <p className="text-primaryColor text-lg leading-7 text-center  md:w-5/6 md:text-xl md:leading-9 lg:text-left lg:text- lg:w-2/3">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
