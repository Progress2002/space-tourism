import React from "react";
import NavLink from "./NavLink";

const MobileMenu = () => {
  return (
    <nav
      className="text-white absolute w-64 right-0 top-0 h-screen"
      id="mobile-nav"
      style={{
        background: "rgba(255, 255, 255, 0.04)",
        backdropFilter: "blur(40.7742px)",
      }}>
      <ul
        className="text-base tracking-widest font-thin text-white flex flex-col gap-7 mt-32 ml-12"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
        <NavLink
          address={"/"}
          span={"00"}
          value={"HOME"}
        />
        <NavLink
          address={"/destination"}
          span={"01"}
          value={"DESTINATION"}
        />
        <NavLink
          address={"/crew"}
          span={"02"}
          value={"CREW"}
        />
        <NavLink
          address={"/technology"}
          span={"03"}
          value={"TECHNOLOGY"}
        />
      </ul>
    </nav>
  );
};

export default MobileMenu;
