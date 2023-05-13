import React from "react";
import Header from "../Components/Header/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover" id="home">
      <Header />
      <div className=" homepage-body flex flex-col lg:flex-row gap-20 container  text-white text-center mt-10 md:container md:mt-20 md:gap-40 lg:pl-0 lg:text-left lg:justify-between lg:items-center lg:mt-44">
        <div className="">
          <h3 className="text-primaryColor tracking-widest  h-5 md:text-xl lg:mb-2">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1
            className="text-7xl mt-6 mb-7 md:text-9xl lg:my-0 "
            style={{ fontFamily: "'Bellefair', serif" }}>
            SPACE
          </h1>
          <p className="text-primaryColor px- leading-6 px-4 md:mx-32 md:px-0 md:text-xl md:leading-9 lg:text-left lg:mx-0 lg:leading-6 lg:text-lg lg:w-96">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex justify-center lg:w-full lg:justify-end ">
          <p
            className="explore-btn relative py-14 px-5 rounded-full w-fit bg-white text-xl tracking-widest md:text-4xl md:py-24 md:px-7 lg:text-3xl lg:leading-9 lg:h-fit lg:py-20 lg:px-5 lg:-mr-7 lg:hover:cursor-pointer"
            style={{ color: "#0B0D17", fontFamily: "'Bellefair', serif" }}>
            EXPLORE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
