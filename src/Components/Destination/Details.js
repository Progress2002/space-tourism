import React from "react";
import Destination from "../../Pages/Destination";
import Record from "./Record";

const Details = (props) => {
  const { data, handleSelection } = props;
  const { name, description, distance } = data;

  const destinations = ["MOON", "MARS", "EUROPA", "TITAN"];

  return (
    <section className="-mx-4 pb-14">
      <ul className="flex justify-center text-primaryColor tracking-widest  h-7 text-lg gap-4 cursor-pointer mt-8 md:mt-11">
        {destinations.map((destination, index) => (
          <li key={index} onClick={() => handleSelection(index)}>
            {destination}
          </li>
        ))}
      </ul>
      <h1
        className="text-white text-6xl capitalize text-center mt-7 mb-4 tracking-wider"
        style={{ fontFamily: "'Bellefair', serif" }}>
        {name.toUpperCase()}
      </h1>
      <p className="text-primaryColor text-lg leading-7 text-center border-b border-slate-800 pb-9 mb-9">
        {description}
      </p>
      <div className="flex flex-col md:flex-row gap-10">
        <Record subTitle="AVG, DISTANCE" distance={distance} />
        <Record subTitle="EST. TRAVEL TIME" distance={distance} />
      </div>
    </section>
  );
};

export default Details;
