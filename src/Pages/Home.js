import React from "react";
import Header from "../Components/Header/Header";

const Home = () => {
  return (
    <div className="h-screen bg-no-repeat bg-cover" id="home">
      <Header />
      <div className=" homepage-body flex flex-col lg:flex-row gap-20 container  text-white text-center mt-10 md:container md:mt-20 md:gap-40">
        <div className="">
          <h3 className="text-primaryColor tracking-widest h-5 md:text-xl">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1
            className="text-7xl mt-6 mb-7 md:text-9xl"
            style={{ fontFamily: "'Bellefair', serif" }}>
            SPACE
          </h1>
          <p className="text-primaryColor px- leading-6 px-4 md:mx-32 md:px-0 md:text-xl md:leading-9">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex justify-center">
          <p
            className="py-14 px-5 rounded-full w-fit bg-white text-xl tracking-widest md:text-4xl md:py-24 md:px-7"
            style={{ color: "#0B0D17",fontFamily: "'Bellefair', serif"  }}>
            EXPLORE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
