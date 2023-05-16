import React, { useState } from "react";
import useWindowDimensions from "../Components/window_layout";
import Header from "../Components/Header/Header";
import data from "../Components/data";
import Details from "../Components/Technology/Details";
import TechnologyImage from "../Components/Technology/Technology_Image";
import Intro from "../Components/Intro";

const Technology = () => {
  const { width } = useWindowDimensions();
  const Data = data[2].technology;
  const [technology, setTechnology] = useState(Data[0]);
  const { name, images } = technology;
  const { landscape, portrait } = images;

  const handleSelection = (index) => setTechnology(Data[index]);

  return (
    <div className="min-h-screen bg-no-repeat bg-cover" id="technology">
      <Header />
      <div className="lg:mt-16">
        <div className="container">
          <Intro num="03" text="SPACE LAUNCH 101" />
        </div>
        <div className="lg:flex-row-reverse lg:flex lg:justify-between  lg:ml-60">
          <TechnologyImage
            name={name}
            imgURL={width <= 1024 ? landscape : portrait}
          />
          <Details data={technology} handleSelection={handleSelection} />
        </div>
      </div>
    </div>
  );
};

export default Technology;
