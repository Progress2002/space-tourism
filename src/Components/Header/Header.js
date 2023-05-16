import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import icon_close from "../images/icon-close.svg";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => setIsToggled(!isToggled);

  return (
    <header className="flex justify-between items-center h-24 sticky md:relative px-8 md:pr-0 lg:top-7">
      <div className="Logo md:ml-9">
        <img className="h-10 w-10 lg:h-14 lg:w-14" src={logo} alt="Logo" />
      </div>
      <div className=" md:hidden z-10">
        <img
          className="h-5 w-6"
          onClick={toggleMenu}
          src={isToggled ? icon_close : hamburger}
        />
      </div>
      {isToggled && <MobileMenu />}
      <DesktopNav />
    </header>
  );
};

export default Header;
