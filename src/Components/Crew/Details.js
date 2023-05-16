import React, { useState } from "react";

const Details = (props) => {
  const { data, handleSelection } = props;
  const { name, bio, role } = data;

  const [active, setActive] = useState(1);

  const pageNumbers = [1, 2, 3, 4];

  const activeStyle = {
    backgroundColor: "#fff",
  };

  const handleClick = (crew, index) => {
    handleSelection(index);
    setActive(crew);
  };

  return (
    <section  className=" md:flex md:flex-col-reverse">
      <ul className="flex justify-center text-white text-base gap-4 cursor-pointer mt-8 md:mt-0 md:mb-10 md:text-xl  lg:text-base lg:mt-14 lg:justify-start">
        {pageNumbers.map((number, index) => (
          <li
            className={`w-3 h-3 md:w-6 md:h-6 hover:border-white bg-slate-400  text-center rounded-full`}
            key={index}
            onClick={() => handleClick(number, index)}
            style={active === number ? activeStyle : {}}></li>
        ))}
      </ul>
      
      <div className="pt-6 md:mx-0 ">
        <h3 className="text-white mix-blend-normal opacity-50 tracking-wider text-center text-lg md:text-4xl md:mb-5 lg:mt-3 lg:text-base lg:text-left ">
          {role.toUpperCase()}
        </h3>
        <h1
          className="text-white text-2xl capitalize text-center mb-4 mt-2 tracking-wider md:text-5xl lg:text-4xl lg:text-left"
          style={{ fontFamily: "'Bellefair', serif" }}>
          {name.toUpperCase()}
        </h1>
        <div className=" mb-9 lg:justify-start">
          <p className="text-primaryColor md:mb-1 text-lg leading-7 text-center md:text-3xl  md:leading-9 lg:text-left lg:text-base lg:w-2/3">
            {bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
