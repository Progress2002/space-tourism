import React, { useState } from "react";
import Header from "../Components/Header/Header";
import data from "../Components/data";
import Image from "../Components/Destination/Image";
import Details from "../Components/Destination/Details";

const Destination = () => {
  const Data = data[0].destinations;
  const [destination, setDestination] = useState(Data[0]);
  const { name, images } = destination;
  const { png } = images;

  const handleSelection = (index) => {
    setDestination(Data[index])
  }

  return (
    <div className="min-h-screen bg-no-repeat bg-cover" id="destination">
      <Header />
      <main className="lg:flex container">
        <Image img={png} name={name} />
        <Details data={destination} handleSelection={handleSelection}/>
      </main>
    </div>
  );
};

export default Destination;
