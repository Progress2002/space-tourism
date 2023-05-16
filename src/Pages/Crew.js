import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Intro from "../Components/Intro";
import data from "../Components/data";
import CrewImage from "../Components/Crew/Crew_image";
import Details from "../Components/Crew/Details";

const Crew = () => {
  const Data = data[1].crew;
  const [crew, setCrew] = useState(Data[0]);
  const { name, images, bio, role } = crew;
  const { png } = images;

  const handleSelection = (index) => setCrew(Data[index])


  return (
    <div className="min-h-screen bg-no-repeat bg-cover lg:h-screen" id="crew">
      <Header />
      <div className="lg:mt-16">
        <div className="container">
          <Intro num="02" text="MEET YOUR CREW" />
        </div>
        <div className="container md:mb-0 md:flex md:flex-col-reverse lg:flex-row-reverse">
          <CrewImage imgURL={png} name={name}/>
          <Details data={crew} handleSelection={handleSelection}/>
        </div>
      </div>
    </div>
  );
};

export default Crew;
