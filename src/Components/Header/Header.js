import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg"
import icon_close from "../images/icon-close.svg"

const Header = () => {
  const [ isToggled, setIsToggled ] = useState(false)

  const toggleMenu = () => setIsToggled(!isToggled)

  return (
    <header className="flex justify-between items-center h-24 sticky md:relative px-8 md:pr-0 lg:top-7">
      <div className="Logo md:ml-9">
        <img className="h-12 w-12" src={logo} />
      </div>
      <div className="text-gr md:hidden z-10">
        <img className="h-7 w-7" onClick={toggleMenu} src={isToggled ? icon_close : hamburger} />
      </div>
      {
        isToggled && <MobileMenu />
      }
      <DesktopNav/>
    </header>
  );
};

export default Header;
