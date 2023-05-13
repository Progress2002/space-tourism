import React from "react";
import Record from "./Record";
import { useState } from "react";

const Details = (props) => {
  const [active, setActive] = useState("MOON");
  const { data, handleSelection } = props;
  const { name, description, distance, travel } = data;

  const destinations = ["MOON", "MARS", "EUROPA", "TITAN"];

  const activeStyle = { color: "#fff", borderBottom: "2px solid #fff" };

  const handleClick = (name, index) => {
    handleSelection(index);
    setActive(name);
  };

  return (
    <section className="mx-4 pb-14 md:container lg:p-0 lg:text-left lg:w-96 lg:mr-0 ">
      <ul className="flex justify-center text-primaryColor tracking-widest text-lg gap-4 cursor-pointer mt-8 md:mt-11 md:text-xl lg:text-base lg:justify-start lg:mt-14">
        {destinations.map((destination, index) => (
          <li
            className={`md:p-3 lg:h-10 lg:py-2 lg:px-0 hover:border-b-2 hover:text-white`}
            key={index}
            onClick={() => handleClick(destination, index)}
            style={active === destination ? activeStyle : {}}>
            {destination}
          </li>
        ))}
      </ul>
      <h1
        className="text-white text-6xl capitalize text-center mt-7 mb-4 tracking-wider md:text-8xl lg:text-6xl lg:text-left"
        style={{ fontFamily: "'Bellefair', serif" }}>
        {name.toUpperCase()}
      </h1>
      <div className="flex justify-center mb-9 lg:justify-start">
        <p className="text-primaryColor text-lg leading-7 text-center border-b pb-9 border-slate-800 md:w-5/6 lg:text-left lg:text-base">
          {description}
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center gap-10 lg:justify-start">
        <Record subTitle="AVG, DISTANCE" distance={distance} />
        <Record subTitle="EST. TRAVEL TIME" distance={travel} />
      </div>
    </section>
  );
};

export default Details;
