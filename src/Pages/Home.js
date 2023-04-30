import React from "react";
import Header from "../Components/Header/Header";

const Home = () => {
  return (
    <div className="h-screen bg-no-repeat bg-cover" id="home">
      <Header />
      <div className=" flex flex-col lg:flex-row gap-24 container  text-white text-center mt-10">
        <div className="">
          <h3 className="text-primaryColor tracking-widest h-5 ">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1
            className="text-7xl mt-6 mb-7"
            style={{ fontFamily: "'Bellefair', serif" }}>
            SPACE
          </h1>
          <p className="text-primaryColor px- leading-6 px-4">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex justify-center">
          <p
            className="py-14 px-8 rounded-full w-fit bg-white text-xl tracking-widest"
            style={{ color: "#0B0D17" }}>
            EXPLORE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
